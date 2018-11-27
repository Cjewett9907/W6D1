// const Util = require("./util.js");
const Asteroid = require("./asteroid.js");

function MovingObject (args) {
  this.pos = args.pos || [0, 0];
  this.vel = args.vel || [10, 10]; 
  this.radius = args.radius || 5; 
  this.color = args.color || "red";
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function (ctx) {
  // const color = this.color;
  // this.color = "white";
  // this.draw(ctx);
  // this.color = color;
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  // this.draw(ctx);
};



module.exports = MovingObject;

