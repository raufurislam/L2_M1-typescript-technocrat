{
  // Conditional type
  type a1 = number;
  type b1 = any;

  type x = a1 extends null ? true : false; //conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // nested conditional type

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
  type hasBike = CheckVehicle<"bike">;
  type hasTractor = CheckVehicle<"tractor">;
  type hasPlane = CheckVehicle<"plane">;

  //
}
