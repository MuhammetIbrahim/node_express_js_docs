// Read and write using callbacks (old Node.js style)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'letter.txt');

// Write file with callback
fs.writeFile(file, 'Dear friend, how are you?', 'utf-8', (err) => {
  if (err) return console.error('❌ Error writing file:', err);

  // Callback kicks in *after* the write completes
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) return console.error('❌ Error reading file:', err);
    console.log('📨 Read from file:', data);
  });
});

// 🧠 Callback Analogy:
// "When the file is done being written (IO is done), then run this function"
