// home page sliding author pictures
let slidingAuthor = 0;
showAuthor();

function showAuthor() {
  let i;
  let slides = document.getElementsByClassName("home-slides");
  let dots = document.getElementsByClassName("home-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slidingAuthor++;
  if (slidingAuthor > slides.length) {slidingAuthor = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" sliding-pictures", "");
  }
  slides[slidingAuthor-1].style.display = "block";  
  dots[slidingAuthor-1].className += " sliding-pictures";
  setTimeout(showAuthor, 4000); 
}

// home page sliding quotes
let slidingQuotes = 0;
showQuotes();

function showQuotes() {
  let i;
  let slides = document.getElementsByClassName("home-slides2");
  let dots = document.getElementsByClassName("home-dot2");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slidingQuotes++;
    if (slidingQuotes > slides.length) {slidingQuotes = 1}    
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" sliding-quotes", "");
  }
  slides[slidingQuotes-1].style.display = "block";  
  dots[slidingQuotes-1].className += " sliding-quotes";
  setTimeout(showQuotes, 4000);
}
