const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  const towns = jsonObject['towns'];
  let three = towns.filter(town => (town.name == "Preston" || town.name == "Fish Haven" || town.name == "Soda Springs"));
    //console.table(jsonObject); temporary checking for valid response and data parsing
 
    three.forEach(town =>{
    
    let card = document.createElement('div');
    let h2 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let image = document.createElement('img');    

h2.innerHTML = `${town.name}`;
p1.innerHTML = `${town.motto}`;
p2.innerHTML = `Year Founded: ${town.yearFounded}`;
p3.innerHTML = `Population: ${town.currentPopulation}`;
p4.innerHTML = `Annual Rainfall: ${town.averageRainfall}`;
if (town.name == "Preston"){
  image.setAttribute('src', 'images/preston-barn300.jpg')}
  else if (town.name == "Soda Springs"){
      image.setAttribute('src', 'images/sodasprings-barn300.jpg')
  }
  else {
      image.setAttribute('src', 'images/fishhaven-barn300.jpg')
  };
image.setAttribute('alt', 'Town image');
card.setAttribute('class', "card");


card.appendChild(h2);
card.appendChild(p1);
card.appendChild(p2);
card.appendChild(p3);
card.appendChild(p4);
card.appendChild(image);


document.querySelector('section.town-info').appendChild(card);
  });
});