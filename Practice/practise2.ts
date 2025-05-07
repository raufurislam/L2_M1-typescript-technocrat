{
  // Task 1: Basic Data Types and First Program
  // Write a TypeScript program that outputs a welcome message.
  console.log(
    "Hello World, I will complete this course successfully and become a Next level Web Developer!"
  );

  // Task 2: Functions, Optional, and Literal Types
  // Create a function that takes name, age, and an optional role ('admin' | 'user' | 'guest').
  function describeUser(
    name: string,
    age: number,
    role?: "admin" | "user" | "guest"
  ): void {
    console.log(`Name: ${name}, Age: ${age}, Role: ${role ?? "guest"}`);
  }
  describeUser("Nayem", 26);

  // Task 3: Object Types, Type Alias, & Literal Types
  // Define a Person type alias with properties like name, address, job, etc.
  type Person = {
    name: string;
    address: string;
    hairColor: string;
    eyeColor: string;
    income: number;
    expense: number;
    hobbies: string[];
    familyMembers: string[];
    job: string;
    skills: string[];
    maritalStatus: "single" | "married";
    friends: string[];
  };

  const person: Person = {
    name: "Raufur",
    address: "Mymensingh",
    hairColor: "Black",
    eyeColor: "Brown",
    income: 50000,
    expense: 20000,
    hobbies: ["coding", "designing"],
    familyMembers: ["father", "mother"],
    job: "Web Developer",
    skills: ["React", "Node"],
    maritalStatus: "single",
    friends: ["Fahim", "Tanvir"],
  };

  // Task 4: Union and Intersection Types
  // Create union and intersection types using interfaces.
  interface Book {
    title: string;
    author: string;
  }

  interface Magazine {
    issue: number;
    publisher: string;
  }

  type Readable = Book | Magazine;
  type CompletePublication = Book & Magazine;

  // Task 5: Function Type
  // Write a function that reverses a string.
  function reverseString(str: string): string {
    return str.split("").reverse().join("");
  }

  // Task 6: Spread, Rest, Destructuring
  // Use rest to sum numbers and destructuring to access values.
  function sumAll(...numbers: number[]): number {
    return numbers.reduce((sum, n) => sum + n, 0);
  }

  const nums = [10, 20, 30];
  console.log(sumAll(...nums));

  function printFirstTwo([first, second]: number[]): void {
    console.log("First:", first);
    console.log("Second:", second);
  }
  printFirstTwo(nums);

  const user = { name: "Nayem", age: 26 };
  function logUserDetails({ name, age }: { name: string; age: number }): void {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  logUserDetails(user);

  // Task 7: Type Assertion and Narrowing
  // Return string length if string, square if number.
  function checkInput(input: string | number): number {
    if (typeof input === "string") return input.length;
    return input * input;
  }

  // Task 8: Intersection Types
  // Combine User and Admin types into AdminUser.
  type User = {
    name: string;
    email: string;
  };

  type Admin = {
    adminLevel: string;
  };

  type AdminUser = User & Admin;

  function describeAdmin(user: AdminUser): string {
    return `${user.name} is an admin with level ${user.adminLevel}`;
  }

  // Task 9: Optional Chaining
  // Retrieve nested property safely using optional chaining.
  function getEmployeeCity(employee: any): string | undefined {
    return employee?.address?.city;
  }

  // Task 10: Nullish Coalescing
  // Use ?? to provide a fallback for null or undefined.
  function getDisplayName(name: string | null | undefined): string {
    return name ?? "Anonymous";
  }

  // Task 11: Unknown Type
  // Handle unknown input types safely.
  function processData(data: unknown): unknown {
    if (typeof data === "string") return data.toUpperCase();
    if (typeof data === "number") return data * data;
    return data;
  }

  // Task 12: Never Type
  // A function that throws error and never returns.
  function handleError(message: string): never {
    throw new Error(message);
  }

  // Task 13: Generics with Functions
  // Remove duplicates from any array using generics.
  function removeDuplicates<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }

  // Task 14: Async Function
  // Simulate async user data fetching.
  async function fetchUserData(): Promise<{ name: string; age: number }> {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ name: "Nayem", age: 26 }), 1000);
    });
  }

  // Task 15: Type Guards
  // Create a custom type guard and use it.
  function isString(value: unknown): value is string {
    return typeof value === "string";
  }

  function printUpperCase(value: unknown): void {
    if (isString(value)) console.log(value.toUpperCase());
    else console.log("Not a string");
  }

  // Task 16: keyof Constraint
  // Access object properties dynamically using keyof.
  function getPropValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const student = {
    name: "Nayem",
    age: 26,
    location: "BD",
  };

  const studentName = getPropValue(student, "name");
  //
}
