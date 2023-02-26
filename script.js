const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");

const images = slides.map((slide) => slide.image);
const text = slides.map((slide) => slide.tagLine);

const bannerParagraph = document.getElementById("banner").children[1];
const dots = document.querySelector(".dots");

const htmlSlide = document
  .getElementById("banner")
  .getElementsByClassName("banner-img")[0];

let slideCounter = 0;

function prevSlide() {
  if (slideCounter <= 0) {
    slideCounter = slides.length;
  }
  let nextDot = slideCounter;
  slideCounter = slideCounter - 1;

  htmlSlide.src = "./assets/images/slideshow/" + images[slideCounter];
  bannerParagraph.innerHTML = text[slideCounter];

  dots.children[slideCounter].classList.add("dot_selected");
  console.log(slideCounter);

  if (slideCounter == 3) {
    dots.children[0].classList.remove("dot_selected");
  } else {
    dots.children[nextDot].classList.remove("dot_selected");
  }
  console.log(nextDot);
}

function nextSlide() {
  slideCounter = slideCounter + 1;
  let prevDot = slideCounter - 1;
  if (slideCounter >= slides.length) {
    slideCounter = 0;
  }

  htmlSlide.src = "./assets/images/slideshow/" + images[slideCounter];
  bannerParagraph.innerHTML = text[slideCounter];

  dots.children[slideCounter].classList.add("dot_selected");
  console.log(slideCounter);
  dots.children[prevDot].classList.remove("dot_selected");
  console.log(prevDot);
}

arrowLeft.addEventListener("click", prevSlide);
arrowRight.addEventListener("click", nextSlide);

for (let i = 0; i < slides.length; i++) {
  const dots = document.querySelector(".dots");
  const dotDiv = document.createElement("div");
  dotDiv.classList.add("dot");
  dots.appendChild(dotDiv);
  dots.children[0].classList.add("dot_selected");
}
