{
  // Constrain
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return { ...student, course };
  };

  const student3 = addCourseToStudent({
    emni: "emni",
    name: "hfdb",
    id: 511,
    email: "fdjskgnhjk",
  });
  console.log({ student3 });

  const student1 = addCourseToStudent({
    id: 123,
    name: "Mr.X",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  console.log({ student1 });

  const student2 = addCourseToStudent({
    id: 456,
    name: "Mr. Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });
  console.log({ student2 });

  //
}
