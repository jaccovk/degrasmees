#!/bin/bash

sudo certbot certonly --nginx -d jaapvankooten.nl -d www.jaapvankooten.nl -n --agree-tos -m jaccovankooten@hotmail.nl

devops/hosting/setup-hosting.sh \
  --host jaapvankooten.nl \
  --use-www \
  --name jaapvankooten \
  --ip 162.19.205.122 \
  --env production \
  --folder frontend \
  --type nextjs
