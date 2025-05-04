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
