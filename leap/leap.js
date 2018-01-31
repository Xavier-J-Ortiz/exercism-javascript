//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
  this.input = input;
  return this.isLeap();
};

Year.prototype.isLeap = function () {
  return (!(this.input % 100)) ? (!(this.input % 400)) : (!(this.input % 4))
};

module.exports = Year;
