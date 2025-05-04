{
  // Generic type
  type GenericArrayN = Array<Number>;
  type GenericArrayS = Array<string>;
  type GenericArrayB = Array<Boolean>;

  // const rollNumbers: number[] = [1, 2, 3];
  const rollNumbers: Array<number> = [1, 2, 3];
  const rollNumbersG: GenericArrayN = [1, 2, 3];

  // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentorsG: GenericArrayS = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: Array<boolean> = [true, false, true];
  const boolArrayG: GenericArrayB = [true, false, true];

  // To dynamic:
  // type GenericArray = Array<string>;
  type GenericArray<T> = Array<T>; // T is shorter version of param for industry standard

  const rollNumberD: GenericArray<number> = [1, 2, 3];
  const mentorsD: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
  const boolArrayD: GenericArray<boolean> = [true, false, true];

  // Generic object
  interface User {
    name: string;
    age: number;
  }
  // const user: GenericArray<{ name: string; age: number }> = [
  const user: GenericArray<User> = [
    {
      name: "Nayem",
      age: 26,
    },
    {
      name: "Islam",
      age: 27,
    },
    // {
    //   role: "admin",
    // },
  ];

  const add = (x: number, y: number) => x + y;
  add(30, 20);

  // Generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manusher: GenericTuple<string, string> = ["Mr X", "Mst Y"];
  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Nayem", email: "nayem@gmail.com" },
  ];
  console.log({ userWithID });
  //
}
