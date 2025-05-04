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
