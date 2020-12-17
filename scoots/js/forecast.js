const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=4a0eddb5f22fe1857038e663b0dd6611`;

fetch(forecastURL)
    .then((response) => response.json())
    .then((five) => {
        //console.log(five);

        //filter the list array for forecast data at 6:00 pm
        const forecast = five.list.filter(time => time.dt_txt.includes('18:00:00'));
        //console.log(forecast);

        let day = 0;

        forecast.forEach(time => {
            //console.log(time); 
            const imagesrc = 'https://openweathermap.org/img/w/' + time.weather[0].icon + '.png';
            const desc = time.weather[0].description;

            const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const d = new Date(time.dt_txt);

            document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day + 1}`).setAttribute('alt', desc);
            //console.log(desc);
            day++;
        })

    });