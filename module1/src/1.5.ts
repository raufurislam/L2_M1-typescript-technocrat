// Reference Type --> Object
const user: { firstName: string; middleName: string; lastName: string } = {
  firstName: "Raufur",
  middleName: "Islam",
  lastName: "Nayem",
};

const user2: {
  company: "Programming Hero"; // literal type
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
console.log(user2);
