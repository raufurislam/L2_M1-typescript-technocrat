{
  //
  //   instanceof guard
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    markBark() {
      console.log("I am barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am meawing");
    }
  }

  // smart way handle korar jonno caile amra function bebohar korte pari
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    // if (animal instanceof Dog) {
    if (isDog(animal)) {
      // smart way
      animal.markBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  //   instance
  const dog = new Dog("Dogo bhai", "Dog");
  const cat = new Cat("Caty apu", "Cat");
  console.log(dog);
  console.log(cat);

  getAnimal(dog);
  //
}
