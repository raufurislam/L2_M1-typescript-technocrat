{
  // Utility type

  //   pick ***
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type NameAge = Pick<Person, "name" | "age">;

  //   omit ***
  type ContactInfo = Omit<Person, "name" | "age">;

  //   Required ***
  type PersonRequired = Required<Person>;

  //   partial ***
  type PersonPartial = Partial<Person>;

  //   Readonly ***
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Mr. X",
    age: 265,
    contactNo: "0154154155",
  };
  //   person1.name = "Mr. Yz"; because readonly

  // Record ***
  type MyObj = {
    a: string;
    b: string;
  };

  type MyObjR = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {}; // *****
  EmptyObj.name = "abc";

  const obj1: MyObjR = {
    a: "aaa",
    b: "bbb",
    c: "ccc",
    // d: 5,
  };
  //
}
