const Util = {
  inherits(childClass, parentClass) {
    // childClass.prototype = Object.create(parentClass.prototype);
    // childClass.prototype.constructor = childClass;
    const Surrogate = function () {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  },
  
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;
