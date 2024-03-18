

// menu toggle button
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-bars-staggered"
    : "fa-solid fa-bars"
}


// countdown
var countDownDate = new Date("April 27, 2024 10:00:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML = "We are <br>" + days + "d " + hours + "h "  + minutes + "m " + seconds + "s " + "<br> to go!";

if (distance < 0) {
  clearInterval(x);
  document.getElementById("demo").innerHTML = "Countdown Over!";
}
}, 1000);

