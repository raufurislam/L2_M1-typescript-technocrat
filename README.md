# 📘 TypeScript Learning Journey

Welcome to my TypeScript learning repository! This journey includes examples and notes covering key TypeScript concepts from basics to more advanced topics.

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

Avoid arrow functions for object methods where `this` is required.

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

## 🙋 About Me

- 👨‍💻 **Raufur Islam Nayem**
- 📧 [raufurislam@gmail.com](mailto:raufurislam@gmail.com)
- 🌐 [raufurislam-portfolio.web.app](https://raufurislam-portfolio.web.app)

> Built with 💙 to keep learning and growing!
