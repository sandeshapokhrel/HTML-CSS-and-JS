//Two type of polymorphism 
// 1. Run time / Method Overriding/ Late Binding / Dynamic 
// 2. Compile time / Method Overloding / Early Bindng / Static

/* Runtime */

// Define a base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(this.name + " makes a sound");
    }
}

// Define a subclass that overrides the makeSound method
class Dog extends Animal {
    makeSound() {
        console.log(this.name + " barks");
    }
}

// Define another subclass that overrides the makeSound method
class Cat extends Animal {
    makeSound() {
        console.log(this.name + " meows");
    }
}

// Create instances of each subclass
let myDog = new Dog("Buddy");
let myCat = new Cat("Whiskers");

// Demonstrate polymorphism
myDog.makeSound();  // Output: Buddy barks
myCat.makeSound();  // Output: Whiskers meows

// Base class instance
let genericAnimal = new Animal("Generic");
genericAnimal.makeSound();  // Output: Generic makes a sound


//Compile time Polymorphism

class MathOperation {
    add(a,b) {
        return a+b;
    }
    add(a,b,c){
        return a+b+c ;
    }
}

let sum = new MathOperation();

console.log (sum.add(1,2));
console.log(sum.add(1,2,3));
