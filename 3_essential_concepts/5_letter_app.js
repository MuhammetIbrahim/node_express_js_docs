// 💌 Letter Writing App from the Terminal using readline (async/await)

import { promises as fs } from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const file5 = path.join(__dirname, 'my_letter.txt');

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function runLetterApp() {
  try {
    const answer = await askQuestion('💬 Write your letter:\n');
    await fs.writeFile(file5, answer);
    console.log('✅ Letter saved to my_letter.txt');
  } catch (err) {
    console.error('❌ Could not write letter:', err);
  } finally {
    rl.close();
  }
}

runLetterApp();
