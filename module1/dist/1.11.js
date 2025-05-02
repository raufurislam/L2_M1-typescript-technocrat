"use strict";
var _a, _b;
{
    //
    // ternary --> jokhon question mark ke amra logic hisebe bebohar kori ebong kuno ekta decissio making kori tokhon amra take ternary boli
    // optional --> jokhon kuno object er moddhe value ta ache kina amra dekhte cai jate amader application crash na kore tokhon optional chaining
    // nullish coalescing operator --> jokhon sudu matro null/ undified er upor vitti kore kkuno ekta decision nite hoi
    //   ternary operator || optional operator || nullish operator
    var age = 15;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    // on ternary
    var isAudlt = age >= 18 ? "Adult" : "Not Adult";
    console.log({ isAudlt: isAudlt });
    // on nullish coalescing operator ??
    var isAuthenticated = null;
    var result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    var result2 = isAuthenticated ? isAuthenticated : "guest";
    console.log({ result: result }, { result2: result2 });
    var user_1 = {
        name: "Raufur",
        address: {
            city: "jp",
            road: "5",
            presentAddress: "Nan",
        },
    };
    var permanentAddress = (_b = (_a = user_1 === null || user_1 === void 0 ? void 0 : user_1.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ permanentAddress: permanentAddress });
    //
}
