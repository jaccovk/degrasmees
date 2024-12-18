# degrasmees
Welcome to the README of [degrasmees.nl](https://degrasmees.nl)!

## Getting started
Run `yarn start` to start the frontend and backend on the development server.

### Good to know [Production]
- run `setup-hosting` to setup the frontend (`-f frontend`) or backend (`-f backend`)
- Run `update` to update the frontend and backend.
- Run `clone-project` to clone the project.

### Good to know [Development]
- Run `bash push-files.sh` to push the _frontend/public/uploads_ folder to the server.

## Must Do's
- [x] Fix Mail
- [x] Fix Revalidate hook
- [ ] Production server
- [ ] Add Mail result to Message collection
- [ ] Modal voor afbeeldingen restylen & swipen
- [ ] `"@ef2/strapi-plugin-bold-title-editor": "^1.0.9"` is not working since Strapi v5; search for alternative
  - see mail
- 

## To Do's 
### general
- [ ] Fix `pagespeed` (recaptcha to another page?)
- [ ] Add `plugin` to Strapi Form Builder that adds to the fields: (if A than B)
- [ ] Fix `Server Side Components`; each section should fetch its own data
- [ ] Update .env in `clone-project.sh` with nodemailer
- [ ] Change all `styles/sections` to its `component`
- [ ] Create global layouts (like `grid`)



### content
- Remove favicon from strapi?
- Check for more components
- Add media to Over Mij page
