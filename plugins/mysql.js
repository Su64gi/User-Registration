const mysql = require("mysql2");

exports.plugin = {

   name: "mysql-plugin",

   register: async function (server) {

      const pool = mysql.createPool({

         host: process.env.DB_HOST,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
         database: process.env.DB_NAME

      });

      server.app.db = pool.promise();

      console.log(
         "MySQL Connected"
      );
   }
};
