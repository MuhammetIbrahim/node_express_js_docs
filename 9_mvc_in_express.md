
# 🏗️ Controllers & MVC Architecture in Express.js

---

## What is a Controller?

A **Controller** is a JavaScript function (or set of functions) that handles incoming HTTP requests and determines how to respond.  
It separates the **request handling logic** from the **routing** and **business logic**.

In short:

- **Routes** receive the request and call the **controller**.
- **Controllers** contain the **logic** for what to do (fetch data, validate, etc).
- **Models** interact with the database.
- **Views** display the final result (optional for APIs).

✅ Controllers **make your code modular, clean, and maintainable**.

---

## What is MVC Architecture?

**MVC** stands for:

| Layer         | Responsibility                                               |
|:-------------:|:--------------------------------------------------------------|
| **Model**      | Data, database schemas, and business rules                    |
| **View**       | What the user sees (HTML templates, or JSON for APIs)          |
| **Controller** | Accepts user input, processes it, and interacts with models/views |

MVC architecture helps to **organize your application** into three separate parts, making development and maintenance easier.

---

## How to Structure an Express.js App with MVC

Typical folder structure:

```
project/
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── app.js
└── package.json
```

---

## ✨ Step-by-Step Example

### 1. Define a Controller

Create `controllers/userController.js`:

```javascript
// controllers/userController.js

export const getUser = (req, res) => {
  res.send("User fetched successfully!");
};

export const createUser = (req, res) => {
  const { name } = req.body;
  res.send(\`User \${name} created successfully!\`);
};
```

### 2. Define Routes

Create `routes/userRoutes.js`:

```javascript
// routes/userRoutes.js

import express from 'express';
import { getUser, createUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/user', getUser);
router.post('/user', createUser);

export default router;
```

### 3. Connect in the Main App

Edit `app.js`:

```javascript
// app.js

import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(\`🚀 Server running on http://localhost:\${PORT}\`);
});
```

---

## ✅ Benefits of MVC Structure

- Clean separation of concerns
- Easy to scale
- Easier to maintain and debug
- Reusable components (controllers, models)
- Professional project organization

---

## 🎯 Summary

- Controllers handle logic and request-response.
- MVC splits the app into Model, View, Controller.
- Express apps benefit greatly from modular architecture.
- ✅ Following MVC makes your project professional and scalable!
