{
  // type guard

  //   typeof --> type guard
  type AlphaNumeric = string | number;

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 3);
  const result2 = add("2", "1");
  console.log({ result1 });
  console.log({ result2 });

  //   in guard
  type NormalUser = { name: string };

  type AdminUser = { name: string; role: string };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      user.role;
      console.log(`My name is ${user.name} and I am  ${user.role}`);
    } else {
      console.log(`My name is ${user.name} and I am User`);
    }
  };

  const normalUser: NormalUser = {
    name: "Normal bhai",
  };

  const adminUser: AdminUser = {
    name: "Admin bhai",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);

  //
}
