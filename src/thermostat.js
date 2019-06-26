function Thermostat() {

  const DEFAULTTEMP = 20;
  const MINTEMP = 10;

  this.defaultTemperature = function() {
      return DEFAULTTEMP;
  };

  this.temp = DEFAULTTEMP

  this.up = function(){
    this.temp ++
    return this.temp
  };

  this.down = function() {

    if (this.temp > MINTEMP) {
      this.temp --;
    }
      return this.temp;
  }

  this.minTemp = function() {
    return MINTEMP;
  }
};

//Thermostat.prototype.defaultTemperature = function() {
 // return 20;
//};
