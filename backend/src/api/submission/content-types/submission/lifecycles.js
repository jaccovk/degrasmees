const sendMail = require('../../../../../base/mail/send-mail')

module.exports = {
  async afterCreate(event) {
    await sendMail(event);
  }
}
