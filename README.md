# degrasmees
Welcome to the README of [degrasmees.nl](https://degrasmees.nl)!


## Getting started
Run `yarn start` to start the frontend and backend on the development server.

### Good to know [Production]
- Run `bash ./devops/hosting/production/setup-nextjs.sh` to setup the frontend.  
- Run `bash ./devops/hosting/production/setup-strapi.sh` to setup the backend.
- Run `bash update.sh` to update the frontend and backend.
- Run `bash clone-project.sh` to clone the project.

### Good to know [Development]
- Run `bash push-files.sh` to push the _frontend/public/uploads_ folder to the server.

## Must Do's
- Add `plugin` to Strapi Form Builder that adds to the fields: (if A than B)

## To Do's 
### general
- Fix `Server Side Components`; each section should fetch its own data
- Update .env in `clone-project.sh` with nodemailer

### content
- Remove favicon from strapi?
- Check for more components
- Add media to Over Mij page
