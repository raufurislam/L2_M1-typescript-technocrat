// Destructuring
{
  const user = {
    id: 1,
    name: {
      firstName: "Raufur",
      middleName: "Islam",
      lastName: "Nayem",
    },
    contactNo: "01648068834",
    address: "Bangladesh",
  };

  const {
    contactNo,
    name: { middleName: midName },
  } = user;
  console.log(contactNo, midName);

  //   Array destructuring
  const myFriends = ["Siam", "Saifullah", "Forhad", "Tuhin", "Emon"];
  const [, , bestFriend, ...rest] = myFriends;
  console.log(bestFriend, rest);
}
