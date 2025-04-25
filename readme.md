# Node.js & Express.js Adaptation Guide for New Colleagues

## 📘 Introduction
Welcome to the Node.js & Express.js internal guide! This documentation is designed to help new developers quickly onboard into our backend development environment. Here, we’ll walk you through the fundamentals of Node.js, how to work with files, install and use packages with npm, understand async behavior, and develop server-side applications using Express.js. All examples are written using modern **ES6+** syntax and practices.

## 🚀 Prerequisites
Before diving in, you should have a basic understanding of JavaScript:
- Variables (let, const)
- Functions (declaration, arrow syntax)
- Objects & Arrays
- Loops & Conditionals

> Bonus: Familiarity with the terminal/command line will make the experience smoother.

## 1. 🌐 What is Node.js?
Node.js is a runtime environment that lets you run JavaScript on the server-side. Built on Chrome's V8 engine, Node.js is:
- **Single-threaded**
- **Asynchronous** by nature
- **Non-blocking I/O**

These make it highly scalable and efficient for handling I/O-heavy operations (e.g., APIs, real-time systems).

### 🧠 3 Key Concepts in Node.js
1. **Callbacks**
2. **Promises**
3. **Async/Await**

We’ll explore each of these in depth.

## 2. 👋 Your First Node.js Program
```js
console.log("Hello, Node.js world!");
```
Run using:
```bash
node app.js
```

## 3. 📂 Working with Files
### ✅ Using `fs` module:
- Read files
- Write files

We’ll build a **Letter Writing App** from the terminal:
- Version with **Promise**
- Then using **Callbacks**
- Highlighting **Callback Hell**
- Refactor with **Async/Await**

## 4. 📦 npm: Node Package Manager
### Covered Topics:
- What is npm?
- `npm init` & `package.json`
- Installing packages
- `--save` vs `--save-dev`
- Understanding `node_modules`

## 5. 📡 Event-Driven Architecture
Understanding Node's event system using:
```js
const EventEmitter = require('events');
```
Use cases and custom events.

## 6. ⚡ Intro to Express.js
Express is a minimal and fast Node.js web framework. We’ll cover:
- Initializing a project
- Creating a basic Express app
- Defining routes

## 7. 🚏 Routing in Express
- Static routes
- Dynamic route parameters (`:id`, `:name`)
- Nested routers

## 8. 🔄 Middleware in Express
- Custom middleware
- Built-in middleware
- Error-handling middleware

## 9. 🏗️ Controllers & MVC Architecture
- How to separate logic into controllers
- Organizing Express apps in MVC format

## 10. 🔐 Authentication with JWT
- Generating Access Tokens
- Securing routes
- Verifying JWTs in middleware

## 11. 🛢️ Using Databases with Sequelize
- Setting up Sequelize
- Models, Migrations
- Querying the database

## 12. 🔄 Refresh Tokens with JWT
- Creating & managing refresh tokens
- Storing tokens securely
- Token renewal strategy

---

This will be your go-to reference while developing with Node.js & Express. Examples and code snippets will be included in each section. Happy hacking! 💻✨

