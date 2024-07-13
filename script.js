
// factory function that can be used to create animal objects
function Animal(noOfLegs,vegetarian){
   
    return {
        noOfLegs: noOfLegs,
        vegetarian: vegetarian,
        eat: function() {
            return "eating...";
        },
        greet: function() {
            return `Hi, I have ${this.noOfLegs} legs.`;
        }
    };
}

let animal = Animal(4, true);
console.log(animal.eat()); // eating...
console.log(animal.greet()); // Hi, I have 4 legs.
//factory function to a constructor function
function AnimalCF(noOfLegs,vegetarian)
{
    this.noOfLegs=noOfLegs;
    this.vegetarian=vegetarian;
    this.eat=function(){
          return "eating...";
    }
    this.greet=function(){
        return "Hi, I have ${noOfLegs} legs."
    }
}
let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat()); // eating...
console.log(animalCF.greet()); // Hi, I have 4 legs.
//factory function to an ES6 class
class AnimalES6{
    constructor(noOfLegs,vegetarian)
    {
        this.noOfLegs=noOfLegs;
      this.vegetarian=vegetarian;

    }
    eat(){
        return "eating...";
    }
    greet(){
        return "Hi, I have ${noOfLegs} legs."
    }
}
let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.
