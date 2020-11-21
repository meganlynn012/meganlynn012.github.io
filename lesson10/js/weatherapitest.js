const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=4a0eddb5f22fe1857038e663b0dd6611";
const shortDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    let temp = jsObject.main.temp;
    //let speed = jsObject.wind.speed;

    document.getElementById('current-temp').innerHTML = temp.toFixed(0);
    //document.getElementById('weather-description').textContent = desc;
    //document.getElementById('high-temp').textContent = jsObject.main.temp_max.toFixed(0);
    //document.getElementById('humidity').textContent = jsObject.main.humidity;
    //document.getElementById('speed').innerHTML = speed.toFixed(0);

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;

    

  }); 

/*var today = new Date().getDay()
for (let i = 0; i<5; i++) {
    document.getElementById("day"+(i+1)).innerHTML = days[(today+i)%days.length]
}*/