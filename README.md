Absolutely! Here's the full `README.md` content you can copy and paste directly into your project:

---

````md
# 📘 TypeScript Learning Journey

This repository documents my journey of learning TypeScript with practical examples. Below is a breakdown of concepts I’ve learned so far, organized by sections.

---

## ✅ 1.4 - Basic Data Types

### 🔹 Primitive Types

- `string`, `number`, `boolean`, `null`, `undefined`

```ts
let firstName: string = "Nayem";
let roll: number = 123;
let isAdmin: boolean = true;
```
````

### 🔹 Special Types

- `any` (use with caution)

```ts
let d: number;
d = 123; // can also accept other types if not strictly typed
```

### 🔹 Non-Primitive Types

- Arrays and Tuples

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

### 🧩 Features:

- Optional properties (`?`)
- Readonly properties
- Literal types

---

## ✅ 1.6 - Functions

### 🔹 Normal & Arrow Functions

```ts
function add(num1: number, num2: number = 10): number;
const addArrow = (num1: number, num2: number = 20): number => num1 + num2;
```

### 🔹 Object Methods

- Use `this` with normal functions in object methods

### 🔹 Callback Functions

```ts
const newArray = arr.map((element: number): number => element * element);
```

---

## ✅ 1.7 - Spread, Rest & Destructuring

### 🔹 Spread Operator

```ts
const newArr = [...arr1, ...arr2];
const newObj = { ...obj1, ...obj2 };
```

### 🔹 Rest Operator

```ts
const greet = (...friends: string[]) => { ... }
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

```ts
type Student = {
  name: string;
  age: number;
  ...
}
```

### 🔹 Aliases for Primitives & Functions

```ts
type UserName = string;
type Add = (num1: number, num2: number) => number;
```

---

## ✅ 1.10 - Union & Intersection Types

### 🔹 Union Type (`|`)

```ts
type Role = "juniorDeveloper" | "expertDeveloper";
```

### 🔹 Intersection Type (`&`)

```ts
type Fullstack = Frontend & Backend;
```

### 🔹 Literal Types

Used to restrict value strictly to a set of strings.

---

## ✅ 1.11 - Control Operators

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
const permanentAddress = user?.address?.permanentAddress;
```

---

## ✅ 1.12 - Nullable, Unknown, Never

### 🔹 Nullable

- Safe checks before operating on possibly `null` values.

### 🔹 Unknown Type

- Type narrowing with `typeof` required before using.

### 🔹 Never Type

```ts
const throwError = (msg: string): never => {
  throw new Error(msg);
};
```

---

## 📚 Summary Cheat Sheet

| Concept            | Use Case                                  |                       |
| ------------------ | ----------------------------------------- | --------------------- |
| Type Alias         | Reusable custom types                     |                       |
| Union (\`          | \`)                                       | One of multiple types |
| Intersection (`&`) | Combine multiple types                    |                       |
| Ternary            | Inline conditional logic                  |                       |
| `??` Operator      | Fallback only for `null` or `undefined`   |                       |
| `?.` Operator      | Safe access of deeply nested properties   |                       |
| `unknown`          | Runtime type-check before use             |                       |
| `never`            | Function that never returns (e.g., error) |                       |

---

## 🛠 Future Topics To Learn

- Enums
- Classes & OOP
- Generics
- Advanced Utility Types
- Type Guards

---

> Built with 💙 by Raufur Islam Nayem
> 📧 Email: [raufurislam@gmail.com](mailto:raufurislam@gmail.com)
> 🌐 Portfolio: [raufurislam-portfolio.web.app](https://raufurislam-portfolio.web.app)

```

---

Would you like a folder structure suggestion or sample file organization to go along with this README?
```
