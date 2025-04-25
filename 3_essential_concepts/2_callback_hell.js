// Nested callbacks = Callback Hell

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file2 = path.join(__dirname, 'message.txt');

fs.writeFile(file2, 'Hello!', (err) => {
  if (err) return console.error(err);

  fs.appendFile(file2, ' How are you?', (err) => {
    if (err) return console.error(err);

    fs.readFile(file2, 'utf-8', (err, data) => {
      if (err) return console.error(err);
      console.log('🌀 Callback Hell Output:', data);
    });
  });
});

// 💡 Hard to read, hard to manage.
// Let’s fix this with Promises!
