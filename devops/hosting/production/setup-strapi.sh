#!/bin/bash

devops/hosting/setup-hosting.sh \
  --host strapi.jaapvankooten.nl \
  --name jaapvankooten-strapi \
  --ip 162.19.205.122 \
  --env production \
  --folder backend \
  --type strapi
