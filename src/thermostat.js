class Thermostat{

  constructor(){
    this.temp = 20;
  };

  raise(increment){
    this.temp += increment;
  };

  lower(increment){
    this.temp -= increment;
  };
}
