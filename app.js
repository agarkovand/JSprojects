it("should create instance of Object", function() {
    // BEGIN (write your solution here)
 function Computer(weight, cpu, videocard) {
       this.weight = "weight";
         this.cpu = "cpu";
         this.videocard = "videocard";
         var mycomp = new Computer();
       return mycomp(weight, cpu, videocard);
 }
   var Intel = function() {
     weight.Intel = this.weight;
     cpu.Intel = this.cpu;
     videocard.Intel = this.videocard;
     var mac = new Intel();

   if (mac instanceof Computer)
   console.log ("true");
  
    // END

  var mac = new Computer();

    assert.equal(typeof Computer, 'function');
    assert.notEqual(mac instanceof Computer, true);
    assert.notEqual(Object.getPrototypeOf(mac), Computer);
    assert.equal(typeof mac.weight, 'string');
    assert.equal(typeof mac.cpu, 'string');
    assert.equal(typeof mac.videocard, 'string');
  });
});
