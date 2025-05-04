{
  // Function with generic
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric(true);

  //   console.log({ res1 });
  //   console.log({ resGeneric });

  type User = { id: number; name: string };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 155415,
    name: "Mr. X",
  });
  //   console.log({ resGenericObj });

  // tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resT = createArrayWithTuple("Bangladesh", 5545);
  const resGenericT = createArrayWithTuple("Bangladesh", {
    name: "Asia",
    planet: "earth",
  });

  console.log({ resT });
  //   console.log({ resGeneric });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr x",
    email: "x@gmail.com",
    devType: "Next level web developer",
  });

  const student2 = addCourseToStudent({
    name: "Mr y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });
  //
}
