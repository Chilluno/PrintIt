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

const ArrLLog = () => console.log("left arrow clicked!");
const ArrRLog = () => console.log("right arrow clicked!");
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");

arrowLeft.addEventListener("click", ArrLLog);
arrowRight.addEventListener("click", ArrRLog);

for (let i = 0; i < slides.length; i++) {
  const dot_div = document.createElement("div");
  const dot_att = document.createAttribute("class");
  dot_att.value = "dot";

  dot_div.setAttributeNode(dot_att);

  const dots = document.querySelector(".dots");
  dots.appendChild(dot_div);
}
