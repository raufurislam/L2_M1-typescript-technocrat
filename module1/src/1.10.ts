{
  //
  //   union types |
  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper"; // string literal type
  type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper"; // string literal type

  type Developer = FrontendDeveloper | FullstackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+" | "AB+" | "O-" | "A-" | "B-" | "AB-";
  };

  const user1: User = {
    name: "Raufur",
    email: "raufurislam@email.com",
    gender: "male",
    bloodGroup: "A+",
  };
  console.log(user1);

  type FrontendDeveloper2 = {
    skills: string[];
    roll1: "Frontend Developer";
  };
  type BackendDeveloper2 = {
    skills: string[];
    roll2: "Backend Developer";
  };

  type FullstackDeveloper2 = FrontendDeveloper2 & BackendDeveloper2;
  const fullstackDeveloepr: FullstackDeveloper2 = {
    skills: ["HTML", "CSS", "Express.js", "Node.js"],
    roll1: "Frontend Developer",
    roll2: "Backend Developer",
  };
  console.log(fullstackDeveloepr);

  //
}
