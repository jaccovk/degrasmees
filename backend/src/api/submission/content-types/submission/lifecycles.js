module.exports = {
  async afterUpdate(event) {
    console.log("event >>>>", event)
    try {
      const result = await strapi.plugins.email.services.email.send({
        to: "Test" + " <" + "jaccovankooten@hotmail.nl" + ">",
        from: 'laccovankooten@gmail.com', //e.g. single sender verification in SendGrid
        subject: 'The Strapi Email plugin worked successfully',
        text: 'Hello world!',
        html: 'Hello world!',
      })

      console.log("result >>>>", result)
    } catch (error) {
      console.error(error)
    }
  },
  async afterCreate(event) {
    console.log('Hello World', event)
  }
}
