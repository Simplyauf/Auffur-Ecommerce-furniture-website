const nodemailer = require("nodemailer");

//checking this so as to know what to fill in the nodemailern host key
const checkEmailHost = (email) => {
  let host;

  const provider = email.split("@")[1];

  switch (provider) {
    case "gmail.com":
      host = "smtp.gmail.com";
      break;
    case "yahoo.com":
      host = "smtp.mail.yahoo.com";
      break;
    case "outlook.com":
      host = "smtp-mail.outlook.com";
      break;
    case "zoho.com":
      host = "smtp.zoho.com";
      break;
    case "aol.com":
      host = "smtp.aol.com";
      break;
    default:
      host = null;
  }

  return host;
};

const sendMessageToUserEmail = async (email, verificationToken, messageData) => {
  const { port, html, pass, secure, text, subject, user } = messageData(verificationToken);
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port,
    secure,
    auth: {
      user: user,
      pass: pass,
    },
  });

  await transporter.sendMail({
    from: "azeezumarfaruk@gmail.com",
    to: "azeezumarfaruk@gmail.com",
    subject: subject,
    text: text,
    html: html,
  });
};

module.exports = { checkEmailHost, sendMessageToUserEmail };
