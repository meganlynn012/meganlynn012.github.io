let t = document.getElementById('high').value;
let s = document.getElementById('speed').value;
let chill = 35.74 + (.6215 * t) - (35.75 * (s ** .16)) + (.4275 * t * (s ** .16));
document.getElementById("windChill").innerHTML = chill;
