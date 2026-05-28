const User = {

   create: (db, name, email,
      password, otp) => {

      return db.execute(

         `INSERT INTO users
         (name,email,password,otp)
         VALUES (?,?,?,?)`,

         [name, email, password, otp]
      );
   },

   findByEmail: (db, email) => {

      return db.execute(

         "SELECT * FROM users WHERE email=?",

         [email]
      );
   },

   verifyOtp: (db, email) => {

      return db.execute(

         `UPDATE users
         SET verified=true,
         otp=NULL
         WHERE email=?`,

         [email]
      );
   }
};

module.exports = User;