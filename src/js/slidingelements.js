// home page sliding author pictures
let slideIndex = 0;
showSlides2();

function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("home__slides");
  let dots = document.getElementsByClassName("home__slides__dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" sliding__pictures", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " sliding__pictures";
  setTimeout(showSlides2, 4000); 
}

// home page sliding quotes
let sliding = 0;
showSlides(sliding);

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("home__slides2");
  let dots = document.getElementsByClassName("home__slides__dot2");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  sliding++;
    if (sliding > slides.length) {sliding = 1}    
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" selected", "");
  }
  slides[sliding-1].style.display = "block";  
  dots[sliding-1].className += " selected";
  setTimeout(showSlides, 4000);
}
