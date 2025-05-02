{
  //
  // ternary --> jokhon question mark ke amra logic hisebe bebohar kori ebong kuno ekta decissio making kori tokhon amra take ternary boli
  // optional --> jokhon kuno object er moddhe value ta ache kina amra dekhte cai jate amader application crash na kore tokhon optional chaining
  // nullish coalescing operator --> jokhon sudu matro null/ undified er upor vitti kore kkuno ekta decision nite hoi

  //   ternary operator || optional operator || nullish operator
  const age: number = 15;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  // on ternary
  const isAudlt = age >= 18 ? "Adult" : "Not Adult";
  console.log({ isAudlt });

  // on nullish coalescing operator ??
  const isAuthenticated = null;

  const result = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "guest";
  console.log({ result }, { result2 });

  //   Optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "Raufur",
    address: {
      city: "jp",
      road: "5",
      presentAddress: "Nan",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });

  //
}
