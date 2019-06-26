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
});
