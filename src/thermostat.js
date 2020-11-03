class Thermostat{

  constructor(){
    this.temp = 20;
  };

  raise(increment){
    this.temp += increment;
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
