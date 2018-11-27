const Util = require ('./util.js');
const MovingObject = require ("./moving_object.js");

function Bananas (arg) {
  // this.test = true;
  console.log(Util);
  console.log(MovingObject);
  console.log(new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}));
  // MovingObject.call(this);
  // MovingObject.call(this, {
  //   color: "red",
  //   radius: 100,
  //   pos: arg.pos,
  //   vel: Util.randomVec(10)
  // });
}

function functest () {
  console.log(MovingObject);
}

// Util.inherits(Asteroid, MovingObject);

// module.exports = Asteroid;
module.exports = Bananas;




