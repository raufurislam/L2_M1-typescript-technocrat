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
