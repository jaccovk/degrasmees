module.exports = {
  async afterUpdate(event) {
    console.log("event >>>>", event)
    const emailFrom = process.env.MAIL_DEFAULT_FROM
    if (!emailFrom) {
      console.error("MAIL_DEFAULT_FROM is not set")
      return
    }

    try {
      const { email, name } = event.result
      if (!email) {
        console.error("Email is not set")
        return
      }

      const result = await strapi.plugins.email.services.email.send({
        to: name ? name + " <" + email + ">" : email,
        from: emailFrom,
        subject: 'The Strapi Email plugin worked successfully!',
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
