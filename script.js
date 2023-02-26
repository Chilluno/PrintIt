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

const bannerElement = document.getElementById("banner").children[1];


const htmlSlide = document
  .getElementById("banner")
  .getElementsByClassName("banner-img")[0];

let slideCounter = 0;

function prevSlide() {
 
  if (slideCounter <= 0) {
    slideCounter = slides.length;
  }

  slideCounter = slideCounter - 1;

  htmlSlide.src = "./assets/images/slideshow/" + images[slideCounter];
  bannerElement.innerHTML = text[slideCounter];
}

console.log(bannerElement.children[1]);

function nextSlide() {
  slideCounter = slideCounter + 1;
  if (slideCounter >= slides.length) {
    slideCounter = 0;
  }

  htmlSlide.src = "./assets/images/slideshow/" + images[slideCounter];
  bannerElement.innerHTML = text[slideCounter];
}

arrowLeft.addEventListener("click", prevSlide);
arrowRight.addEventListener("click", nextSlide);

for (let i = 0; i < slides.length; i++) {
  const dots = document.querySelector(".dots");
  const dotDiv = document.createElement("div");
  dotDiv.classList.add("dot");
  if (i == slideCounter) {
    dotDiv.classList.add("dot", "dot_selected");
  }
  dots.appendChild(dotDiv);
  console.log(slideCounter);
}
