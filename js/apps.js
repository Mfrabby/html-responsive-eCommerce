

// ............... ................. counter js ...........................
let dayItem = document.querySelector('#days');
let hoursItem = document.querySelector('#hours');
let minutesItem = document.querySelector('#minutes');
let secondsItem = document.querySelector('#seconds');

let countDown = () => {
    let futureDate = new Date("10 January 2023");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(myDate / 1000 / 60) % 60;
    let seconds = Math.floor(myDate / 1000) % 60;

    dayItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minutesItem.innerHTML = minutes;
    secondsItem.innerHTML = seconds;
}

countDown()

setInterval(countDown,1000)


