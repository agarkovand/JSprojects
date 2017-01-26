/* global require describe it */

var assert = require("assert");

describe("Pushing", function() {
  it("generates array", function() {
    var arr = [];
      arr[0] = 1;
          arr.push(arr[0]);
    for (var i = 1; i <= 10; i++) {
      // BEGIN (write your solution here)
           arr[i] = arr[0] + i;
            arr.push(arr[i]);
         }
alert (arr);
  
      // END
    }

    assert.deepEqual(arr, [1,2,3,4,5,6,7,8,9,10]);
  });
});
