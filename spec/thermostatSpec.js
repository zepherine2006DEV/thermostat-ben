// Thermostat starts at 20 degrees

describe("Thermostat", function() {

  let thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.defaultTemperature()).toEqual(20);
  });

  it("increases the temperature with up function", function() {
    expect(thermostat.up()).toEqual(21);
  });

  it("decreases the temperature with down function", function() {
    expect(thermostat.down()).toEqual(19);
  })

  it("has minimum temperature of 10 degrees", function() {
    expect(thermostat.minTemp()).toEqual(10);
  })

  it("temperature can't go below mininum", function() {

     var i;
     for(i = 20; i >= 10; i--) {
       thermostat.down();
     }

    // thermostat.down()
    // thermostat.down()
    // thermostat.down()
    // thermostat.down()
    // thermostat.down()
    // thermostat.down()
    // thermostat.down()
    // thermostat.down()
    // thermostat.down()
    // thermostat.down()

    expect(thermostat.down()).toEqual(10);
  })
});
