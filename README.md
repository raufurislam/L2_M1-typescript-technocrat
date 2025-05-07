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

## ✅ 2.3 - Generics

### 🔹 Generic Type with Arrays

```ts
type GenericArrayN = Array<number>;
type GenericArrayS = Array<string>;
type GenericArrayB = Array<boolean>;

// Using built-in generic syntax
const rollNumbers: Array<number> = [1, 2, 3];
const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
const boolArray: Array<boolean> = [true, false, true];

// Using custom generic aliases
const rollNumbersG: GenericArrayN = [1, 2, 3];
const mentorsG: GenericArrayS = ["Mr. X", "Mr. Y", "Mr. Z"];
const boolArrayG: GenericArrayB = [true, false, true];
```

### 🔹 Dynamic Generic Type

```ts
type GenericArray<T> = Array<T>;

const rollNumberD: GenericArray<number> = [1, 2, 3];
const mentorsD: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
const boolArrayD: GenericArray<boolean> = [true, false, true];
```

### 🔹 Generic Array of Objects

```ts
const user: GenericArray<{ name: string; age: number }> = [
  { name: "Nayem", age: 26 },
  { name: "Islam", age: 27 },
];
```

### 🔹 Generic Tuple

```ts
type GenericTuple<X, Y> = [X, Y];

const manusher: GenericTuple<string, string> = ["Mr X", "Mst Y"];
const userWithID: GenericTuple<number, { name: string; email: string }> = [
  1234,
  { name: "Nayem", email: "nayem@gmail.com" },
];

console.log({ userWithID });
```

## ✅ 2.4 - Generic Interface

### 🔹 Creating a Generic Interface

```ts
interface Developer<T, X = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
  bike: X;
}
```

### 🔹 Using Generic Types in Interface

```ts
type Nai = {
  brand: string;
  model: string;
  display: string;
};

const poorDeveloper: Developer<Nai> = {
  name: "Nayem",
  computer: {
    brand: "Hp",
    model: "i3 4th gen",
    releaseYear: 2015,
  },
  smartWatch: {
    brand: "nai",
    model: "nai 123",
    display: "OLED",
  },
  bike: null,
};
```

### 🔹 Passing Two Generic Types

```ts
interface AppleWatch {
  brand: string;
  model: string;
  heartTrack: boolean;
  sleepTrack: boolean;
}

interface YamahaBike {
  model: string;
  engineCapacity: string;
}

const richDeveloper: Developer<AppleWatch, YamahaBike> = {
  name: "Rich Dev",
  computer: {
    brand: "Hp",
    model: "i7 13th gen",
    releaseYear: 2024,
  },
  smartWatch: {
    brand: "Apple",
    model: "watch 2 pro",
    heartTrack: true,
    sleepTrack: true,
  },
  bike: {
    model: "Yamaha",
    engineCapacity: "150CC",
  },
};
```

---

## ✅ 2.5 - Generic Functions

### 🔹 Basic Function with Generic

```ts
const createArray = (param: string): string[] => {
  return [param];
};

const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};

const res1 = createArray("Bangladesh");
const resGeneric = createArrayWithGeneric(true);

type User = { id: number; name: string };
const resGenericObj = createArrayWithGeneric<User>({
  id: 155415,
  name: "Mr. X",
});
```

### 🔹 Tuple with Generic

```ts
const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

const resT = createArrayWithTuple("Bangladesh", 5545);
const resGenericT = createArrayWithTuple("Bangladesh", {
  name: "Asia",
  planet: "earth",
});
```

### 🔹 Add Property with Generic Function

```ts
const addCourseToStudent = <T>(student: T) => {
  const course = "Next Level Web Development";
  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudent({
  name: "Mr x",
  email: "x@gmail.com",
  devType: "Next level web developer",
});

const student2 = addCourseToStudent({
  name: "Mr y",
  email: "y@gmail.com",
  hasWatch: "Apple Watch",
});
```

### ✅ 2.6 — Generic Constraint

```ts
const addCourseToStudent = <
  T extends { id: number; name: string; email: string }
>(
  student: T
) => {
  const course = "Next Level Web Development";
  return { ...student, course };
};

const student = addCourseToStudent({
  id: 123,
  name: "Mr. X",
  email: "x@gmail.com",
  devType: "NLWD",
});
```

🧠 **Note**:

- Use `extends { ... }` to **restrict** generic type `T`.
- Ensures only objects with required keys are accepted.

---

### ✅ 2.7 — `keyof` with Generics

```ts
type Vehicle = { bike: string; car: string; ship: string };
type Owner = keyof Vehicle; // "bike" | "car" | "ship"

const getPropertyByValue = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const car = { model: "Toyota", year: 2020 };
const result = getPropertyByValue(car, "year");
```

🧠 **Note**:

- `keyof` gets the union of keys.
- `Y extends keyof X` allows accessing a valid property.

---

### ✅ 2.8 — Promise (Generic)

```ts
type Something = { something: string };

const createPromise = (): Promise<Something> => {
  return new Promise((resolve, reject) => {
    const data: Something = { something: "something" };
    data ? resolve(data) : reject("Failed");
  });
};

const showData = async (): Promise<Something> => {
  const data = await createPromise();
  return data;
};
```

