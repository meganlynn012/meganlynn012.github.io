let dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedesday",
    "Thursday",
    "Friday",
    "Saturday"    
];

let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let weekDay = dayName[d.getDay()];
let monthName = month[d.getMonth()];

let fullDate = weekDay + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();

document.getElementById('currentDate').innerHTML = fullDate;
