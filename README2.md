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
