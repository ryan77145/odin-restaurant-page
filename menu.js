/*//select elements
const menuDiv = document.querySelector("#menu");
const homeBtn = document.querySelector(".menu");

//create imgs/icons
const tacoImg = document.createElement("img");
tacoImg.src = "/assets/taco.png";
const shrimpImg = document.createElement("img");
shrimpImg.src = "/assets/shrimp.png";
const chickenImg = document.createElement("img");
chickenImg.src = "/assets/chicken.png";

//create elements
const title = document.createElement("h1");
const subtitle = document.createElement("p");
const menuContainer = document.createElement("div");
const itemTitle = document.createElement("p");
const itemTitle2 = document.createElement("p");
const itemTitle3 = document.createElement("p");
const itemTitle4 = document.createElement("p");
const itemTitle5 = document.createElement("p");
const itemInfo = document.createElement("p");
const itemInfo2 = document.createElement("p");
const itemInfo3 = document.createElement("p");
const itemInfo4 = document.createElement("p");
const itemInfo5 = document.createElement("p");
const itemPrice = document.createElement("span")

//set attributes
title.setAttribute("class", "menuTitle");
subtitle.setAttribute("class", "menuSubtitle");
menuContainer.setAttribute("class", "menuContainer");
itemTitle.setAttribute("class", "itemTitle");
itemTitle2.setAttribute("class", "itemTitle2");
itemTitle3.setAttribute("class", "itemTitle3");
itemTitle4.setAttribute("class", "itemTitle4");
itemTitle5.setAttribute("class", "itemTitle5");
tacoImg.setAttribute("class", "tacoImg");
chickenImg.setAttribute("class", "chickenImg");
shrimpImg.setAttribute("class", "shrimpImg");

//add content
title.textContent = "Tacos Everyday";
subtitle.textContent = "Tacos. Tacos. And more tacos!";
subtext.textContent = "All tacos, all the time. Come and get 'em!";
subtext2.textContent =
  "Whatcha craving? Shrimp tacos? Chicken tacos? Pork Tacos? Street Tacos? Regular Tacos? None? Create your own!";
summary.textContent =
  "Here at Tacos Everyday we believe tacos should be eaten everyday! No need to wait for Taco Tuesday any longer! We always use the freshest ingredients and the best meats to make sure your tacos are always delicious!";

//append
menuDiv.appendChild(title);
menuDiv.appendChild(subtitle);
menuDiv.appendChild(subtextContainer);
menuDiv.appendChild(summary);
subtextContainer.appendChild(subtext);
subtextContainer.appendChild(subtext2);

/*homeBtn.addEventListener("click", () => {
  menuDiv.classList.toggle("active");
});*/
