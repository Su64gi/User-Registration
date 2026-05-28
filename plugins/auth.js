const jwt = require("jsonwebtoken");

const auth = async (req, h) => {

   try {

      const authHeader =
         req.headers.authorization;

      if (!authHeader) {

         return h.response({
            error: "Token Required"
         }).code(401).takeover();
      }

      const token =
         authHeader.split(" ")[1];

      const decoded =
         jwt.verify(
            token,
            process.env.JWT_SECRET
         );

      req.user = decoded;

      return h.continue;

   } catch (err) {

      return h.response({
         error: "Invalid Token"
      }).code(401).takeover();
   }
};

module.exports = auth;