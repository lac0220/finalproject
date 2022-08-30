/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/

// home page randome quotes
const randomQuote = async () => {
    const url ="https://type.fit/api/quotes";    
    const response = await fetch(url);
    console.log(typeof response);
    const allQuotes = await response.json();
  
    const text = document.getElementById("quote");
    const author = document.getElementById("author");
  
    //random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);
  
    //storing at randomly generated index
    let quote = allQuotes[indx].text;
    let auth = allQuotes[indx].author;
  
    if (auth == null) {
        auth = "Anonymous author";
    }
  
    //displaying
    text.innerHTML = "\"" + quote + "\"";
    author.innerHTML = "- " + auth;
}
  
  setInterval(randomQuote, 5000);
  randomQuote();


// home page sliding author pictures
let slidingAuthor = 0;
showAuthor();

function showAuthor() {
    let i;
    let slides = document.getElementsByClassName("home-slides__img");
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
    setTimeout(showAuthor, 5000); 
}

// home page sliding quotes
let slidingQuotes = 0;
showQuotes();

function showQuotes() {
    let i;
    let slides = document.getElementsByClassName("home-slides__quote");
    let dots = document.getElementsByClassName("home-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slidingQuotes++;
        if (slidingQuotes > slides.length) {slidingQuotes = 1}    
    for (i = 0; i < dots.length; i++) {
        // set SCSS class
        dots[i].className = dots[i].className.replace(" sliding-quotes", "");   
    }
    slides[slidingQuotes-1].style.display = "block";  
    dots[slidingQuotes-1].className += " sliding-quotes";
    setTimeout(showQuotes, 5000);
}

/******/ })()
;
//# sourceMappingURL=script.js.map