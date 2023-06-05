// Animal constructor using fundtion 

function Animal(color,eyes,legs) {
    this.color= color;
    this.eyes = eyes;
    this.legs = legs;
}

// Method for Animal Eat
Animal.prototype.eat = function() {
  console.log("The animal is eating.");
};

// Method for Animal Sleep
Animal.prototype.sleep = function() {
  console.log("The animal is sleeping.");
};

// Creating instances
let dog = new Animal("brown", 2, 4);
let cat = new Animal("white", 2, 4);
let snake = new Animal("golden", 2, 0);

console.log(dog.eat());
console.log(dog);


// Bird Constructor

// Constructor function for Bird
function Bird(color, eyes, legs,name) {
    this.color = color;
    this.eyes = eyes;
    this.legs = legs;
    this.name = name;   
} 
  
  // Getter function 
  Bird.prototype.getName = function() {
    return this.name;
  };
  
  // Setter function 
  Bird.prototype.setName = function(name) {
    this.name = name;
  };


// instance creation
let parrot = new Bird("green", 2, 2,"parrot");
let peacock = new Bird("blue", 2, 2,"peacock" );

console.log(parrot);

parrot.setName("sparrow");

console.log(parrot);