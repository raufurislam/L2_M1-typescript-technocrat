"use strict";
// Reference Type --> Object
var user = {
    firstName: "Raufur",
    middleName: "Islam",
    lastName: "Nayem",
};
var user2 = {
    company: "Programming Hero",
    firstName: "Raufur",
    lastName: "Nayem",
    isMarried: true,
};
user2.company = "PH";
console.log(user2);
