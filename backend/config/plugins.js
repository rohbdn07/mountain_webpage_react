require('dotenv').config();
module.exports = () => ({
  // Sendgrid plugin settings (https://sendgrid.com/docs/Integrate/Languages/nodejs.html).
  // You can use the Sendgrid API to send emails.
  email: {
    provider: process.env.EMAIL_PROVIDER,
    providerOptions: {
      apiKey: process.env.EMAIL_PROVIDER_API_KEY
    },
    settings: {
      defaultFrom: process.env.EMAIL_DEFAULT_FROM,
      defaultReplyTo: process.env.EMAIL_DEFAULT_REPLY_TO
    }
  }
});
