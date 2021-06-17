const navList = document.getElementById("nav-bar").classList;
const hamburger = document.querySelector(".hamburger");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const topLeftImg = document.querySelector(".top-left-img");
const content = document.querySelectorAll(".top-right");
const body = document.getElementById("body");
const logo = document.querySelector(".logo").classList;
const close = document.querySelector(".close");
const navContainer = document.querySelector(".nav-container").classList;
const overlay = document.querySelector(".overlay").classList;
let i = 1;

hamburger.addEventListener("click", () => {
  navList.toggle("active");
  close.classList.toggle("active");
  hamburger.classList.toggle("active");
  logo.toggle("active");
  navContainer.toggle("active");
  overlay.toggle("active");
});

close.addEventListener("click", () => {
  navList.toggle("active");
  close.classList.toggle("active");
  hamburger.classList.toggle("active");
  logo.toggle("active");
  navContainer.toggle("active");
  overlay.toggle("active");
});

images = new Array();
if (window.clientWidth <= 600 + "px") {
  images[0] = new Image();
  images[0].src = "images/mobile-image-hero-1.jpg";
  images[1] = new Image();
  images[1].src = "images/mobile-image-hero-2.jpg";
  images[2] = new Image();
  images[2].src = "images/mobile-image-hero-3.jpg";
} else {
  images[0] = new Image();
  images[0].src = "images/desktop-image-hero-1.jpg";
  images[1] = new Image();
  images[1].src = "images/desktop-image-hero-2.jpg";
  images[2] = new Image();
  images[2].src = "images/desktop-image-hero-3.jpg";
}

const topRight = ["topRight1", "topRight2", "topRight3"];
const changeImage = () => {
  document.mainImg.src = images[i].src;
  topRight.id = topRight[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
};

leftArrow.addEventListener("click", changeImage);
rightArrow.addEventListener("click", changeImage);
