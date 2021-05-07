 /* ----------------------------------------------------*/
const cards = document.querySelectorAll('.card .inner-card h2');
const countDownDate = new Date('May 16, 2021 8:39:00').getTime();
/* ----------------------------------------------------*/
var myCounter = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    let 
        days = Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    /* ----------------------------------------------------*/
    cards[0].innerHTML =  days < 10  ? '0' + days : days;
    cards[1].innerHTML =  hours < 10  ? '0' + hours : hours;
    cards[2].innerHTML =  minutes < 10  ? '0' + minutes : minutes;
    cards[3].innerHTML =  seconds < 10  ? '0' + seconds : seconds;
}, 1000);
/* ----------------------------------------------------*/