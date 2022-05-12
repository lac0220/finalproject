// home page sliding author pictures
let slidingAuthor = 0;
showAuthor();

function showAuthor() {
  let i;
  let slides = document.getElementsByClassName("home__slides");
  let dots = document.getElementsByClassName("home__slides__dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slidingAuthor++;
  if (slidingAuthor > slides.length) {slidingAuthor = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" sliding__pictures", "");
  }
  slides[slidingAuthor-1].style.display = "block";  
  dots[slidingAuthor-1].className += " sliding__pictures";
  setTimeout(showAuthor, 4000); 
}

// home page sliding quotes
let slidingQuotes = 0;
showQuotes();

function showQuotes() {
  let i;
  let slides = document.getElementsByClassName("home__slides2");
  let dots = document.getElementsByClassName("home__slides__dot2");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slidingQuotes++;
    if (slidingQuotes > slides.length) {slidingQuotes = 1}    
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" sliding__quotes", "");
  }
  slides[slidingQuotes-1].style.display = "block";  
  dots[slidingQuotes-1].className += " sliding__quotes";
  setTimeout(showQuotes, 4000);
}
