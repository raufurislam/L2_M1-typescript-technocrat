"use strict";
// Learning Funtion -->
// Normal Function
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(add(0, 5));
var arrTest = function (num1, num2) {
    return "simple test add: ".concat(num1 + num2);
};
console.log(arrTest(5, 6));
// Arrow Function
var addArrow = function (num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    return num1 + num2;
};
console.log(addArrow(5));
// object --> function ---> method
var poorUser = {
    name: "Raufur",
    balance: 0,
    addBalance: function (balance) {
        return "My new balance is: ".concat(this.balance + balance);
    },
}; // object er moddh kuno ekta property ke access korte this bebohrito history. js e normal function er moddhe this kaj kore arrow function er moddhe this kaj kore na. tai ekhane annonymus normal function bebohar kori.
console.log(poorUser.addBalance(5 + 20));
var poorUser2 = {
    name: "Raufur Islam",
    position: "Taka chara Developer",
    money: 0,
    newMoney: function (balance) {
        return "New balance ".concat(this.money + balance);
    },
};
console.log(poorUser2.newMoney(50));
// Call back function
var arr = [1, 2, 3];
var newArray = arr.map(function (element) { return element * element; });
