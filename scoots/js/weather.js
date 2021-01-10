const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=20.5072&lon=-86.9446&units=imperial&exclude=hourly&appid=4a0eddb5f22fe1857038e663b0dd6611`;

fetch(apiURL)
  .then((response) => response.json())
  .then((summary) => {
//console.log(summary);

let desc = summary.current.weather[0].description;
//console.log(desc);
let temp = summary.current.temp;
//console.log(temp);
let humid = summary.current.humidity;
//console.log(humid);

//display current weather summary report
document.getElementById('weather-description').textContent = desc;
document.getElementById('current-temp').textContent = temp.toFixed(0);
document.getElementById('humidity').textContent = humid;

//display forecast of day temp for 3 days
//console.log(summary.daily.length);

let forecast = summary.daily.filter(time => summary.daily.length < 3);
console.log(forecast);

forecast.forEach(time => {
let day = 0;
const imagesrc = 'https://openweathermap.org/img/w/' + summary.daily.weather[0].icon + '.png';
document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);

})
  });
//const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';


/*document.getElementById('forecast-temp1').innerHTML = forecast[0].temp.day.toFixed(0) + '&deg; F';
document.getElementById('forecast-temp2').innerHTML = forecast[1].temp.day.toFixed(0) + '&deg; F';
document.getElementById('forecast-temp3').innerHTML = forecast[2].temp.day.toFixed(0) + '&deg; F';

let today = new Date();
let day = today.getDay();
let dayName = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

document.getElementById('day1').textContent = dayName[day];
document.getElementById('day2').textContent = dayName[day + 1];
document.getElementById('day3').textContent = dayName[day + 2];

let imagesrc1 = 'https://openweathermap.org/img/w/' + forecast[0].weather[0].icon + '.png';
let imagesrc2 = 'https://openweathermap.org/img/w/' + forecast[1].weather[0].icon + '.png';
let imagesrc3 = 'https://openweathermap.org/img/w/' + forecast[2].weather[0].icon + '.png';

document.getElementById('icon1').setAttribute('src', imagesrc1);
document.getElementById('icon2').setAttribute('src', imagesrc2);
document.getElementById('icon3').setAttribute('src', imagesrc3);
document.getElementById('icon1').setAttribute('alt', 'weather icon');
document.getElementById('icon2').setAttribute('alt', 'weather icon');
document.getElementById('icon3').setAttribute('alt', 'weather icon');*/

/*alert display

let alert = summary.alerts.description;

if (typeof alert != "undefined")
{
  alert(alert);
}

  });*/
    
