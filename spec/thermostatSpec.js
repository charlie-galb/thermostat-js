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

  it('can lower the temperature', function(){
    thermostat.lower(5)
    expect(thermostat.temp).toEqual(15)
  });

  it('cannot lower temp below 10', function(){
    expect(function(){thermostat.lower(15)}).toThrowError('TOO C-C-COLD!')
    expect(thermostat.temp).toEqual(10)
  })

  describe('if power saving mode is on', function(){

    it('cannot raise temp above 25', function(){
      expect(function(){thermostat.raise(19)}).toThrowError("Easy, there! That's too damn hot!")
      expect(thermostat.temp).toEqual(25)
    })

  })
})
