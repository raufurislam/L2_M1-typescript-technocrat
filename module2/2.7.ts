{
  // generic constrain with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually

  type Owner2 = keyof Vehicle;

  const getPropertyByValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Raufur",
    age: 26,
    address: "jp",
  };

  const car = {
    model: "Toyota dbfh",
    year: 2020,
  };

  const result1 = getPropertyByValue(car, "year");
  console.log(result1);

  // const person1: Owner = "car";

  // console.log(user["age"]);

  // Practice:
  const getPropertyByValueP = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const userP = {
    name: "Nayem",
    age: 26,
    address: "mym",
  };
  const resultP = getPropertyByValueP(userP, "name");
  console.log({ resultP });

  //
}
