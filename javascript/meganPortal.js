/*let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let now = new Date(document.lastModified);
let thisMonth = months[now.getMonth()];
let day = now.getDate();
let year = new Date().getFullYear();
let update = day.toString() + " " + thisMonth + " " + year.toString();
document.getElementById("update").innerHTML = update;

document.getElementById("currentYear").innerHTML = year;*/

window.onload = updateBox;

function updateBox(){
    let lastUpdate = "Last Updated: " + document.lastModified;
    let date = new Date().getFullYear();

    document.getElementById('year').innerHTML = date;
    document.getElementById('update').innerHTML = lastUpdate;
}



