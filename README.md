📌 Project 

This is a User Registration and Authentication system built using Node.js (Hapi.js framework) with MySQL Workbench as the database. The project implements a complete authentication flow including user registration, login, OTP verification, and protected routes using JWT (JSON Web Token). All API endpoints are tested using Postman, and MySQL is used to store user details and OTP data securely.

The system ensures secure authentication by verifying users through OTP before granting access. Once verified, users receive a JWT token that allows them to access protected routes like profile.

📧 Mailtrap Usage

Mailtrap is used in this project as a fake SMTP email testing tool. It allows sending OTP emails without using real email accounts. Instead of delivering emails to actual users, Mailtrap captures them in a safe testing inbox. This helps in developing and testing email functionality (like OTP verification) without spamming real email addresses or requiring production email setup.

