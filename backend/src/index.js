'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */ async bootstrap({strapi}) {
    try {
      const result = await strapi.entityService.findMany("sections.hero")
      console.log(result)

      const email = await strapi.plugins.email.services.email.send({
        to: "jaccovankooten@hotmail.nl",
        from: "laccovankooten@gmail.com",
        subject: 'The Strapi Email plugin worked successfully',
        text: 'This is the email body.',
        html: '<p>This is the email html.</p>',
      })
      console.log("email", email)
    } catch (error) {
      console.log(error);
    }
  },
};
