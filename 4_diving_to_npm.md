# 📦 4. npm: Node Package Manager

Learn how to manage external packages and dependencies in your Node.js projects using **npm**.

---

## 🔍 What is npm?
- **npm** stands for **Node Package Manager**.
- It is the default package manager for Node.js.
- It allows you to **install**, **update**, and **manage** third-party libraries and tools in your project.

---

## 🧾 npm init & `package.json`

### 🛠 Create a new project:
```bash
npm init         # Interactive setup
npm init -y      # Skip questions and create default package.json
```

This creates a `package.json` file, which keeps track of:
- Project metadata (name, version, etc.)
- Installed packages
- Scripts to run

---

## 📥 Installing Packages

### ✅ To install a package:
```bash
npm install <package-name>
```
Example:
```bash
npm install date-fns
```

### 💡 Importing a package:

#### ✅ ES Modules (with "type": "module")
```js
import { format } from "date-fns";
import { v4 as uuid } from "uuid";
```

#### ✅ CommonJS (default in older Node.js projects)
```js
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
```

### ✅ To install all listed dependencies from package.json:
```bash
npm install
```

---

## 🔧 --save vs --save-dev

These flags are mostly outdated because npm now saves regular dependencies by default.

### Regular dependencies (runtime):
```bash
npm install lodash         # or: npm i lodash
```
Goes into:
```json
"dependencies": {
  "lodash": "^x.x.x"
}
```

### Dev dependencies (used only in development):
```bash
npm install -D nodemon     # or: npm i --save-dev nodemon
```
Goes into:
```json
"devDependencies": {
  "nodemon": "^x.x.x"
}
```

### ✅ Add scripts for development
In your `package.json`:
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Then run:
```bash
npm start    # uses node
npm run dev  # uses nodemon for live reload during development
```

---

## 📁 Understanding `node_modules`

- After installing packages, they are stored in the `node_modules/` directory.
- This folder contains the actual code of all installed dependencies.
- **Do not manually edit this folder.**
- Typically ignored by version control (`.gitignore` contains `node_modules/`).

---

## 📌 Bonus Tips

### 🚀 Useful Commands:
```bash
npm start       # Runs "start" script defined in package.json
npm run dev     # Runs custom "dev" script (e.g. with nodemon)
npm update      # Updates all packages
```

### 📅 Example: Format date with `date-fns`

#### ES Modules:
```js
import { format } from "date-fns";
console.log(format(new Date(), "yyyy-MM-dd\tHH:mm:ss"));
```

#### CommonJS:
```js
const { format } = require("date-fns");
console.log(format(new Date(), "yyyy-MM-dd\tHH:mm:ss"));
```

### 🔗 Generate unique ID with `uuid`

#### ES Modules:
```js
import { v4 as uuid } from "uuid";
console.log(uuid());
```

#### CommonJS:
```js
const { v4: uuid } = require("uuid");
console.log(uuid());
```

---

✅ With this knowledge, you’re now ready to manage dependencies like a pro in Node.js projects!
