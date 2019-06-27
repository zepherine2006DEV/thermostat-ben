function Thermostat() {

  const DEFAULTTEMP = 20;
  const MINTEMP = 10;
  const MAXTEMPONPOWERSAVING= 25;

  this.defaultTemperature = function() {
      return DEFAULTTEMP;
  };

  this.temp = DEFAULTTEMP

  this.up = function(){
  // if temp > 25  and power switch is on then we can't have it higher
    if (this.temp < MAXTEMPONPOWERSAVING) {
debugger;
      this.temp ++;
    }
    return this.temp
  };

  this.down = function() {

    if (this.temp > MINTEMP) {
      debugger;
      this.temp --;
    }
      return this.temp;
  }

  this.minTemp = function() {
    return MINTEMP;
  }

  this.powerSavingOn = function(){
    this.switch = true
  }
};

//Thermostat.prototype.defaultTemperature = function() {
 // return 20;
//};
