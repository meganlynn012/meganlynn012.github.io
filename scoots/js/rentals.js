const rentalFile = `https://meganlynn012.github.io/scoots/json/rentals.json`;

fetch(rentalFile)
  .then((response) => response.json())
  .then((scootData) => {

//console.log(scootData.rentals[0]);


const rentals = scootData.rentals;
//console.log(rentals);

let i;
for (i = 0; i < rentals.length; i++) {
  let type = rentals[i].type;
  //console.log(type);
  let max = rentals[i].capacity;
  let rhalf = '$' + rentals[i].reservationHalf;
  let rfull = '$' + rentals[i].reservationFull;
  let whalf = '$' + rentals[i].walkHalf;
  let wfull = '$' + rentals[i].walkFull;

  let tableCol = '</td><td>';
  let tableHead = '</th><th>';

  document.getElementById("rentJson").innerHTML += (
`<tr><td>
${type}${tableCol}${max}${tableCol}${rhalf}${tableCol}${rfull}${tableCol}${whalf}${tableCol}${wfull}
</td></tr>`
);
  
}
  });
