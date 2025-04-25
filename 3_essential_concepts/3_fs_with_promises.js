// Cleaner: Using Promises (fs.promises)

import { promises as fsPromises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file3 = path.join(__dirname, 'promise-letter.txt');

fsPromises.writeFile(file3, 'Dear Diary...')
  .then(() => fsPromises.appendFile(file3, '\nToday was a good day.'))
  .then(() => fsPromises.readFile(file3, 'utf-8'))
  .then((data) => console.log('✅ Promise Result:', data))
  .catch((err) => console.error('❌ Promise Error:', err));