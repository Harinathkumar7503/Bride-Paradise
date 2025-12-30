
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
    })
})
   



   
   