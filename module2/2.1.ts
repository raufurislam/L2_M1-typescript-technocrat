{
  //
  // type assertion
  let anything: any;
  anything = "Next Level Web Development";
  anything = 222;
  //   (anything as number).

  const kgToGm = (value: string | number) => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `the converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  console.log(kgToGm(10));

  //
}
