#!/bin/bash

echo "Setup hosting for \"node\" projects Strapi and NextJS"
echo ""

DIR="$(pwd)"
if [[ -f "/home/debian/jaccos-bin/functions.sh" ]]; then
  source /home/debian/jaccos-bin/functions.sh
else
  echo "You are not on the server"
  exit 1
fi

YARN=$(which yarn)
PM2=$(which pm2)
HOST=""
NAME=""
TYPE=""
FOLDER="."
IP=""
ENVIRONMENT=localhost
SKIP_BUILD=0
USE_WWW=0
SKIP_SSL=0

while test $# != 0; do
  case "$1" in
  -H | --host)
    shift
    HOST=$1
    echo "# Set host to $HOST"
    ;;
  -N | --name)
    shift
    NAME=$1
    echo "# Set name to $NAME"
    ;;
  -T | --type)
    shift
    TYPE=$1
    echo "# Set type to $TYPE"
    ;;
  -F | --folder)
    shift
    FOLDER=$1
    echo "# Set folder to $FOLDER"
    ;;
  -I | --ip)
    shift
    IP=$1
    echo "# Set ip to $IP"
    ;;
  -E | --env)
    shift
    ENVIRONMENT=$1
    echo "# Set environment to $ENVIRONMENT"
    ;;
  -S | --skip-build)
    SKIP_BUILD=1
    echo "# Skipping build"
    ;;
  -L | --skip-ssl)
    SKIP_SSL=1
    echo "# Skipping SSL certificate"
    ;;
  -W | --use-www)
    USE_WWW=1
    echo "# use www"
    ;;
  esac
  shift
done

echo ""
echo "# preflight check"

if [[ "" == "$HOST" ]]; then
  fatal "host must be set"
fi
if [[ "" == "$NAME" ]]; then
  fatal "name must be set"
fi
if [[ "" == "$IP" ]]; then
  fatal "ip must be set"
fi
if [[ "" == "$TYPE" ]]; then
  fatal "type must be set"
fi

if [[ "$TYPE" != "plain" ]] &&[[ "$TYPE" != "strapi" ]] && [[ "$TYPE" != "nextjs" ]]; then
  fatal "type is not supported: $TYPE"
fi

testFolder "$FOLDER"

echo "Check if host $HOST resolves to $IP"
HOST_ENTRY=$(dig +short "$HOST" | grep -F "$IP")
if [[ "" == "$HOST_ENTRY" ]]; then
  fatal "address $HOST should resolve to IP"
fi

if [[ "$TYPE" == "strapi" ]]; then
  testFile "devops/hosting/$ENVIRONMENT/$FOLDER/.env"
  testFile "devops/hosting/$ENVIRONMENT/nginx/strapi.conf"
fi

if [[ "$TYPE" == "nextjs" ]]; then
  testFile "devops/hosting/$ENVIRONMENT/$FOLDER/.env.local"
  testFile "devops/hosting/$ENVIRONMENT/nginx/nextjs.conf"
fi

echo "Check if yarn is installed"
if [[ ! -f "$YARN" ]]; then
  echo "yarn not found"
  echo "Install it by starting:"
  echo "sudo npm install --global yarn"
fi

echo "Check if pm2 is installed"
if [[ ! -f "$PM2" ]]; then
  echo "pm2 not found"
  echo "Install it by starting:"
  echo "(cd ~ && sudo npm i pm2 -g)"
fi

echo "# nginx test"
sudo nginx -t
checkForError "nginx test failed"

echo ""
echo "Preflight check OK"
echo ""
echo "Host: $HOST"
echo "Name: $NAME"
echo "Type: $TYPE"
echo "Folder: $FOLDER"
echo "IP address: $IP"
echo "Environment: $ENVIRONMENT"
echo "Use www: $USE_WWW"
echo "Skip Build: $SKIP_BUILD"
echo "Skip SSL: $SKIP_SSL"

echo ""
echo "Setting up hosting"
cd "$DIR/$FOLDER" || fatal "cannot change directory to $FOLDER"

if [[ -d "../devops/hosting/$ENVIRONMENT/$FOLDER" ]]; then
  echo "copy some files from devops/hosting/$ENVIRONMENT/$FOLDER"
  cp --verbose --recursive --force "../devops/hosting/$ENVIRONMENT/$FOLDER/" ..
  if [ $? -ne 0 ]; then
    fatal "copy files from devops/hosting/$ENVIRONMENT/$FOLDER failed"
  fi
