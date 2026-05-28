const nodemailer = require("nodemailer");

const transporter =
nodemailer.createTransport({

  host: process.env.MAIL_HOST,

  port: process.env.MAIL_PORT,

  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const sendOTP = async (
  email,
  otp
) => {

  await transporter.sendMail({

    from: "test@mailtrap.io",

    to: email,

    subject: "Your OTP Code",

    text: `Your OTP is: ${otp}`
  });

  console.log(
    "OTP Sent Successfully"
  );
};

module.exports = sendOTP;