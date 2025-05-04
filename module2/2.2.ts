{
  //
  // Interface
  // primitive type can be declare as type alias
  // none primitive type can be declare as interface or type alias

  type rollNumber = number;

  //type alias
  type User1 = {
    name: string;
    age: number;
  };

  // interface
  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role?: string };
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "Nayem",
    age: 26,
    role: "Bekar",
  };

  //   JS ---> object, array --> object, function --> objects
  //   Interface work with object so we can also use interface in array

  type Roll1 = number[]; // array
  const rollNumber1: Roll1 = [1, 2, 3];

  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber2: Roll2 = [1, 2, 3];

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add1: Add1 = (num1, num2) => num1 + num2;
  const add2: Add2 = (num1, num2) => num1 + num2;
  //
}
