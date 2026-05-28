const authService =
require("../services/authService");

const sendOTP =
require("../services/mailService");

module.exports = {

  method: "POST",

  path: "/login",

  handler: async (req, h) => {

    try {

      const db =
      req.server.app.db;

      const {
        email,
        password
      } = req.payload;

      if (
        !email ||
        !password
      ) {

        return h.response({

          error:
          "Email and password required"

        }).code(400);
      }

      // check user
      await authService.checkUser(
        db,
        email,
        password
      );

      // generate new otp
      const otp =
      Math.floor(
        100000 +
        Math.random() * 900000
      );

      // store otp
      await authService.storeOtp(
        db,
        email,
        otp
      );

      // send otp mail
      await sendOTP(
        email,
        otp
      );

      return {

        message:
        "OTP sent to email"
      };

    } catch (err) {

      return h.response({

        error: err.message

      }).code(401);
    }
  }
};