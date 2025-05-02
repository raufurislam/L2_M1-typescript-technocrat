{
  // Spread operator
  // Rest operator
  // Destructring

  // Learn spread operator
  const bros1: string[] = ["Raufur", "Islam", "Nayem"];
  const bros2: string[] = ["Raufur1", "Islam2", "Nayem2"];
  bros1.push(...bros2);
  console.log(`Bros1: ${bros1} `);
  console.log(bros1);
  console.log(bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };
  console.log(mentorList);

  //   Learn Rest Operator
  const greatFriends = (...friends: string[]) => {
    // console.log(`hi ${friend1} ${friend2} ${friend3}`);
    friends.forEach((friend: String) => console.log(`Hi ${friend}`));
  };
  greatFriends("Abul", "gabul", "dabul", "ubul");
}
