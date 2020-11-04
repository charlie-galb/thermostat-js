class Thermostat{

  constructor(){
    this.temp = 20;
    this.power_saving = true;
  };

  raise(increment){
    if (this.power_saving = true && this.temp + increment > 25) {
      this.temp = 25;
      throw new Error("Easy, there! That's too damn hot!");
    } else {
      this.temp += increment;
    };
  };

  lower(increment){
    if (this.temp - increment < 10) {
      this.temp = 10;
      throw new Error('TOO C-C-COLD!');
    } else {
      this.temp -= increment;
    };
  };
}
