{
  // ---------------------------------------------------------------
  // Task 1: Basic Data Types and First Program
  const greet: string =
    "Hello World, I will complete this course successfully and become a Next level Web Developer!";
  // console.log({ greet });

  // ---------------------------------------------------------------

  // Task 2: Functions, Optional, and Literal Types
  // Objective: Create a function with parameters and an optional literal type.

  // Instructions:

  // Define a function that takes:
  // name (string)
  // age (number)
  // role (optional, with type 'admin' | 'user' | 'guest')
  // The function should log these values or perform a basic action.

  function user(name: string, age: number, role?: "admin" | "user" | "guest") {
    // console.log(`name: ${name}, Age: ${age}, role: ${role ?? "guest"}`);
  }
  user("Nayem", 23, "admin");

  // ---------------------------------------------------------------
  type Person = {
    name: string;
    age: number;
    familyMember: string[];
    maritualStatus: "single" | "married";
    address: string;
  };
  const personInfo: Person = {
    name: "Mr.X",
    age: 26,
    familyMember: ["Father", "mother"],
    maritualStatus: "married",
    address: "jp",
  };
  // console.log({ personInfo });

  // ---------------------------------------------------------------

  //   Task 4: Union and Intersection Types
  // Objective: Create union and intersection types using interfaces.

  // Instructions:

  // Define interfaces Book and Magazine.
  // Create:
  // A type that is a union of Book and Magazine.
  // A type that is an intersection of Book and Magazine.

  interface Book {
    title: string;
    author: string;
  }

  interface Magazine {
    title: string;
    issue: number;
    publisher: string;
  }

  type Union = Book | Magazine;
  type Intersection = Book & Magazine;

  const book1: Book = {
    title: "Book 1",
    author: "abc1",
  };
  const magazine1: Magazine = {
    title: "dfnj",
    issue: 5541,
    publisher: "hsdbf",
  };

  const union: Union = {
    title: book1.title,
    author: book1.author,
    issue: magazine1.issue,
    publisher: magazine1.publisher,
  };
  // console.log({ union });

  const intersectionD: Intersection = {
    title: book1.title,
    author: book1.author,
    issue: magazine1.issue,
    publisher: magazine1.publisher,
  };

  const intersection: Intersection = {
    title: book1.title,
    author: book1.author,
    issue: magazine1.issue,
    publisher: magazine1.publisher,
  };
  // console.log({ intersection });

  // ---------------------------------------------------------------

  // Task 5: Function Type
  // Objective: Write a function that reverses a string.

  // Instructions:

  // Write a function reverseString that:
  // Takes a single string argument.
  // Returns the string in reverse order.
  // Example:
  // Input: "hello"
  // Output: "olleh"

  function reverseString(str: string): string {
    const reversed = str.split("").reverse().join("");
    console.log(reversed);
    return reversed;
  }
  // reverseString("hello");

  // ---------------------------------------------------------------

  // Task 6: Spread and Rest Operators, Destructuring
  // Objective: Write a function that uses the rest operator for variable-length arguments.

  // Instructions:

  // Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

  function sumAll(...numbers: number[]): number {
    return numbers.reduce((sum, n) => sum + n, 0);
  }

  const nums = [10, 20, 30];
  console.log(sumAll(...nums)); // Spread used here

  function printFirstTwo([first, second]: number[]): void {
    console.log("First:", first);
    console.log("Second:", second);
  }
  printFirstTwo(nums); // Destructuring here

  const user6 = { name: "Nayem", age: 26 };
  function logUserDetails({ name, age }: { name: string; age: number }): void {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  logUserDetails(user6); // Object destructuring

  // ---------------------------------------------------------------
  // ---------------------------------------------------------------
  // ---------------------------------------------------------------
  // ---------------------------------------------------------------
  // ---------------------------------------------------------------
  // ---------------------------------------------------------------
  // ---------------------------------------------------------------
  // ---------------------------------------------------------------
  // ---------------------------------------------------------------
  // ---------------------------------------------------------------
  //
}
