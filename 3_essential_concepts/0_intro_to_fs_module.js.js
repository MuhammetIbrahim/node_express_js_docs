// This file explains the basics of the fs and path modules in Node.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Node.js modules like fs and path are CommonJS by nature,
// but in ES Modules (like this one), we don't have __dirname and __filename.
// So we manually construct them using the fileURLToPath helper.

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ fs (File System) is a core Node.js module to interact with the file system
// ✅ path module helps to work with file paths in a platform-independent way
// ✅ __dirname gives us the absolute directory path of the current file

const filePath = path.join(__dirname, 'hello.txt');
console.log('📄 Absolute path to file:', filePath);

// Now you can safely work with files in the same folder as this script!