// COIN FLIP SIMULATOR
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var tracker1 = document.getElementById("Counter1");
var tracker2 = document.getElementById("Counter2");

var heads = 0;
var tails = 0;

var one = 0;
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;

btn1.addEventListener("click", Flip);
btn2.addEventListener("click", Roll);

function Flip() {
  var num = Math.round(Math.random());

  if (num >= 0.5) {
    img1.src = "img/heads.png";
    heads = heads + 1;
  } else if (num < 0.5) {
    img1.src = "img/tails.png";
    tails = tails + 1;
  }
  tracker1.innerHTML = `Heads:${heads} Tails:${tails}`;
}

function Roll() {
  var num = Math.round(Math.random() * 6);

  if (num >= 6) {
    img2.src = "img/6.png";
    six = six + 1;
  } else if (num >= 5) {
    img2.src = "img/5.png";
    five = five + 1;
  } else if (num >= 4) {
    img2.src = "img/4.png";
    four = four + 1;
  } else if (num >= 3) {
    img2.src = "img/3.png";
    three = three + 1;
  } else if (num >= 2) {
    img2.src = "img/2.png";
    two = two + 1;
  } else if (num >= 1) {
    img2.src = "img/1.png";
    one = one + 1;
  }
  tracker2.innerHTML = `One:${one} Two:${two} Three:${three} Four:${four} Five:${five} Six:${six}`;
}
