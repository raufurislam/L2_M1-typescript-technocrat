"use strict";
{
    //
    //   type alias
    var student1 = {
        name: "Raufur Islam",
        age: 26,
        gender: "male",
        contactNo: "01648068834",
        address: "jp",
    };
    var student2 = {
        name: "abc",
        age: 26,
        gender: "male",
        address: "mym",
    };
    var student3 = {
        name: "alias",
        age: 25,
        gender: "male",
        address: "dhk",
    };
    console.log(student3);
    var userName = "String Alias"; // string alias
    var isAdmin_1 = true; // bolean alias
    //   const add = (num1: number, num2: number): number => num1 + num2;
    var add_1 = function (num1, num2) { return num1 + num2; };
    console.log(add_1(5, 10));
    //
}
