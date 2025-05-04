{
  // Generic type with interface - generic interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike: X;
  }

  type Nai = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<Nai> = {
    name: "Nayem",
    computer: {
      brand: "Hp",
      model: "i3 4th gen",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "nai",
      model: "nai 123",
      display: "OLED",
    },
    bike: null,
  };
  console.log({ poorDeveloper });

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: String;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rich Dev",
    computer: {
      brand: "Hp",
      model: "i7 13th gen",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Apple",
      model: "watch 2 pro",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "150CC",
    },
  };
  console.log({ richDeveloper });
  //
}
