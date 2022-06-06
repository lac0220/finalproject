/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/random_quotes.js":
/*!*********************************!*\
  !*** ./src/js/random_quotes.js ***!
  \*********************************/
/***/ (() => {

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

const myInterval = setInterval(randomQuote, 4000);
randomQuote();

/***/ }),

/***/ "./src/js/sliding_elements.js":
/*!************************************!*\
  !*** ./src/js/sliding_elements.js ***!
  \************************************/
/***/ (() => {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sliding_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliding_elements */ "./src/js/sliding_elements.js");
/* harmony import */ var _sliding_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sliding_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _random_quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random_quotes */ "./src/js/random_quotes.js");
/* harmony import */ var _random_quotes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_random_quotes__WEBPACK_IMPORTED_MODULE_1__);










})();

/******/ })()
;
//# sourceMappingURL=script.js.map