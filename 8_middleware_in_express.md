
# 🔄 Middleware in Express.js

## 🌐 What is Middleware?

In **Express.js**, a **middleware** is any function that executes during the lifecycle of a request to the server.

A middleware sits **between** the **incoming request** and the **final route handler**.  
It acts as a **processing layer**, allowing you to:

- Examine and modify the request (`req`) and response (`res`) objects
- Perform tasks (e.g., authentication, logging, data parsing)
- End the request-response cycle
- Or pass control to another middleware function using `next()`

Middleware functions are called in the **order** they are added.

### 💡 Why Middleware?

- **Modularity**: Break the server logic into smaller, reusable pieces
- **Preprocessing**: Transform or validate data before reaching routes
- **Access control**: Authenticate and authorize users
- **Error management**: Catch and handle errors cleanly
- **Performance**: Serve static files or compressed responses

Express is built entirely around middleware — everything (even routes) are middleware under the hood.

---

## 🛠️ Structure of a Middleware

A middleware function in Express typically has this structure:

```javascript
function middlewareName(req, res, next) {
  // Do something with req or res
  next(); // Pass control to the next middleware
}
```

Where:

- `req` → Incoming Request object
- `res` → Outgoing Response object
- `next()` → Callback to pass control to the next matching middleware

## 🛠️ Types of Middleware

Express offers different types of middleware:

| Type | Description |
|:----:|:------------|
| Application-level | Bound to an instance of express() |
| Router-level | Bound to an instance of express.Router() |
| Built-in | Provided by Express (e.g., express.static, express.json) |
| Third-party | Installed via npm (e.g., morgan, cors, helmet) |
| Error-handling | Handle errors gracefully using special 4-argument middleware |

## 🛠️ Custom Middleware

You can create your own middleware to customize the server behavior.

Example: Request Logger

```javascript
const logger = (req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next(); // Important! Otherwise the request will hang
};

app.use(logger);
```

**Important**:  
If you do not call `next()`, the request will hang and the server won't send a response.

## 🛠️ Built-in Middleware

Express comes with essential built-in middleware functions:

| Middleware | Purpose |
|:----------:|:--------|
| express.static | Serve static assets (CSS, images) |
| express.json | Parse incoming JSON payloads |
| express.urlencoded | Parse URL-encoded form data |

Examples:

```javascript
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

## 🛠️ Error-handling Middleware

Special middleware that catches errors passed through `next(err)`.

- Has four parameters: (err, req, res, next)
- Catches synchronous and asynchronous errors

Example:

```javascript
app.use((err, req, res, next) => {
  console.error('Error occurred:', err.message);
  res.status(500).send('Internal Server Error');
});
```

You can trigger this middleware manually:

```javascript
app.get('/', (req, res, next) => {
  const error = new Error('Something broke!');
  next(error); // Forward the error
});
```

## 🛠️ Example Project (`app.js`)

```javascript
import express from 'express';
const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());

// Custom logger middleware
app.use((req, res, next) => {
  console.log(\`Request received: \${req.method} \${req.path}\`);
  next();
});

// Route
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Trigger an error
app.get('/error', (req, res, next) => {
  next(new Error('Example error'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});
```

## 📚 Summary

- Middleware functions are central to Express architecture.
- Middleware can process, modify, end, or forward requests and responses.
- Built-in, custom, and third-party middleware provide powerful flexibility.
- Error-handling middleware ensures your app handles unexpected problems smoothly.
- Always use `next()` unless you want to end the response early.
