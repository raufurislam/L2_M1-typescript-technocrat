"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // Spread operator
    // Rest operator
    // Destructring
    // Learn spread operator
    var bros1 = ["Raufur", "Islam", "Nayem"];
    var bros2 = ["Raufur1", "Islam2", "Nayem2"];
    bros1.push.apply(bros1, bros2);
    console.log("Bros1: ".concat(bros1, " "));
    console.log(bros1);
    console.log(bros2);
    var mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    var mentors2 = {
        prisma: "Firoz",
        next: "Tonmoy",
        cloud: "Nahid",
    };
    var mentorList = __assign(__assign({}, mentors1), mentors2);
    console.log(mentorList);
    //   Learn Rest Operator
    var greatFriends2 = function (friend1, friend2, friend3) {
        console.log("Hi! ".concat(friend1, ", ").concat(friend2, ", ").concat(friend3));
    };
    greatFriends2("abc", "xyz", "hdbf");
    var greatFriends = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
    };
    greatFriends("Abul", "gabul", "dabul", "ubul");
}
