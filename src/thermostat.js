function Thermostat() {
  this.defaultTemperature = function() {
      return 20;
  };

  this.temp = 20

  this.up = function(){
    this.temp ++
    return this.temp
  };

  this.down = function() {
    this.temp --
    return this.temp
  }
};

//Thermostat.prototype.defaultTemperature = function() {
 // return 20;
//};
