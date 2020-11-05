class Thermostat{

  constructor(){
    this.temp = 20;
    this.MIN_TEMP = 10;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.powerSaving = true;
  };

  getCurrentTemp(){
    return this.temp;
  };

  isMinTemp(){
    return this.temp === this.MIN_TEMP;
  };

  isMaxTemp(){
    if (this.isPowerSavingModeOn() === false) {
      return this.temp === this.MAX_TEMP_PSM_OFF
    }
    return this.temp === this.MAX_TEMP_PSM_ON;
  };

  isPowerSavingModeOn(){
    return this.powerSaving;
  };

  powerSavingOff(){
    this.powerSaving = false;
  };

  powerSavingOn(){
    this.powerSaving = true;
  };

  raise(){
    if (this.isMaxTemp()) {
     throw new Error("Easy, there! That's too damn hot!");
    }
    this.temp += 1;
  };

  lower(){
    if (this.isMinTemp()) {
     throw new Error('TOO C-C-COLD!');
    }
      this.temp -= 1;
  };

  reset(){
    this.temp = 20;
  };

  energyUsage(){
    if (this.temp < 18) {
      return 'low-usage';
    } else if (this.temp >= 18 && this.temp <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    };
  };

}
