let navbar = document.querySelector(".navbar");
let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");
let recs = Array.prototype.slice.call(document.querySelectorAll(".rec h1"));
let incrementArr = [];
let timer;

function initializeIncrementArray() {
  incrementArr = [];
  for (i = 0; i < recs.length; i++) {
    incrementArr.push(0);
    recs[i].innerHTML = "0";
  }
}

function counter() {
  for (i = 0; i < recs.length; i++) {
    if (incrementArr[i] < recs[i].getAttribute("max-data")) {
      incrementArr[i]++;
      recs[i].innerHTML = incrementArr[i];
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initializeIncrementArray();
});

window.addEventListener("scroll", () => {
  if (window.scrollY > section1.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  let numberSecTop = section2.offsetTop;
  let numberSecBottom = numberSecTop + section2.clientHeight;
  let windowTop = window.scrollY;
  let windowBottom = windowTop + innerHeight;
  if (windowBottom > numberSecTop && windowTop < numberSecBottom) {
    if (timer == undefined) {
      console.log("entered");
      timer = setInterval(() => {
        console.log("starting", timer);
        counter();
      }, 1);
    }
  } else {
    if (timer != undefined) {
      console.log("stopping", timer);
      clearInterval(timer);
      initializeIncrementArray();
      timer = undefined;
    }
  }
});
