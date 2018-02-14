const API_ENDPOINT = "http://api.openweathermap.org/data/2.5/weather"
const API_KEY = ""
function WeatherWidget (target, config = {}) {

  this.city = config.city
  var node = document.getElementById(target);

  this.getCurrentWeather = function() {
  }
  this.getForecast = function(days = 5) {
  }
}
