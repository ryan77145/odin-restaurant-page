import taco from './taco.png'
import chicken from './chicken.png'
import shrimp from './shrimp.png'

const creatHome = (() => {
  //import images

  //select elements
  const contentDiv = document.querySelector("#content");

  //create imgs/icons
  const tacoImg = document.createElement("img");
  tacoImg.src = taco;
  const shrimpImg = document.createElement("img");
  shrimpImg.src = shrimp;
  const chickenImg = document.createElement("img");
  chickenImg.src = chicken;

  //create elements
  const title = document.createElement("h1");
  const subtitle = document.createElement("p");
  const subtextContainer = document.createElement("div");
  const subtext = document.createElement("p");
  const subtext2 = document.createElement("p");

  //set attributes
  title.setAttribute("class", "title");
  subtitle.setAttribute("class", "title");
  subtextContainer.setAttribute("class", "subDiv");
  subtext.setAttribute("class", "subtext");
  subtext2.setAttribute("class", "subtext2");
  tacoImg.setAttribute("class", "tacoImg");
  chickenImg.setAttribute("class", "chickenImg");
  shrimpImg.setAttribute("class", "shrimpImg");

  //add content
  title.textContent = "Tacos Everyday";
  subtitle.textContent = "Tacos. Tacos. And more tacos!";
  subtext.textContent = "All tacos, all the time. Come and get 'em!";
  subtext2.textContent = "Whatcha craving? Shrimp tacos? Chicken tacos? Pork Tacos? Street Tacos? Regular Tacos? None? Create your own!"

  //append
  contentDiv.appendChild(title);
  contentDiv.appendChild(subtitle);
  contentDiv.appendChild(subtextContainer);
  subtextContainer.appendChild(subtext);
  subtextContainer.appendChild(subtext2);
})();
