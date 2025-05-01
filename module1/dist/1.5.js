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
// user2.company = "PH"; // Cannot assign to 'company' because it is a read-only property.ts(2540)
console.log(user2);
