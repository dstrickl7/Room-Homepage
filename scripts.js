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
const topRight1 = document.querySelector(".topRight1").classList;
const topRight2 = document.querySelector(".topRight2").classList;
const topRight3 = document.querySelector(".topRight3").classList;
let i = 0;
let j = 0;

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
if (document.documentElement.clientWidth <= 600) {
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

let topRight = [topRight1, topRight2, topRight3];

topRight[j].toggle("active");
const nextContent = () => {
  topRight[j].toggle("active");
  if (j < topRight.length - 1) {
    j++;
    topRight[j].toggle("active");
  } else {
    j = 0;
    topRight[j].toggle("active");
  }
};

const prevContent = () => {
  topRight[j].toggle("active");
  if (j > 0) {
    j--;
    topRight[j].toggle("active");
  } else {
    j = topRight.length - 1;
    topRight[j].toggle("active");
  }
};

document.mainImg.src = images[i].src;

const nextImage = () => {
  if (i < images.length - 1) {
    i++;
    document.mainImg.src = images[i].src;
  } else {
    i = 0;
    document.mainImg.src = images[i].src;
  }
};

const prevImage = () => {
  if (i > 0) {
    i--;
    document.mainImg.src = images[i].src;
  } else {
    i = images.length - 1;
    document.mainImg.src = images[i].src;
  }
};

const nextAll = () => {
  nextImage();
  nextContent();
};

const prevAll = () => {
  prevImage();
  prevContent();
};

leftArrow.addEventListener("click", prevAll);
rightArrow.addEventListener("click", nextAll);
