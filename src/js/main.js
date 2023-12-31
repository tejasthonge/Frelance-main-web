//
// jquery
//

$(document).ready(function () {
  // work 불러오기
  if ($("body").hasClass("korea")) {
    $("#contents").load(
      "https://leesaewa.github.io/design_portfolio/work_list.html"
      // "../../work_list.html"
    );
  } else {
    $("#contents").load(
      "https://leesaewa.github.io/design_portfolio/ja/work_list.html"
    );
  }
});

//
// *********************************
//        vanilla javascript
// *********************************
//
// global nav
const body = document.querySelector("body");
const navBtn = document.querySelector(".hamburger-btn");
const globalnav = document.querySelector(".global-nav");

navBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!globalnav.classList.contains("global-nav--open")) {
    globalnav.classList.add("global-nav--open");
    navBtn.classList.add("hamburger-btn-open");
    body.style.overflowY = "hidden";
  } else {
    globalnav.classList.remove("global-nav--open");
    navBtn.classList.remove("hamburger-btn-open");
    body.style.overflowY = "auto";
  }
});

// ------

const slides = document.querySelectorAll(".slides li");
const numOfSlides = slides.length;
let currentSlideIndex = 0;
let autoPlay;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % numOfSlides;
  showSlide(currentSlideIndex);
}

function startAutoPlay() {
  autoPlay = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
  clearInterval(autoPlay);
}

showSlide(currentSlideIndex);
startAutoPlay();

//
// slider
//
// const slides = document.querySelectorAll(".slides li");
// const numOfSlide = slides.length;
// // console.log(slides.length)
// 
// function eventHandler() {
//   // let seqlSlide = numOfSlide
//   let randomSlides = Math.floor(Math.random() * numOfSlide);
// 
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//   });
// 
//   randomSlides++;
// 
//   if (randomSlides > numOfSlide - 1) {
//     randomSlides = 0;
//   }
// 
//   slides[randomSlides].classList.add("active");
//   // console.log("random", randomSlides);
// }
// 
// let autoPlay;
// let repeater = () => {
//   autoPlay = setInterval("eventHandler()", 2000);
// };

eventHandler();
repeater();
