// Function.prototype.inherits1 = function (parent) {
//   const Surrogate = function () {};
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits2 = function (parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
}

function MovingObject () {}
MovingObject.prototype.move = function () {
  console.log( "wheeeeee");
};


function Ship () {}
Ship.inherits2(MovingObject);
  
const ship1 = new Ship();
console.dir(ship1);
ship1.move();

function Asteroid () {}
Asteroid.inherits2(MovingObject);

Asteroid.prototype.smash = function () {
  console.log("smash");
}
