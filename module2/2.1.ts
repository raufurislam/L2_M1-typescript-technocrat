{
  //
  // Type Assertion

  let anything: any;
  anything = "Next Level Web Development";
  anything = 222;
  anything = true;
  console.log(anything);
  anything as string;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `the converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  console.log(kgToGm(20));

  const result1 = kgToGm(1000) as number;
  console.log({ result1 });

  const result2 = kgToGm("2000") as string;
  console.log({ result2 });

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
