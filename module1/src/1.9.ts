{
  //
  //   type alias
  const student1: {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  } = {
    name: "Raufur Islam",
    age: 26,
    gender: "male",
    contactNo: "01648068834",
    address: "jp",
  };

  const student2: {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  } = {
    name: "abc",
    age: 26,
    gender: "male",
    address: "mym",
  };

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student3: Student = {
    name: "alias",
    age: 25,
    gender: "male",
    address: "dhk",
  };
  console.log(student3);

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "String Alias"; // string alias
  const isAdmin: IsAdmin = true; // bolean alias

  type Add = (num1: number, num2: number) => number; //Function alias
  //   const add = (num1: number, num2: number): number => num1 + num2;
  const add: Add = (num1, num2) => num1 + num2;
  console.log(add(5, 10));

  //
}
