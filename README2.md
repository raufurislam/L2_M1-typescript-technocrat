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
