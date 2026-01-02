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




// slider
const prev = document.getElementById("pre");
const next = document.getElementById("next");
const sliderTrack = document.getElementById("sliderTrack");

let index = 0;
const totalSlides = 2;

next.addEventListener("click", () => {
  index++;
  if (index >= totalSlides) {
    index = 0;
  }
  sliderTrack.style.transform = `translateX(-${index * 100}%)`;
});

prev.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = totalSlides - 1;
  }
  sliderTrack.style.transform = `translateX(-${index * 100}%)`;
});

 
// Audio

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const volumeBtn = document.getElementById("volumeBtn");
const counter = document.getElementById("counter");
const totalminits = document.getElementById("totalminits");
const low = document.getElementById("low");

const duration = 171; // 02:51 

function formatTime(seconds){
    seconds = Math.floor(seconds);
    let min = String(Math.floor(seconds / 60)).padStart(2, "0");
    let sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
}



// update counter & progress
audio.addEventListener("timeupdate", () => {

    let current = Math.min(audio.currentTime, duration);

    counter.textContent = formatTime(current);

    let progress = (current / duration) * 100;
    low.style.width = progress + "%";

    // stop audio
    if (audio.currentTime >= duration) {
        audio.pause();
        audio.currentTime = duration;
        playBtn.classList.replace("fa-pause", "fa-play");
    }
});

// play / pause
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.classList.replace("fa-play", "fa-pause");
    } else {
        audio.pause();
        playBtn.classList.replace("fa-pause", "fa-play");
    }
});

// mute / unmute
volumeBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;

    if (audio.muted) {
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    } else {
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    }
});
// reset when ended (manual or natural)
audio.addEventListener("ended", () => {
    playBtn.classList.replace("fa-pause", "fa-play");
    low.style.width = "0%";
    counter.textContent = "00:00";
});


//   top arrow
      
const button= document.getElementById("Scroll");


window.addEventListener("scroll",()=>{
      if(window.scrollY > 150)
      {
        button.style.display="block";
      }
      else{
         button.style.display="none";
      }
}) ;

button.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
         behavior: "smooth"
 }) ;
 }) ;