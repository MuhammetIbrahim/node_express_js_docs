# 🛡️ Node.js JWT Authentication Example

This project is a simple, beginner-friendly demonstration of **JWT (JSON Web Token)** authentication in a Node.js + Express environment.

It teaches how to:
- Register a new user with password hashing
- Login and receive a signed JWT
- Protect routes by verifying the token
- Document APIs with Swagger UI

---

## 📂 Project Structure

```
├── app.js                # Main app setup
├── auth.js                # Registration and login routes
├── protected_routes.js    # Protected route that requires authentication
├── middleware.js          # Middleware to verify JWT
├── users_data.js          # In-memory user storage
├── swagger.js             # Swagger documentation setup
├── .env                   # Environment variables (JWT secret)
├── intro_to_jwt.md        # Brief explanation of JWT
```

---

## 🚀 How to Run

1. **Install dependencies:**
```bash
npm install express dotenv bcrypt jsonwebtoken swagger-ui-express swagger-jsdoc
```

2. **Set up your environment variables:**
Create a `.env` file:
```
JWT_SECRET=your_super_secret_key
```

3. **Start the server:**
```bash
node app.js
```

Server runs at: `http://localhost:3000`

Swagger API Docs available at: `http://localhost:3000/api-docs`

---

## 📌 Available Routes

### Public Routes

- `POST /auth/register`
  - Register a new user
  - Body: `{ "name": "yourname", "password": "yourpassword" }`

- `POST /auth/login`
  - Login and get a JWT token
  - Body: `{ "username": "yourname", "password": "yourpassword" }`

### Protected Routes

- `GET /protected/user_info`
  - Access protected user information
  - Requires `Authorization: Bearer <token>` header

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- bcrypt (Password hashing)
- jsonwebtoken (JWT signing and verification)
- dotenv (Environment management)
- Swagger (API documentation)

---

## ⚡ How JWT Works Here

- After **login**, you receive a **short-lived** JWT (30 seconds).
- The **middleware** checks the token before allowing access to protected routes.
- If the token is missing or invalid, access is **denied**.

---

## 📖 Bonus

You can check `intro_to_jwt.md` file inside this project to learn the theoretical background of JWT if you are new to the concept.

---

> This project is designed to make understanding JWT easy, practical, and fun. Ideal for beginners and those preparing to build secure Node.js APIs!
