// Reference Type --> Object
const user: { firstName: string; middleName: string; lastName: string } = {
  firstName: "Raufur",
  middleName: "Islam",
  lastName: "Nayem",
};

const user2: {
  // company: "Programming Hero"; // literal type
  readonly company: String; // read only type
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "Raufur",
  lastName: "Nayem",
  isMarried: true,
};

// user2.company = "PH"; // Cannot assign to 'company' because it is a read-only property.ts(2540)

console.log(user2);
