const authService =
require("../services/authService");

module.exports = {

  method: "POST",

  path: "/verify-login-otp",

  handler: async (req, h) => {

    try {

      const db =
      req.server.app.db;

      const {
        email,
        otp
      } = req.payload;

      const token =
      await authService.verifyLoginOtp(
        db,
        email,
        otp
      );

      return {

        message:
        "Login Successful",

        token
      };

    } catch (err) {

      return h.response({

        error: err.message

      }).code(401);
    }
  }
};