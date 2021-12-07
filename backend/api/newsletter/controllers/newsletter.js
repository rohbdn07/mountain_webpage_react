'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**Create a new newsletter subscription client. It will update strapi dashboard with the new client.
   * Sends an email to the recipient in the body of the request with a Thank You message.
   */
  async create(ctx) {
    const response = await strapi.services.newsletter.create(ctx.request.body);
    strapi.log.debug('User email is posted to strapi dashboard');
    const sendToUserEmail = response.email;
    try {
      console.log('after create', response);
      strapi.log.debug(`Trying to send an email to ${sendToUserEmail}`);
      const emailOptions = {
        to: sendToUserEmail,
        subject: 'Thank you for subscribing to our newsletter',
        html: `<h1>Welcome!</h1><p>Thank you for subscribing to our newsletter</p>
        <p>We will keep you updated with our latest news and offers</p>
        <p>If you have any questions, please contact us.</p>
        <p>Best Regards,</p>
        <p>The Mount Ski resort Team</p>`
      };
      await strapi.plugins['email'].services.email.send(emailOptions);
      strapi.log.debug(`Email sent to ${sendToUserEmail}`);
      // ctx.send(ctx);
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendToUserEmail}`, err);
      ctx.send({ error: 'Error sending email' });
    }
    strapi.log.debug('Response sent to GET/POST methods');
    return response;
  }
};
