# 🚀 JavaScript Basics with Node.js

Learn the foundations of JavaScript programming using the Node.js runtime — including variables, conditionals, loops, and functions — all from the server side!

---

## 1. ✍️ Variables

In JavaScript (and Node.js), you declare variables using `let`, `const`, and `var`.
---------------------------------------------------

```js
let name = "Ibrahim";
const age = 22;
var country = "Türkiye";

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

---------------------------------------------------
🔒 Use const when the value won’t change, let when it might. Avoid var in modern JavaScript.

2. ❓ Conditional Statements
Use conditionals to make decisions in your code.

---------------------------------------------------

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

---------------------------------------------------
Ternary Operator
A shorter way to write simple conditionals:
---------------------------------------------------

let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

---------------------------------------------------

3. 🔁 Loops
Loops are used to repeat actions.
---------------------------------------------------

for Loop

---------------------

for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}
while Loop
------------------------------------------------
let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}
for...of Loop (for arrays)
-------------------------------------------------------
const fruits = ["🍎", "🍌", "🍓"];

for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}
---------------------------------------------------

4. 🧩 Functions
Functions let you group code and reuse it.

Function Declaration
--------------------------------------------------
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Muhammet"));
Arrow Function (ES6+)

const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
---------------------------------------------------

5. 🧪 Running the Code
Save your file as index.js

Open terminal in that folder

Run:

node index.js
✅ Your JavaScript will run using Node.js!
