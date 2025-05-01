// Basic Data stype

// string
let firstName: string = "Nayem";

// number
let roll: number = 123;

// boolean
let isAdmin: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

// any type
let d: number;

d = 123;
// d = "string";
// d = true;

// None-primitive
let friends: string[] = ["siam", "Saifullah"];
friends.push("forhad");
console.log(friends);

let eligibleRollList: number[] = [1, 2, 3];

// tuple --> array --> order -->type of value
let coordinates: [number, number] = [1, 5];

let ageName: [number, string, boolean] = [50, "Mr. X", true];
ageName[1] = "Mr. Y";
console.log(ageName);
