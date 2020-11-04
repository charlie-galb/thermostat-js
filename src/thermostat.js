class Thermostat{

  constructor(){
    this.temp = 20;
    this.powerSaving = true;
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

  raise(increment){
    if (this.powerSaving === true && this.temp + increment > 25) {
      this.temp = 25;
      throw new Error("Easy, there! That's too damn hot!");
    } else if (this.powerSaving === false && this.temp + increment > 32){
      this.temp = 32;
      throw new Error("Easy, there! That's too damn hot!");
    } else {
      this.temp += increment;
    };
    console.log(this.powerSaving);
    console.log(this.temp);
  };

  lower(increment){
    if (this.temp - increment < 10) {
      this.temp = 10;
      throw new Error('TOO C-C-COLD!');
    } else {
      this.temp -= increment;
    };
  };

  reset(){
    this.temp = 20;
  }
}
