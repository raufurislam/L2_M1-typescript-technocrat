{
  // Mapped type
  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

  const arrayOfString = arrayOfNumbers.map((number) => number.toString());
  console.log(arrayOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };
  type Height = AreaNumber["height"]; //look up type

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
  //
}
