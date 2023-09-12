let navbar = document.querySelector(".navbar");
let section2 = document.querySelector(".section2");
let section1 = document.querySelector(".section1");
// let test = document.querySelector(".rec h1");
// console.log(test);
let recs = Array.prototype.slice.call(document.querySelectorAll(".rec h1"));
console.log(section2);
console.log(navbar);
// for (i = 0; i < counterValues.length; i++) {
//   console.log(counterValues[i].innerHTML);
// }

let incrementArr = [];
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
      // incrementArr.push(0);
      incrementArr[i]++;
      recs[i].innerHTML = incrementArr[i];
    }
  }
}

let timer = 0;

window.addEventListener("scroll", function () {
  // let otop = section2.getBoundingClientRect().y - window.pageYOffset;
  // console.log(otop);
  // console.log(window.pageYOffset);
  //   if(window.top)
  // console.log($(".section2"));
  // console.log($(".section2").offset().top);
  // console.log(window.scrollY);
  // console.log(section2.offsetTop);
  // console.log(window.innerHeight);
  // let dTop = section2.offsetTop - window.innerHeight;
  // console.log(dTop);
  // if (this.window.scrollY > dTop) {
  //   navbar.classList.add("sticky");
  // } else {
  //   navbar.classList.remove("sticky");
  // }

  if (window.scrollY > section1.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  // console.log("number top = ", numberSecTop);
  // console.log("number bottom =", numberSecBottom);
  // console.log("window top = ", windowTop);
  // console.log("window bottom = ", windowBottom);
  // console.log(windowBottom > numberSecTop && windowTop < numberSecBottom);

  var timer = setInterval(() => {
    let numberSecTop = section2.offsetTop;
    let numberSecBottom = numberSecTop + section2.clientHeight;
    let windowTop = window.scrollY;
    let windowBottom = windowTop + innerHeight;
    if (windowBottom > numberSecTop && windowTop < numberSecBottom) {
      console.log("starting", timer);
      counter();
    } else {
      clearInterval(timer);
      console.log("clearing", timer);
      initializeIncrementArray();
    }
  }, 100);

  // if (windowBottom > numberSecTop && windowTop < numberSecBottom) {
  //   timer = setInterval(() => {
  //     counter();
  //   }, 1000);
  //   console.log(timer);
  // } else {
  //   clearInterval(timer);
  //   console.log(timer);
  //   initializeIncrementArray();
  // }
});
