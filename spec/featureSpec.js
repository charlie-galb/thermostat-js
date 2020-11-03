'use strict';

describe('thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temp).toEqual(20)
  });

  it('can raise the temperature', function(){
    thermostat.raise(5)
    expect(thermostat.temp).toEqual(25)
  });
})
