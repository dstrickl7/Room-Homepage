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
let didLoop = false;

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

const changeContent = () => {
  // console.log(didLoop);
  // if (didLoop == true) {
  //   topRight[j - 1].toggle("active");
  //   j = 0;
  //   topRight[j].toggle("active");
  //   j++;
  // } else if (j == 0 && didLoop == false) {
  //   console.log("j1: " + j);
  //   topRight[j].toggle("active");
  //   j++;
  //   console.log("j2: " + j);
  // } else if (j < topRight.length - 1) {
  //   console.log("j3: " + j);
  //   topRight[j - 1].toggle("active");
  //   j++;
  //   console.log("j4: " + j);
  //   topRight[j].toggle("active");
  // } else {
  //   console.log("j5: " + j);
  //   topRight[j].toggle("active");
  //   topRight[j - 1].toggle("active");
  //   didLoop = true;
  //   console.log("jlooped: " + j);
  // }
};
document.mainImg.src = images[0].src;
const nextImage = () => {
  document.mainImg.src = images[i].src;

  console.log("i: " + i);
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
};

const previousImage = () => {
  document.mainImg.src = images[i].src;
  console.log("i: " + i);
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1;
  }
};

const nextAll = () => {
  nextImage();
  changeContent();
};

const previousAll = () => {
  previousImage();
  changeContent();
};

leftArrow.addEventListener("click", previousAll);
rightArrow.addEventListener("click", nextAll);
