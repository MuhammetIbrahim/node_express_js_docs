🚏 Routing in Express.js
🌐 What is Routing?
In Express.js, routing defines how your server responds to different HTTP requests made to specific endpoints (URLs).

Each route can be associated with:

An HTTP method (GET, POST, PUT, DELETE, etc.)

A specific URL path

A handler function that is triggered when the route is matched.

🧭 Understanding HTTP Methods
When building web applications, different HTTP methods are used to perform specific actions:


Method	Purpose	Example Usage
GET	Retrieve data	Get user profile, view a page
POST	Create new data	Register a new user, submit a form
PUT	Update existing data (full update)	Update user information completely
PATCH	Partial update of data	Update only the user's email
DELETE	Remove data	Delete a user account
In Express, you handle these methods like this:

javascript
Copy
Edit
app.get('/users', (req, res) => { /* Fetch users */ });
app.post('/users', (req, res) => { /* Create a new user */ });
app.put('/users/:id', (req, res) => { /* Update user */ });
app.delete('/users/:id', (req, res) => { /* Delete user */ });
🛤️ Basic Routing
A simple route in Express might look like:

javascript
Copy
Edit
app.get('/about', (req, res) => {
  res.send('About Page');
});
GET is the HTTP method.

/about is the URL path.

The function (req, res) => {...} handles the request.

📍 Static Routes
Static routes respond to fixed URLs.

javascript
Copy
Edit
app.get('/contact', (req, res) => {
  res.send('Contact Page');
});
🧩 Dynamic Routes with Parameters
You can make parts of the route dynamic by using : before a parameter name.

javascript
Copy
Edit
app.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
Example:
Requesting /users/42 will send back User ID: 42.

You can capture multiple parameters too:

javascript
Copy
Edit
app.get('/posts/:postId/comments/:commentId', (req, res) => {
  res.send(`Post: ${req.params.postId}, Comment: ${req.params.commentId}`);
});
🗂️ Nested Routers
For better organization, you can split your routes into routers.

Example:

javascript
Copy
Edit
const express = require('express');
const app = express();
const userRouter = express.Router();

// Define routes inside the router
userRouter.get('/', (req, res) => {
  res.send('User List');
});

userRouter.get('/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Mount the router
app.use('/users', userRouter);

app.listen(3000, () => console.log('Server running on port 3000'));
Visiting:

/users → "User List"

/users/7 → "User ID: 7"

🛠️ Example Project (app.js)
javascript
Copy
Edit
// app.js
import express from 'express';  // if using ES Modules
// const express = require('express'); // if using CommonJS

const app = express();
const PORT = 3000;

// Static Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// Dynamic Route
app.get('/products/:productId', (req, res) => {
  res.send(`Product ID: ${req.params.productId}`);
});

// Nested Router for Users
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('User List');
});

userRouter.get('/:userId', (req, res) => {
  res.send(`User ID: ${req.params.userId}`);
});

app.use('/users', userRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
📚 Summary
Routing connects incoming HTTP requests to server logic.

HTTP methods define the type of action (GET, POST, PUT, DELETE).

Static routes match fixed paths.

Dynamic routes capture URL parameters.

Nested routers organize routes modularly for scalability.