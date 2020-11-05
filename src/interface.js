$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temp').text(thermostat.getCurrentTemp());

  $('#raise-temp').click(function(){
    thermostat.raise();
    $('#temp').text(thermostat.getCurrentTemp());
  });

  $('#lower-temp').click(function(){
    thermostat.lower();
    $('#temp').text(thermostat.getCurrentTemp());
  });

  $('#reset-temp').click(function(){
    thermostat.reset();
    $('#temp').text(thermostat.getCurrentTemp());
  });
});
