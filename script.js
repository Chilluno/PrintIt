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
const bannerImage = document
  .getElementById("banner")
  .getElementsByClassName("banner-img")[0];
const dots = document.querySelector(".dots");

let slideIndex = 0;

slides.forEach(() => {
  const dots = document.querySelector(".dots");
  const dotDiv = document.createElement("div");
  dotDiv.classList.add("dot");
  dots.appendChild(dotDiv);
  dots.children[0].classList.add("dot_selected");
});

const fillNextDot = (slideIndex) => {
  dots.children[slideIndex].classList.add("dot_selected");
  if (slideIndex == 3) {
    dots.children[0].classList.remove("dot_selected");
  } else {
    dots.children[slideIndex + 1].classList.remove("dot_selected");
  }
};
const fillPreviousDot = (slideIndex) => {
  dots.children[slideIndex].classList.add("dot_selected");
  if (slideIndex == 0) {
    dots.children[slides.length - 1].classList.remove("dot_selected");
  } else {
    dots.children[slideIndex - 1].classList.remove("dot_selected");
  }
};

const toPrevSlide = () => {
  if (slideIndex <= 0) {
    slideIndex = slides.length;
  }

  slideIndex = slideIndex - 1;

  fillNextDot(slideIndex);
  bannerImage.src = "./assets/images/slideshow/" + images[slideIndex];
  bannerParagraph.innerHTML = text[slideIndex];
};

const toNextSlide = () => {
  slideIndex = slideIndex + 1;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  fillPreviousDot(slideIndex);
  bannerImage.src = "./assets/images/slideshow/" + images[slideIndex];
  bannerParagraph.innerHTML = text[slideIndex];
};

arrowLeft.addEventListener("click", toPrevSlide);
arrowRight.addEventListener("click", toNextSlide);
