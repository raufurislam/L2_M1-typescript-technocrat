{
  //
  // nullable type / unknown type

  //   nullable type
  const searchName = (value: string) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  searchName("Raufur");

  //   unknown - type of
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };
  getSpeedInMeterPerSecond(`120 kmh^-1`);
  getSpeedInMeterPerSecond(120);
  getSpeedInMeterPerSecond(null);

  //   never
  const throwEror = (msg: string): never => {
    throw new Error(msg);
  };
  throwEror("Throwing error");
  //
}
