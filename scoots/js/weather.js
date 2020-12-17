const alertURL = `https://api.openweathermap.org/data/2.5/onecall?lat=20.5072&lon=-86.9446&appid=4a0eddb5f22fe1857038e663b0dd6611`;

fetch(apiURL)
  .then((response) => response.json())
  .then((summary) => {
console.log(summary);


  });
    
