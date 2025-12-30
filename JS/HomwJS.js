

const menu = document.getElementById("menu");
const headerImage = document.getElementById("headerImage");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 150) {
     menu.style.opacity="0";
   
    headerImage.src = "Source/logo_retina_2.png";
  } else {
     menu.style.opacity="1";
    
    headerImage.src = "Source/logo_retina.png";
  }
});


headerImage.addEventListener("mouseenter", () => {
   menu.style.opacity="1";
    
});

menu.addEventListener("mouseleave", () => {
  if (window.scrollY >= 150) {
    menu.style.opacity="0";
  
  }
});

headerImage.addEventListener("click",()=>{
    window.location="http:index.html";
});


//silder

const slider = document.getElementById("Herosection");
const imageWidth = 310;
const totalImages = 9;
const offset = imageWidth / 2;

let index = 0;

// NEXT
document.querySelector(".next").onclick = () => {
  index++;

  if(index >= totalImages){
    index = 0;
  }

  slider.style.transform =
    `translateX(${-(index * imageWidth) + offset}px)`;
};

// PREV
document.querySelector(".prev").onclick = () => {
  index--;

  if(index < 0){
    index = totalImages - 1;
  }

  slider.style.transform =
    `translateX(${-(index * imageWidth) + offset}px)`;
};




/* ===== IMAGE POPUP ===== */

/* real images only */
const popupImages = [
  "Source/img_slide_01.jpeg",
  "Source/img_slide_02.jpeg",
  "Source/img_slide_03.jpeg",
  "Source/img_slide_04.jpeg",
  "Source/img_slide_05.jpeg",
  "Source/img_slide_06.jpeg",
  "Source/img_slide_07.jpeg",
  "Source/img_slide_08.jpeg",
  "Source/img_slide_09.jpeg"
];

const slides = document.querySelectorAll(".slide img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const sideNext = document.querySelector(".lb-next");
const sidePrev = document.querySelector(".lb-prev");
const bottomNext = document.querySelector(".bottom-next");
const bottomPrev = document.querySelector(".bottom-prev");
const closeBtn = document.querySelector(".close");

const currentText = document.getElementById("current");
const totalText = document.getElementById("total");

let currentIndex = 0;


totalText.textContent = popupImages.length;


slides.forEach((img) => {
  img.addEventListener("click", () => {

  
    const src = img.getAttribute("src");
    currentIndex = popupImages.indexOf(src);

    if(currentIndex === -1) return;

    updatePopup();
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
  });
});


function updatePopup(){
  lightboxImg.src = popupImages[currentIndex];
  currentText.textContent = currentIndex + 1;
}


function nextImg(){
  currentIndex = (currentIndex + 1) % popupImages.length;
  updatePopup();
}


function prevImg(){
  currentIndex = (currentIndex - 1 + popupImages.length) % popupImages.length;
  updatePopup();
}


sideNext.onclick = nextImg;
sidePrev.onclick = prevImg;
bottomNext.onclick = nextImg;
bottomPrev.onclick = prevImg;


closeBtn.onclick = closePopup;
lightbox.onclick = (e)=>{
  if(e.target === lightbox) closePopup();
};

function closePopup(){
  lightbox.classList.remove("show");
  document.body.style.overflow = "";
}
