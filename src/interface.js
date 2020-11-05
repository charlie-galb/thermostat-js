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

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function updateTemperature() {
    $('#temp').text(thermostat.getCurrentTemp());
    $('#temp').attr('class', thermostat.energyUsage());
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=5e762ab9d47e15f45648245ba09e15c9';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#local-weather').text(data.main.temp);
    })
  }

});
