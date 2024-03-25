#!/bin/bash
if [[ ! -d "/home/debian" ]]; then
  echo "you are not on the server"
    exit 1
fi

if [[ ! -d "../jaccos-bin" ]]; then
    echo "jaccos-bin is not found"
    exit 1
  else source '../jaccos-bin/functions.sh'
fi

PROJECT_DIR=$(pwd)
TO_UPDATE=0 # 0 = both, 1 = frontend, 2 = backend
SHOULD_PUSH_FILES=0 # 0 = no, 1 = yes

while test $# != 0; do
  case "$1" in
  -u | --update)
    shift
    TO_UPDATE=$1
    echo "# Update set to $TO_UPDATE"
    ;;
  -p | --push-files)
    shift
    SHOULD_PUSH_FILES=$1
    echo "# Push files set to $SHOULD_PUSH_FILES"
    ;;
  esac
  shift
done

echo "# pulling from git"
git pull

if [[ $TO_UPDATE -eq 0 || $TO_UPDATE -eq 2 ]]; then
  ../jaccos-bin/update-backend.sh -a "$PROJECT_DIR"
fi

if [[ $TO_UPDATE -eq 0 || $TO_UPDATE -eq 1 ]]; then
  ../jaccos-bin/update-frontend.sh -a "$PROJECT_DIR"
fi

echo "+=============================================================================="
if [[ $SHOULD_PUSH_FILES -eq 1 ]]; then
  cd "$PROJECT_DIR" || fatal "cannot change directory to $PROJECT_DIR"
  echo "# loading data..."
  ../jaccos-bin/load-data.sh -a "$PROJECT_DIR"
fi

echo "# done! 🎉" 
