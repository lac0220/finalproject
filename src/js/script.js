
// home page sliding quotes
var sliding = 0;
showSlides(sliding);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Slide");
  var dots = document.getElementsByClassName("Navdot");
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


// home page sliding author pictures
var slideIndex = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides_fade");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_sliding_pictures", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active_sliding_pictures";
  setTimeout(showSlides2, 4000); 
}