🧠 **Note**:

- Generic Promise: `Promise<T>`
- Use `async/await` to handle data and return it.

---

### ✅ 2.9 — Conditional Type

```ts
type Sheikh = { bike: string; car: string; ship: string; plane: string };

type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

type hasBike = CheckVehicle<"bike">; // true
type hasTractor = CheckVehicle<"tractor">; // false
```

🧠 **Note**:

- `T extends U ? X : Y` is conditional type.
- Great for checking existence in types.

---

### ✅ 2.10 — Mapped Type

```ts
type AreaNumber = { height: number; width: number };

type AreaString<T> = {
  [key in keyof T]: T[key];
};

const area: AreaString<{ height: string; width: number }> = {
  height: "100",
  width: 50,
};
```

🧠 **Note**:

- `[key in keyof T]` loops through keys to create a new type.
- Can transform values or keep same.

---

### ✅ 2.11 — Utility Types

```ts
type Person = {
  name: string;
  age: number;
  contactNo: string;
  email?: string;
};

type NameAge = Pick<Person, "name" | "age">;
type ContactInfo = Omit<Person, "name" | "age">;
type PersonRequired = Required<Person>;
type PersonPartial = Partial<Person>;
type PersonReadonly = Readonly<Person>;

const person: PersonReadonly = {
  name: "Mr. X",
  age: 30,
  contactNo: "01234",
};

// Record
type MyObj = Record<string, string>;
const obj: MyObj = { a: "abc", b: "def" };
```

🧠 **Note**:

- `Pick`: Keep only selected keys.
- `Omit`: Exclude selected keys.
- `Required`: Make all fields required.
- `Partial`: Make all fields optional.
- `Readonly`: Make fields immutable.
- `Record<K, T>`: Map key type `K` to value type `T`.

## Module 3: Object Oriented typescript

## 🔹 Section 3.1 – Class & Object

**Concept:** Define blueprints (class) to create objects with properties and methods.

```ts
class Animal {
  constructor(public name: string, public sound: string) {}
  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}
const dog = new Animal("Dog", "Woof");
dog.makeSound(); // Dog says Woof
```

---

## 🔹 Section 3.2 – Inheritance

**Concept:** A child class inherits properties and methods from a parent class.

```ts
class Person {
  constructor(public name: string) {}
}
class Student extends Person {
  constructor(name: string, public grade: string) {
    super(name);
  }
}
const student = new Student("John", "A");
console.log(student.name); // John
```

---

## 🔹 Section 3.3 – Type Guards

**Concept:** Narrow down types in union using `typeof` or `in`.

```ts
function printValue(value: string | number) {
  if (typeof value === "string") console.log("It is a string");
  else console.log("It is a number");
}
printValue(5); // It is a number
```

---

## 🔹 Section 3.4 – `instanceof` Guard

**Concept:** Use `instanceof` to check object class types.

```ts
class Dog {
  bark() {
    console.log("Woof");
  }
}
const pet = new Dog();
if (pet instanceof Dog) pet.bark(); // Woof
```

---

## 🔹 Section 3.5 – Access Modifiers

**Concept:** Control access to properties using `public`, `private`, `protected`.

```ts
class Account {
  private balance = 1000;
  getBalance() {
    return this.balance;
  }
}
const acc = new Account();
console.log(acc.getBalance()); // 1000
```

---

## 🔹 Section 3.6 – Getter & Setter

**Concept:** Use `get` and `set` to safely access or modify private properties.

```ts
class Wallet {
  private _amount = 0;
  get amount() {
    return this._amount;
  }
  set amount(value: number) {
    this._amount = value;
  }
}
const w = new Wallet();
w.amount = 500;
console.log(w.amount); // 500
```

---

## 🔹 Section 3.7 – Static Properties & Methods

**Concept:** Belongs to the class, not instances.

```ts
class Counter {
  static count = 0;
  static increment() {
    this.count++;
  }
}
Counter.increment();
console.log(Counter.count); // 1
```

---

## 🔹 Section 3.8 – Polymorphism

**Concept:** Same method behaves differently across subclasses.

```ts
class Person {
  getSleep() {
    console.log("8 hours");
  }
}
class Student extends Person {
  getSleep() {
    console.log("6 hours");
  }
}
const s = new Student();
s.getSleep(); // 6 hours
```

---

## 🔹 Section 3.9 – Abstraction

**Concept:** Hide complex details using `interface` or `abstract class`.

```ts
interface Vehicle {
  start(): void;
}
class Car implements Vehicle {
  start() {
    console.log("Car started");
  }
}
new Car().start(); // Car started
```

---

## 🔹 Section 3.10 – Encapsulation

**Concept:** Protect internal data using access modifiers.

```ts
class Secret {
  private key = "abc123";
  revealKey() {
    return this.key;
  }
}
const s = new Secret();
console.log(s.revealKey()); // abc123
```

---

## 🙋 About Me

- 👨‍💻 **Raufur Islam Nayem**
- 📧 [raufurislam@gmail.com](mailto:raufurislam@gmail.com)
- 🌐 [raufurislam-portfolio.web.app](https://raufurislam-portfolio.web.app)

> Built with 💙 to keep learning and growing!
