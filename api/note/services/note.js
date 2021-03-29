'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

const nodemailer = require('nodemailer');
const Email = require('email-templates');

// Create reusable transporter object using SMTP transport.
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'alecgee73@gmail.com',
//     pass: 'hybridtechnol123',
//   },
// });

const email = new Email({
    message: {
      from: 'alecgee73@gmail.com'
    },
    send: true,
    transport: {
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465,
      ssl: true,
      tls: true,
      auth: {
        user: 'alecgee73@gmail.com', // your gmail username
        pass: 'hybridtechnol123' //your gmail password
      }
    }
  })

    // const people = [
    // {firstName: 'Diana', lastName: 'One'},
    // {firstName: 'Alex', lastName: 'Another'}
    // ];

    // people.forEach((person) => {
    // email
    //   .send({
    //     template: 'welcome',
    //     message: {
    //       to: 'test@example.com'
    //     },
    //     locals: person
    //   })
    //   .then(console.log)
    //   .catch(console.error);
    // }).

module.exports = {
  send: (to, template, locals) => {
    // Setup e-mail data.
   

    return new Promise((resolve, reject) => {
      resolve (email.send({
        template,
        message: {
          to
        },
        locals
      }))
    })

  //   // Return a promise of the function that sends the email.
  //   return transporter.sendMail(options);
  },
  
};
