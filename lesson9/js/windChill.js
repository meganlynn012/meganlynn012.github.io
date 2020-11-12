//pull the temp and wind speed from the html
let t = document.getElementById('high').innerHTML;
let s = document.getElementById('speed').innerHTML;

//windchill formula
let chill = 35.74 + (.6215 * t) - (35.75 * (s ** .16)) + (.4275 * t * (s ** .16));

//round the result to the nearest whole number
let digits = 0;
let rounder = Math.pow(10, digits);
chill = Math.round(chill * rounder) / rounder;

//only display the result if the temp and windspeed meet requirements
if (t <= 50 && s > 3){
    document.getElementById("windChill").innerHTML = chill;
}
else{
    document.getElementById("windChill").innerHTML = "N/A";
}