#!/bin/bash
if [[ -d "/home/debian" ]]; then
  echo "you are not on your local machine"
  exit 1
fi

if [[ ! -d "../jaccos-bin" ]]; then
    echo "jaccos-bin is not found"
    exit 1
  else source '../jaccos-bin/functions.sh'
fi

getEnvFromFile "./devops/hosting/localhost/backend/.env"

APP_DIR="$(pwd)"

../jaccos-bin/push-files.sh -a "$APP_DIR" -u "$SERVER_USER" -d "$DOMAIN_NAME" -p "$PATH_TO_PROJECT"
