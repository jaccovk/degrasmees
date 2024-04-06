#!/bin/bash

echo "Setup hosting for \"node\" projects Strapi and NextJS"
echo ""

if [[ -f "/home/debian/jaccos-bin/functions.sh" ]]; then
  source /home/debian/jaccos-bin/functions.sh
else
  echo "You are not on the server"
  exit 1
fi

FOLDER=""
SKIP_BUILD=0

while test $# != 0; do
  case "$1" in
  -f | --folder)
    shift
    if [[ "$1" != "frontend" ]] && [[ "$1" != "backend" ]]; then
      fatal "folder must be frontend or backend"
    fi
    FOLDER=$1
    echo "# Set folder to $FOLDER"
    ;;
  -sb | --skip-build)
    SKIP_BUILD=1
    echo "# Skipping build"
    ;;
  esac
  shift
done

if [[ "$FOLDER" == "" ]]; then
  fatal "folder (-f) is not set"
fi

testFolder "$FOLDER"

if [[ "$SKIP_BUILD" == 1 ]]; then
  echo "# Skipping build"
  bash /home/debian/jaccos-bin/setup-hosting.sh -f "$FOLDER" -sb
else
  bash /home/debian/jaccos-bin/setup-hosting.sh -f "$FOLDER"
fi
