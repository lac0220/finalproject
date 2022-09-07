/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/

//loader-animation
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-animation");

    loader.classList.add("loader-animation-hidden");

    loader.addEventListener("transform", () => {
        document.body.removeChild("loader");
    })
}) 

 // hamburger menu open
 const navHamburger = document.querySelector(".navbar-hamburger__btn");
 const sideNav = document.querySelector("#side-nav");

 const mobileNavOpen = () => {
     sideNav.classList.toggle("active");
 }
 navHamburger.addEventListener("click", mobileNavOpen);

 // hamburger menu close
 const navClose = document.querySelector(".navbar-close__btn");

 const mobileNavClose = () => {
     sideNav.classList.remove("active");
 }
 navClose.addEventListener("click", mobileNavClose);

/******/ })()
;
//# sourceMappingURL=script.js.map