# RoleBasedAuthoraization

In this project, I developed an API that enforces role-based access control, ensuring that different types of users have appropriate access based on their roles:
🔑 Admin: Has full access to all routes (admin, manager, user)
🔑 Manager: Can access manager and user routes
🔑 User: Has access only to the user route
This API was built using Node.js and Express.js for handling server-side logic. JWT (JSON Web Tokens) is used for secure, token-based authentication, ensuring that only authenticated users can access their assigned routes. For password security, I used bcrypt to encrypt passwords before storing them.
On the database side, I integrated MongoDB with Mongoose for handling the user data efficiently, including roles and encrypted passwords. The flexible schema structure of MongoDB made it easier to handle role-based authorization and user management.
💡 Key Features:
JWT Authentication: Ensures secure token-based access.
Role-Based Authorization: Fine-grained control over what each user type (Admin, Manager, User) can access.
Password Encryption: Using bcrypt for secure password hashing.
MongoDB Integration: Leveraged Mongoose for schema-based data modeling, making database interactions efficient and seamless.
Node.js & Express: Built a clean and modular backend structure, making the API scalable and maintainable.
This project is a great example of secure API development and managing different levels of access based on roles. I’m excited about how this kind of implementation can be used in real-world applications where user management and security are paramount!

