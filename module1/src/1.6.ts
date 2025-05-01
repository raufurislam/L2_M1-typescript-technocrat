// Learning Funtion -->

// Normal Function
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
console.log(add(0, 5));

const arrTest = (num1: number, num2: number): string => {
  return `simple test add: ${num1 + num2}`;
};
console.log(arrTest(5, 6));

// Arrow Function
const addArrow = (num1: number, num2: number = 20): number => num1 + num2;
console.log(addArrow(5));

// object --> function ---> method
const poorUser = {
  name: "Raufur",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is: ${this.balance + balance}`;
  },
}; // object er moddh kuno ekta property ke access korte this bebohrito history. js e normal function er moddhe this kaj kore arrow function er moddhe this kaj kore na. tai ekhane annonymus normal function bebohar kori.
console.log(poorUser.addBalance(5 + 20));

const poorUser2 = {
  name: "Raufur Islam",
  position: "Taka chara Developer",
  money: 0,
  newMoney(balance: number): string {
    return `New balance ${this.money + balance}`;
  },
};
console.log(poorUser2.newMoney(50));

// Call back function
const arr: number[] = [1, 2, 3];
const newArray: number[] = arr.map(
  (element: number): number => element * element
);
