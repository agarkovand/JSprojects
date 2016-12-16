/* global require describe it */

var assert = require("assert");

describe("Object functions", function() {
  var randomInt = function () {

  }

  it("calculates the volume of boxes", function() {
    var box1 = {
      height: randomInt(),
      width: randomInt(),
      length: randomInt()
    };

    var box2 = {
      height: randomInt(),
      width: randomInt(),
      length: randomInt()
    };

    var box3 = {
      height: randomInt(),
      width: randomInt(),
      length: randomInt()
    };

    var volume = function() {
    // BEGIN (write your solution here)

    return this.calculateVolume = this.heigth * this.width * this.length;
   
  };



    // END

    box1.calculateVolume = volume;
    box2.calculateVolume = volume;
    box3.calculateVolume = volume;

    assert.equal(box1.calculateVolume(), box1.height * box1.width * box1.length);
    assert.equal(box2.calculateVolume(), box2.height * box2.width * box2.length);
    assert.equal(box3.calculateVolume(), box3.height * box3.width * box3.length);
  });
});
