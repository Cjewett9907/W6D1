console.log("Webpack is working!");
const MovingObject = require ("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");


window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", function() {
  const myCanvas = document.getElementById("game-canvas");
  const context = myCanvas.getContext("2d");
  window.context = context;
  // console.log(MovingObject);
});
  

// function Asteroid (arg) {
//   // this.test = true;
//   console.log(Util);
//   console.log(MovingObject);
//   console.log(new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}));
//   // MovingObject.call(this);
//   // MovingObject.call(this, {
//   //   color: "red",
//   //   radius: 100,
//   //   pos: arg.pos,
//   //   vel: Util.randomVec(10)
//   // });
// }