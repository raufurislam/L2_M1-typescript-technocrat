{
  // oop - class
  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    constructor(
      public name: string, // with parameter
      public species: string,
      public sound: string
    ) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }

    makeSound() {
      console.log(`the ${this.name} says ${this.sound}`); // method
    }
  }

  const dog = new Animal("German shepard", "dog", "geu geu");
  dog.makeSound();

  const cat = new Animal("persian", "cat", "meu meu");
  cat.makeSound();

  //
}
