let weatherData, userInput;

const API_KEY = '2a980988519a4da888a366750892e07b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const $city = $('#city');
const $temp = $('#temp');
const $feels = $('#feels');
const $report = $('#report');
const $input = $('input[type="text"]');
const $drink = $('#drink');

$('form').on('submit', handleGetData);

function handleGetData(event) {
  event.preventDefault();
  userInput = $input.val();
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_KEY}`
  })
    .then(function(data) {
      weatherData = data
      render();
    }, function(error) {
      console.log('error: ', error);
    })
}

function render() {
    $city.text(weatherData.name);
    $temp.text(Math.round(((weatherData.main.temp - 273.15) * (9 / 5)) + 32));
    $feels.text(Math.round(((weatherData.main.feels_like - 273.15) * (9 / 5)) + 32));
    $report.text(weatherData.weather[0].description);
  
    let weather = Math.round(((weatherData.main.feels_like - 273.15) * (9 / 5)) + 32);
    let drink = weather < 60 ? "Hot Toddy" : "My Thai";
    $drink.text(drink);
  }


// const drinks = []
// fetch("https://api.openweathermap.org/data/2.5/weather?")
//   .then(response => response.json())
//   .then(function (result) {
//     console.log('Result', result)
//     for (var i = 0; i < result.length; i++) {
//       words.push(result[i])
//     }
//     console.log('Words', words)
//   })
//   .catch(error => console.log('error', error));