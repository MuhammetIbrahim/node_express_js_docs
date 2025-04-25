# 📡 5. Event-Driven Architecture in Node.js

Node.js is built on an **event-driven architecture**, which allows asynchronous communication using **events**. This is one of the reasons why Node.js is fast and efficient for I/O-heavy applications.

---

## 🧠 What is an Event?
- An event is a signal that something has happened.
- Think of it like a **notification system**:
  > "When this happens, do that."
- Node.js uses this model under the hood (e.g., HTTP server, streams, file system).

---

## ⚙️ EventEmitter Class (with ES6 Modules)

To create and handle custom events, Node.js provides the **`EventEmitter`** class from the `events` module.

```js
// ES6 style (requires "type": "module" in package.json)
import EventEmitter from 'events';

// Create an instance
const myEmitter = new EventEmitter();

// Listen for a custom event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
myEmitter.emit('greet', 'Ibrahim');
```

---

## 🔄 Multiple Listeners
You can attach more than one listener to the same event:
```js
myEmitter.on('data', () => {
  console.log('First listener fired!');
});

myEmitter.on('data', () => {
  console.log('Second listener fired!');
});

myEmitter.emit('data');
```

---

## 🧪 Use Cases
Some real-world use cases where EventEmitter is useful:

- HTTP servers (`req.on('data')`, `res.on('end')`)
- Logging systems
- Streaming data
- Notification dispatchers
- Custom application workflows

---

## ⚠️ Tip
- Always remove listeners if they are no longer needed to prevent **memory leaks**:
```js
const handlerFn = () => console.log('Doing something...');
myEmitter.on('eventName', handlerFn);
myEmitter.removeListener('eventName', handlerFn);
```
- Or listen only once:
```js
myEmitter.once('eventName', () => {
  console.log('This runs only once!');
});
```

---

✅ With `EventEmitter`, you can build loosely-coupled and asynchronous systems in Node.js like a pro.
