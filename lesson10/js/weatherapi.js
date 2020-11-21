const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=4a0eddb5f22fe1857038e663b0dd6611";

fetch(apiURL)
  .then((response) => response.json())
  .then((summary) => {
    console.log(summary);

    let desc = summary.weather[0].description;
    let temp = summary.main.temp;
    let speed = summary.wind.speed;
    let windchill = windChill(temp, speed);

    //display current weather summary report
    document.getElementById('weather-description').textContent = desc;
    document.getElementById('current-temp').innerHTML = temp.toFixed(0);
    document.getElementById('windChill').innerHTML = windchill;
    document.getElementById('humidity').innerHTML = summary.main.humidity;
    document.getElementById('speed').innerHTML = speed.toFixed(0);

  });

