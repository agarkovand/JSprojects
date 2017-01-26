/* global require describe it */

var assert = require("assert");

describe("Reducing", function() {
  it("reduces array", function() {
    var a = [1,2,3,4,5];

    function multiplication(a, b){
      return a * b;
    }

    function solution(){
      // BEGIN (write your solution here)
     var factorial = a.reduce (multiplication, a[0]);
     return factorial;
      // END
    }

    assert.equal(solution(), 120);

  });
});
