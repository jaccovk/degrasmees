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

if [[ "$1" != "frontend" && "$1" != "backend" ]]; then
  echo "please specify the type of project: 'frontend' or 'backend'"
  exit 1
fi

/home/debian/jaccos-bin/setup-hosting.sh "$1"
