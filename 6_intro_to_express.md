# ⚡ Intro to Express.js

## What is Express.js?

**Express.js** is a minimal, fast, and flexible web application framework for **Node.js**. It simplifies the process of building robust web servers and APIs by providing a lightweight layer of fundamental web application features.

**Key Features:**
- Simplified routing for handling HTTP requests.
- Middleware support to handle requests, responses, and errors.
- Integration with various template engines.
- High performance for web and mobile applications.

Express is often called the "de facto standard server framework for Node.js".

---

## 🚀 Initializing a Project

First, initialize a new Node.js project and install Express:

```bash
mkdir my-express-app
cd my-express-app
npm init -y
npm install express
```

---

## 🛠️ Creating a Basic Express App

Let's create a simple Express server that responds to different routes:

```javascript
// Import express
import express from 'express';

// Create an express application
const app = express();

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another route
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

**Notes:**
- We use `app.get()` to define a route for HTTP GET requests.
- `res.send()` sends a response back to the client.
- The server listens on `http://localhost:3000`.

---

✅ That’s it! You’ve just created a basic Express.js server.
