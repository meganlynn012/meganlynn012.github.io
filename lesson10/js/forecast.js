/*var name = document.URL.split('/');
name = name[name.length-1];
//name="preston.html".split('.');
file = name;

console.log(file);
let id; 
switch(file) {
    case "sodasprings":
        id = "5607916"
        break;
    case "fishhaven":
        id = "5585010"
        break;
    case "preston":
        id = "5604473"
        break;
    default:
        id = "5604473"
        break;
}*/

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=4a0eddb5f22fe1857038e663b0dd6611`;


fetch(forecastURL)
  .then((response) => response.json())
  .then((five) => {
    console.log(five);

//filter the list array for forecast data at 6:00 pm
    const forecast = five.list.filter(time => time.dt_txt.includes('18:00:00'));
    console.log(forecast);

    
    //const desc = five.weather[0].description; 
    let day = 0;

    forecast.forEach(time => {  
        //console.log(time); 
    const imagesrc = 'https://openweathermap.org/img/w/' + time.weather[0].icon + '.png'; 
    
    const shortDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const d = new Date(time.dt_txt);

    document.getElementById(`day${day + 1}`).innerHTML = shortDay[d.getDay()];
    document.getElementById(`forecast-temp${day + 1}`).innerHTML = time.main.temp.toFixed(0) + '&deg; F';
    document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);
    //document.getElementById(`icon${day + 1}`).setAttribute('alt', desc);
        day++;
}) 

  });