//select elements
const contentDiv = document.querySelector("#content");

//create elements
const title = document.createElement("h1");
const subtitle = document.createElement("p");
const subtextContainer = document.createElement("div");
const subtext = document.createElement("p");
const subtext2 = document.createElement("p");
const summary = document.createElement("p");

//set attributes
title.setAttribute("class", "title");
subtitle.setAttribute("class", "subtitle");
subtextContainer.setAttribute("class", "subDiv");
subtext.setAttribute("class", "subtext");
subtext2.setAttribute("class", "subtext2");
summary.setAttribute("class", "summary");

//add content
title.textContent = "Tacos Everyday";
subtitle.textContent = "Tacos. Tacos. And more tacos!";
subtext.textContent = "All tacos, all the time. Come and get 'em!";
subtext2.textContent =
  "Whatcha craving? Shrimp tacos? Chicken tacos? Pork Tacos? Street Tacos? Regular Tacos? None? Create your own!";
summary.textContent =
  "Here at Tacos Everyday we believe tacos should be eaten everyday! No need to wait for Taco Tuesday any longer! We always use the freshest ingredients and the best meats to make sure your tacos are always delicious!";

//append
contentDiv.appendChild(title);
contentDiv.appendChild(subtitle);
contentDiv.appendChild(subtextContainer);
contentDiv.appendChild(summary);
subtextContainer.appendChild(subtext);
subtextContainer.appendChild(subtext2);

/*homeBtn.addEventListener("click", () => {
  contentDiv.classList.toggle("active");
});*/