fi

if [[ "$TYPE" == "strapi" ]]; then
  testFile config/server.js
  testFile .env

  if [[ "$SKIP_BUILD" != "1" ]]; then
    echo "# installing dependencies"
    NODE_ENV=production $YARN

    echo "# building strapi..."
    NODE_ENV=production $YARN strapi build
    if [ $? -ne 0 ]; then
      fatal "strapi build failed"
    fi
  fi
fi

if [[ "$TYPE" == "nextjs" ]]; then
  testFile .env.local

  if [[ "$SKIP_BUILD" != "1" ]]; then
    echo "# install dependencies"
    NODE_ENV=production $YARN

    echo "# building NextJS..."
    NODE_ENV=production $YARN build
    if [ $? -ne 0 ]; then
      fatal "NextJS build failed"
    fi
  fi
fi

if [[ "$SKIP_SSL" != "1" ]]; then
  if [[ "$ENVIRONMENT" == "development" ]]; then
    echo "# generate local SSL"
    mkdir ssl
    (cd ssl && generate-local-ssl.sh "$HOST")
    testFile "ssl/$HOST.key"
    testFile "ssl/$HOST.crt"
  else
    if [[ "$USE_WWW" == "1" ]]; then
      echo "# generate SSL for $HOST and www.$HOST"
      sudo certbot certonly --expand --nginx -d "$HOST" -d "www.$HOST" -n --agree-tos -m jaccovankooten@hotmail.nl
    else
      echo "# generate SSL for $HOST"
      sudo certbot certonly --expand --nginx -d "$HOST" -n --agree-tos -m jaccovankooten@hotmail.nl
    fi
    checkForError "certbot failed"
  fi
fi

echo "# setup nginx"
if [[ -L "/etc/nginx/sites-available/$NAME.conf" ]]; then
  sudo rm "/etc/nginx/sites-available/$NAME.conf"
fi
(cd "/etc/nginx/sites-available" && sudo ln -s "$DIR/devops/hosting/$ENVIRONMENT/nginx/$TYPE.conf" "$NAME.conf")
if [[ ! -f "/etc/nginx/sites-available/$NAME.conf" ]]; then
  fatal "symlink /etc/nginx/sites-available/$NAME.conf not found"
fi

echo "# enable site"
if [[ -L "/etc/nginx/sites-enabled/$NAME.conf" ]]; then
  sudo rm "/etc/nginx/sites-enabled/$NAME.conf"
fi
(cd "/etc/nginx/sites-enabled" && sudo ln -s "../sites-available/$NAME.conf")
if [[ ! -L "/etc/nginx/sites-enabled/$NAME.conf" ]]; then
  fatal "symlink /etc/nginx/sites-enabled/$NAME.conf not found"
fi

echo "# nginx test"
sudo nginx -t
checkForError "nginx test failed"

echo "# restart nginx"
sudo service nginx restart
checkForError "nginx restart failed"

if [[ "" != $(NODE_ENV=production $PM2 id "$NAME" | grep '[ \d+ ]') ]]; then
  echo "Stopping running pm2 process"
  NODE_ENV=production $PM2 stop "$NAME"
  NODE_ENV=production $PM2 delete "$NAME"
fi

echo "# starting $TYPE process using pm2"
if [[ "$TYPE" == "strapi" ]]; then
  NODE_ENV=production $PM2 start server.js --name "$NAME"
  checkForError "pm2 start server.js"
fi

if [[ "$TYPE" == "nextjs" ]]; then
  NODE_ENV=production $PM2 start npm --name "$NAME" -- start
  checkForError "pm2 start npm"
fi

echo "Check if pm2 process is running"
sleep 3
if [[ "" == $(NODE_ENV=production $PM2 id "$NAME" | grep '[ \d+ ]') ]]; then
  fatal "$NAME process is not running"
fi

echo "# testing connections"
if [[ "$TYPE" == "strapi" ]]; then
  waitForConnection "https://$HOST"
  testConnection "https://$HOST/favicon.ico"
  testConnection "https://$HOST/robots.txt"
  testConnection "https://$HOST/admin/auth/login"
fi
if [[ "$TYPE" == "nextjs" ]]; then
  waitForConnection "https://$HOST/nl"
  testConnection "https://$HOST/robots.txt"
fi

echo ""
echo "All done"
echo "Your host $NAME is setup at https://$HOST"
