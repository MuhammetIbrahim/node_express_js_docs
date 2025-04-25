# 🛠️ Before Running These Files

To get started properly, make sure you initialize your Node.js project and enable ES Modules support:

## Step 1: Initialize a Node.js Project

Open your terminal in the project folder and run:

```bash
npm init -y
```

This creates a basic `package.json` file.

## Step 2: Enable ES Module Syntax

Open `package.json` and add the following line:

```json
"type": "module"
```

Your `package.json` will now look like:

```json
{
  "name": "your-project",
  "version": "1.0.0",
  "type": "module",
  ...
}
```

✅ This allows you to use `import`/`export` syntax instead of `require`,  
✅ And lets you simulate `__dirname` using `fileURLToPath`,  
**which we will learn about in this section.**