import buildHomeDiv from './home.js';
import buildAboutDiv from './about.js';
import buildMenuDiv from './menu.js';

const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const menuBtn = document.querySelector(".menu");

window.addEventListener("load", () => {
  buildHomeDiv();
});

homeBtn.addEventListener("click", () => {
  buildHomeDiv();
});

aboutBtn.addEventListener("click", () => {
  buildAboutDiv();
});

menuBtn.addEventListener("click", () => {
  buildMenuDiv();
});
