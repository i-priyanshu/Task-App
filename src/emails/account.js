const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "priyanshupboy0786@gmail.com",
    subject: "Thanks For Joining in!",
    text: `welcome to the app, ${name}.Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "priyanshupboy0786@gmail.com",
    subject: "Sorry To See you Go!",
    text: `Goodbye ${name}. I hope to see you soon!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
