# 📘 TypeScript Technocrat

Welcome to my TypeScript learning repository! This journey includes examples and notes covering key TypeScript concepts from basics to more advanced topics.

---

## Module-1 Explore Basic Type of Typescript

## ✅ 1.0 - TypeScript Setup & Environment

### ⚙️ Install Node.js and TypeScript

- Follow the [Node.js documentation](https://nodejs.org) to install Node on Windows.
- Check available Node versions:

  ```sh
  fnm list


  ```

- To change Node version:

  ```sh
  fnm use <version>
  ```

- Set default version:

  ```sh
  fnm use <version> --use-once | Out-String | Invoke-Expression
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

## ✅ 1.5 - Object Types

```ts
const user: {
  firstName: string;
  middleName: string;
  lastName: string;
};
```

### 🧩 Key Features

- Optional properties (`?`)
- Readonly properties
- Literal types

---

## ✅ 1.6 - Functions

### 🔹 Function Declarations

```ts
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
```

### 🔹 Arrow Functions

```ts
const addArrow = (num1: number, num2: number = 20): number => num1 + num2;
```

### 🔹 Callback Functions

```ts
const newArray = arr.map((element: number): number => element * element);
```

### 🔹 `this` Context in Object Methods

Avoid arrow functions in object methods if you need the `this` keyword.

---

## ✅ 1.7 - Spread, Rest & Destructuring

### 🔹 Spread Operator

```ts
const newArr = [...arr1, ...arr2];
const newObj = { ...obj1, ...obj2 };
```

### 🔹 Rest Operator

```ts
const greet = (...friends: string[]) => {
  console.log(friends);
};
```

### 🔹 Destructuring

```ts
const {
  contactNo,
  name: { middleName },
} = user;

const [, , bestFriend, ...rest] = friendsArray;
```

---

## ✅ 1.8 - Tuples & Enums

### 🔹 Tuples

Used to define a fixed-length, ordered array with specific types.

```ts
const userInfo: [string, number, boolean] = ["Alice", 25, true];
```

You can also use them in functions:

```ts
function useState(): [number, (val: number) => void] {
  return [0, (val) => console.log(val)];
}
```

### 🔹 Enums

Used to define a set of named constants.

```ts
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
}

const currentStatus: Status = Status.Success;
```

Enums can also be numeric:

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

---

## ✅ 1.9 - Type Alias

### 🔹 Custom Type Example

```ts
type Student = {
  name: string;
  age: number;
  gender: string;
  contactNo?: string;
  address: string;
};
```

### 🔹 Primitive & Function Aliases

```ts
type UserName = string;
type IsAdmin = boolean;
type Add = (num1: number, num2: number) => number;
```

---

## ✅ 1.10 - Union & Intersection Types

### 🔹 Union Types

```ts
type Role = "juniorDeveloper" | "expertDeveloper";
```

### 🔹 Intersection Types

```ts
type Fullstack = Frontend & Backend;
```

### 🔹 String Literal Types

Used to restrict a type to a specific set of string values.

---

## ✅ 1.11 - Control Flow Operators

### 🔹 Ternary Operator

```ts
const result = age >= 18 ? "Adult" : "Not Adult";
```

### 🔹 Nullish Coalescing (`??`)

```ts
const name = input ?? "Guest";
```

### 🔹 Optional Chaining (`?.`)

```ts
const permanentAddress = user?.address?.permanentAddress ?? "N/A";
```

---

## ✅ 1.12 - Nullable, Unknown & Never Types

### 🔹 Nullable

```ts
const searchName = (value: string | null) => {
  if (value) console.log("Searching");
  else console.log("Nothing to search");
};
```

### 🔹 Unknown

```ts
const getSpeedInMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    console.log((value * 1000) / 3600);
  } else if (typeof value === "string") {
    const [num] = value.split(" ");
    console.log((parseFloat(num) * 1000) / 3600);
  }
};
```

### 🔹 Never

```ts
const throwError = (msg: string): never => {
  throw new Error(msg);
};
```

---

## 📚 Summary Cheat Sheet

| Concept            | Description                                |                               |
| ------------------ | ------------------------------------------ | ----------------------------- |
| Type Alias         | Reusable custom types                      |                               |
| Union (\`          | \`)                                        | One of several possible types |
| Intersection (`&`) | Combine multiple types                     |                               |
| Ternary            | Inline conditionals                        |                               |
| `??` Operator      | Default fallback for `null` or `undefined` |                               |
| `?.` Operator      | Safe navigation of nested properties       |                               |
| `unknown`          | Must type-check before use                 |                               |
| `never`            | Function that never returns (e.g., throws) |                               |

---

## 🛠 Future Topics To Learn

- Enums
- Classes & OOP
- Generics
- Utility Types
- Type Guards

---

# Module-2 Explore Advanced types of typescript

## ✅ 2.1 - Type Assertion

### 🔹 Basic Type Assertion

```ts
let anything: any;
anything = "Next Level Web Development";
anything = 222;
anything = true;
console.log(anything);

// Asserting type manually (though this line alone has no effect)
anything as string;
```

### 🔹 Function Example with Assertion

```ts
const kgToGm = (value: string | number): string | number | undefined => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value) * 1000;
    return `The converted value is ${convertedValue}`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
};

console.log(kgToGm(20));
```

### 🔹 Using Type Assertion on Function Return

```ts
const result1 = kgToGm(1000) as number;
console.log({ result1 });

const result2 = kgToGm("2000") as string;
console.log({ result2 });
```

### 🔹 Assertion with `unknown` or `any` in Error Handling

```ts
type CustomError = {
  message: string;
};

try {
  // some error throwing code
} catch (error) {
  console.log((error as CustomError).message);
}
```

---

## ✅ 2.2 - Interface vs Type Alias

### 🔹 Type Alias

```ts
type rollNumber = number;

type User1 = {
  name: string;
  age: number;
};

type UserWithRole1 = User1 & {
  role?: string;
};
```

### 🔹 Interface

```ts
interface User2 {
  name: string;
  age: number;
}

interface UserWithRole2 extends User2 {
  role: string;
}

const user1: UserWithRole2 = {
  name: "Nayem",
  age: 26,
  role: "Bekar",
};
```

### 🔹 Array with Type and Interface

```ts
type Roll1 = number[];
const rollNumber1: Roll1 = [1, 2, 3];

interface Roll2 {
  [index: number]: number;
}
const rollNumber2: Roll2 = [1, 2, 3];
```

### 🔹 Function Type with Alias and Interface

```ts
type Add1 = (num1: number, num2: number) => number;
const add1: Add1 = (num1, num2) => num1 + num2;

interface Add2 {
  (num1: number, num2: number): number;
}
const add2: Add2 = (num1, num2) => num1 + num2;
```

## 🙋 About Me

- 👨‍💻 **Raufur Islam Nayem**
- 📧 [raufurislam@gmail.com](mailto:raufurislam@gmail.com)
- 🌐 [raufurislam-portfolio.web.app](https://raufurislam-portfolio.web.app)

> Built with 💙 to keep learning and growing!
