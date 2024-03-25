#!/bin/bash

PROJECT_DIR=$(pwd)
NEW_PROJECT_NAME=""

while test $# != 0; do
  case "$1" in
  -new | --new_project_dir)
    shift
    NEW_PROJECT_NAME=$1
    echo "# New project dir set to $NEW_PROJECT_NAME"
    ;;
  esac
  shift
done

if [[ ! -d "/home/debian" ]]; then
  echo "you are not on the server. You need some linux scripts to copy the project."
  exit 1
fi

if [[ -z "$NEW_PROJECT_NAME" ]]; then
  echo "please specify the new project name: -new <new_project_name>"
  exit 1
fi

if [[ ! "$NEW_PROJECT_NAME" =~ ^[a-zA-Z0-9_]+$ ]]; then
  fatal "TARGET_PROJECT_NAME has invalid characters. Valid characters are: a-z A-Z 0-9 _"
fi
if [[ ${#NEW_PROJECT_NAME} -gt 30 ]]; then
  fatal "TARGET_PROJECT_NAME is to long. Maximum length is 30 characters."
fi

if [[ ! -d "../jaccos-bin" ]]; then
  echo "jaccos-bin is not found"
  exit 1
fi

../jaccos-bin/clone-project.sh -p "$PROJECT_DIR" -new "$NEW_PROJECT_NAME"
