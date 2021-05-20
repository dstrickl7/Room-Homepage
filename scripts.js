const navList =document.getElementById("nav-bar").classList;
const dropdown = document.querySelector(".dropdown");
const leftArrow =document.getElementById("left-arrow");
const rightArrow =document.getElementById("right-arrow");
const topLeftImg = document.querySelector(".top-left-img");
const content = document.querySelectorAll(".top-right");
let i=0;

dropdown.addEventListener("click", ()=>{
  navList.toggle("active");
})

images = new Array();
images[0]=new Image;
images[0].src="images/desktop-image-hero-1.jpg"
images[1]=new Image;
images[1].src="images/desktop-image-hero-2.jpg"
images[2]=new Image;
images[2].src="images/desktop-image-hero-3.jpg"


document.mainImg.src=images[i].src;
	


leftArrow.addEventListener("click", ()=>{
	document.mainImg.src=images[i].src;
	if(i < 0){
		i=0;
	}else{
		i--;
	}
	for(let j=1; j<=3; j++){

	}
})

rightArrow.addEventListener("click", ()=>{
	document.mainImg.src=images[i].src;
	if(i < images.length - 1){
		i++;
	}else{
		i=0;
	}
})
