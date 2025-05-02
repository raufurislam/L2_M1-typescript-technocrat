"use strict";
// Destructuring
{
    var user_1 = {
        id: 1,
        name: {
            firstName: "Raufur",
            middleName: "Islam",
            lastName: "Nayem",
        },
        contactNo: "01648068834",
        address: "Bangladesh",
    };
    var contactNo = user_1.contactNo, midName = user_1.name.middleName;
    console.log(contactNo, midName);
    //   Array destructuring
    var myFriends = ["Siam", "Saifullah", "Forhad", "Tuhin", "Emon"];
    var bestFriend = myFriends[2], rest = myFriends.slice(3);
    console.log(bestFriend, rest);
}
