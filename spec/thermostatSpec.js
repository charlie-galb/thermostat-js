'use strict';

describe('thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemp()).toEqual(20)
  });

  it('can raise the temperature', function(){
    thermostat.raise(5)
    expect(thermostat.getCurrentTemp()).toEqual(25)
  });

  it('can lower the temperature', function(){
    thermostat.lower(5)
    expect(thermostat.getCurrentTemp()).toEqual(15)
  });

  it('cannot lower temp below 10', function(){
    expect(function(){thermostat.lower(15)}).toThrowError('TOO C-C-COLD!')
    expect(thermostat.getCurrentTemp()).toEqual(10)
  })

  it('can reset to default temp', function(){
    thermostat.lower(5)
    expect(thermostat.getCurrentTemp()).toEqual(15)
    thermostat.reset()
    expect(thermostat.getCurrentTemp()).toEqual(20)
  })

  it('has powersaving mode on as default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  })

  it('can switch powersaving mode off and on', function(){
    thermostat.powerSavingOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false)
    thermostat.powerSavingOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  })

  describe('if power saving mode is on', function(){

    it('cannot raise temp above 25', function(){
      expect(function(){thermostat.raise(10)}).toThrowError("Easy, there! That's too damn hot!")
      expect(thermostat.getCurrentTemp()).toEqual(25)
    })

  })

  describe('if power saving mode is off', function(){

    it('can raise temp above 25', function(){
      thermostat.powerSavingOff();
      expect(function(){thermostat.raise(10)}).not.toThrowError("Easy, there! That's too damn hot!")
      expect(thermostat.getCurrentTemp()).toEqual(30)
    })

  })

  describe('if temp is below 18', function(){
    it('displays "low-usage" when energy usage is checked', function(){
      thermostat.lower(5)
      expect(thermostat.energyUsage()).toBe('low-usage')
    })
  })

  describe('if temp is between 18 and 25', function(){
    it('displays "medium-usage" when energy usage is checked', function(){
      expect(thermostat.energyUsage()).toBe('medium-usage')
    })
  })

  describe('if temp is above 25', function(){
    it('displays "high-usage" when energy usage is checked', function(){
      thermostat.powerSavingOff()
      thermostat.raise(7)
      expect(thermostat.energyUsage()).toBe('high-usage')
    })
  })

})
