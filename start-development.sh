#!/bin/bash
if [[ -d "/home/debian" ]]; then
  echo "you are not on your local machine"
  exit 1
fi

if [[ ! -d "../jaccos-bin" ]]; then
  echo "jaccos-bin is not found"
  exit 1
fi

APP_DIR=$(pwd)
../jaccos-bin/start-development.sh -a "$APP_DIR"
