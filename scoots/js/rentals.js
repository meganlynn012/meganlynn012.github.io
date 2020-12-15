const rentalFile = `json/rentals.json`;

fetch(rentalFile)
  .then((response) => response.json())
  .then((scootData) => {

console.log(scootData);
  });