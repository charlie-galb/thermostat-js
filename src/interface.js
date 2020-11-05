$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#raise-temp').click(function(){
    thermostat.raise();
    updateTemperature();
  });

  $('#lower-temp').click(function(){
    thermostat.lower();
    updateTemperature();
  });

  $('#reset-temp').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.powerSavingOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });
  $('#powersaving-off').click(function(){
    thermostat.powerSavingOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temp').text(thermostat.getCurrentTemp());
    $('#temp').attr('class', thermostat.energyUsage());
  }
});
