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
