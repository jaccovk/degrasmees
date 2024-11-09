const sendMail = require('../../../../../backend-base/mail/send-mail')

module.exports = {
  async afterCreate(event) {
    await sendMail(event);
  }
}
