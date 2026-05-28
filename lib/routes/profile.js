const auth =
require("../../plugins/auth");

module.exports = {

  method: "GET",

  path: "/profile",

  options: {

    pre: [
      { method: auth }
    ]
  },

  handler: async (req, h) => {

    const user = req.user;

    return {

      message: "Protected Route Accessed",

      user: {
        id: user.id,
        email: user.email,

        loginTime: new Date(user.iat * 1000).toLocaleString(),

        expiryTime: new Date(user.exp * 1000).toLocaleString()
      }
    };
  }
};