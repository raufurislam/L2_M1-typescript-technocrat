Absolutely! Here's the **updated and redesigned `README.md`** with the handwritten notes from your image added **above section 1.4** under a new section called **"1.0 - TypeScript Setup & Environment"**.

---

# 📘 TypeScript Learning Journey

Welcome to my TypeScript learning repository! This journey includes examples and notes covering key TypeScript concepts from basics to more advanced topics.

---

## ✅ 1.0 - TypeScript Setup & Environment

### ⚙️ Install Node.js and TypeScript

- Follow the [Node.js documentation](https://nodejs.org) to install Node on Windows.
- Check available Node versions:

  ```sh
  nfm list


  ```

- To change Node version:

  ```sh
  nvm use <version>
  ```

- Set default version:

  ```sh
  nvm use <version> --use-once | Out-String | Invoke-Expression
  ```

### ⚙️ Install TypeScript Globally

```sh
npm install -g typescript
```

---

## ▶️ Run TypeScript Files

### 🛠 Initialize TypeScript in a Project

```sh
tsc --init
```

This creates a `tsconfig.json` file where you can configure:

- `target`: Set the JavaScript version (e.g., `"es6"`)
- `rootDir`: Folder containing the `.ts` files (e.g., `"./src"`)
- `outDir`: Output directory for compiled files (e.g., `"./dist"`)

### 🧪 Compile TypeScript Files

- Compile once:

  ```sh
  tsc
  ```

- Watch mode (auto-compile on changes):

  ```sh
  tsc -w
  ```

### ⚡ Run TypeScript Directly (Dev Mode)

Using `ts-node-dev`:

```sh
npm install ts-node-dev
ts-node-dev --respawn --transpile-only src/index.ts
```

---

## ✅ 1.4 - Basic Data Types

### 🔹 Primitive Types

```ts
let firstName: string = "Nayem";
let roll: number = 123;
let isAdmin: boolean = true;
```

### 🔹 Special Types

```ts
let d: any;
d = 123; // avoid using 'any' unless absolutely necessary
```

### 🔹 Non-Primitive Types

```ts
let friends: string[] = ["Siam", "Saifullah"];
let coordinates: [number, number] = [1, 5];
let ageName: [number, string, boolean] = [50, "Mr. X", true];
```

---

_(The rest of the README content continues from here as previously formatted: Object Types, Functions, Spread/Rest, Type Alias, etc.)_

```

---

Would you like me to deliver the full final `README.md` as a downloadable file too?
```
