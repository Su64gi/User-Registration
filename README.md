📌 Project 

This is a User Registration and Authentication system built using Node.js (Hapi.js framework) with MySQL Workbench as the database. The project implements a complete authentication flow including user registration, login, OTP verification, and protected routes using JWT (JSON Web Token). All API endpoints are tested using Postman, and MySQL is used to store user details and OTP data securely.

The system ensures secure authentication by verifying users through OTP before granting access. Once verified, users receive a JWT token that allows them to access protected routes like profile.

📧 Mailtrap Usage

Mailtrap is used in this project as a fake SMTP email testing tool. It allows sending OTP emails without using real email accounts. Instead of delivering emails to actual users, Mailtrap captures them in a safe testing inbox. This helps in developing and testing email functionality (like OTP verification) without spamming real email addresses or requiring production email setup.

https://github.com/user-attachments/assets/a355f0fe-ca32-48f1-bc78-f8789c45cf4e
🎥Demo video

https://github.com/user-attachments/assets/5eb9f19d-8ceb-4ca8-8dc7-77819317c423
🎥Input Field Validation demo

📧 OTP Login System Description

When a new user registers or logs in, the system generates a One-Time Password (OTP) and sends it to the user’s registered email using Mailtrap SMTP service. The OTP is used as an additional security layer to verify the user’s identity before granting access.

Each OTP is valid only for 5 minutes. After expiration, it automatically becomes invalid and cannot be reused. If the same user attempts to log in again after expiry or for a new session, a new OTP is generated and sent to the email, ensuring secure and time-sensitive authentication for every login attempt.

<img width="1272" height="237" alt="image" src="https://github.com/user-attachments/assets/904bfad5-316d-44c3-a954-d39a880dd022" />


First-Otp image

<img width="1303" height="251" alt="image" src="https://github.com/user-attachments/assets/e0cf346a-d040-4e3d-97b7-e5653e74e2cf" />


Resend-Otp image







