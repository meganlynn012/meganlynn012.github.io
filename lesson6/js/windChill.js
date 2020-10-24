let t = document.getElementById('high').innerHTML;
let s = document.getElementById('speed').innerHTML;
let chill = 35.74 + (.6215 * t) - (35.75 * (s ** .16)) + (.4275 * t * (s ** .16));

let digits = 0;
let rounder = Math.pow(10, digits);
chill = Math.round(chill * rounder) / rounder;

document.getElementById("windChill").innerHTML = chill;