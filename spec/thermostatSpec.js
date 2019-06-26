// Thermostat starts at 20 degrees

describe("Thermostat", function() {

  let thermostat;
  
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.defaultTemperature()).toEqual(20);
  });
});