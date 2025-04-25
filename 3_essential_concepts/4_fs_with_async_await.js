// Modern: Using async/await for clean code

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file4 = path.join(__dirname, 'async-letter.txt');

async function writeLetter() {
  try {
    await fs.writeFile(file4, 'Dear future me,');
    await fs.appendFile(file4, '\nKeep going. You got this!');
    const content = await fs.readFile(file4, 'utf-8');
    console.log('🧘 Async/Await Output:', content);
  } catch (err) {
    console.error('❌ Async Error:', err);
  }
}

writeLetter();