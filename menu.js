//create imgs/icons
const tacoImg = document.createElement("img");
tacoImg.src = "/assets/taco.png";
const shrimpImg = document.createElement("img");
shrimpImg.src = "/assets/shrimp.png";
const chickenImg = document.createElement("img");
chickenImg.src = "/assets/chicken.png";

//create elements
const menuDiv = document.createElement("div");
const menuPageTitle = document.createElement("h1");
const menuSubtitle = document.createElement("p");
const menuContainer = document.createElement("div");
const menuTitle = document.createElement("p");
const itemTitle = document.createElement("p");
const itemTitle2 = document.createElement("p");
const itemTitle3 = document.createElement("p");
const itemTitle4 = document.createElement("p");
const itemTitle5 = document.createElement("p");
const itemTitle6 = document.createElement("p");
const itemInfo = document.createElement("p");
const itemInfo2 = document.createElement("p");
const itemInfo3 = document.createElement("p");
const itemInfo4 = document.createElement("p");
const itemInfo5 = document.createElement("p");
const itemInfo6 = document.createElement("p");
const itemPrice = document.createElement("span");
const itemPrice2 = document.createElement("span");
const itemPrice3 = document.createElement("span");
const itemPrice4 = document.createElement("span");
const itemPrice5 = document.createElement("span");
const itemPrice6 = document.createElement("span");

//set attributes
menuDiv.setAttribute("id", "menuDiv");
menuPageTitle.setAttribute("class", "menuTitle");
menuSubtitle.setAttribute("class", "menuSubtitle");
menuContainer.setAttribute("class", "menuContainer");
menuTitle.setAttribute("class", "menuTitle");
itemTitle.setAttribute("class", "itemTitle");
itemTitle2.setAttribute("class", "itemTitle2");
itemTitle3.setAttribute("class", "itemTitle3");
itemTitle4.setAttribute("class", "itemTitle4");
itemTitle5.setAttribute("class", "itemTitle5");
itemTitle6.setAttribute("class", "itemTitle6");
itemInfo.setAttribute("class", "itemInfo");
itemInfo2.setAttribute("class", "itemInfo2");
itemInfo3.setAttribute("class", "itemInfo3");
itemInfo4.setAttribute("class", "itemInfo4");
itemInfo5.setAttribute("class", "itemInfo5");
itemInfo6.setAttribute("class", "itemInfo6");
itemPrice.setAttribute("class", "itemPrice");
itemPrice2.setAttribute("class", "itemPrice2");
itemPrice3.setAttribute("class", "itemPrice3");
itemPrice4.setAttribute("class", "itemPrice4");
itemPrice5.setAttribute("class", "itemPrice5");
itemPrice6.setAttribute("class", "itemPrice6");
tacoImg.setAttribute("class", "tacoImg");
chickenImg.setAttribute("class", "chickenImg");
shrimpImg.setAttribute("class", "shrimpImg");

//add content
menuPageTitle.textContent = "Tacos Everyday";
menuSubtitle.textContent = "Tacos. Tacos. And more tacos!";
menuTitle.textContent =  "Menu: ";
itemTitle.textContent = "Shrimp Tacos";
itemTitle2.textContent = "Chicken Tacos";
itemTitle3.textContent = "Pork Tacos";
itemTitle4.textContent = "Street Tacos";
itemTitle5.textContent = "Regular Tacos";
itemTitle6.textContent = "Create Your Own Tacos - think subway, but with tacos!";
itemInfo.textContent = "Shrimp tacos are made with fresh shrimp, lettuce, and our special sauce.";
itemInfo2.textContent = "Chicken tacos are made with tender chicken, lettuce, and our special sauce.";
itemInfo3.textContent = "Pork tacos are made with seasoned pork, lettuce, and our special sauce.";
itemInfo4.textContent = "Street tacos are made with seasoned meat, lettuce, and our special sauce.";
itemInfo5.textContent = "Regular tacos are made with our signature blend of meats, lettuce, and our special sauce.";
itemInfo6.textContent = "Create your own tacos with our variety of fillings and salsas!";
itemPrice.textContent = "9.99";
itemPrice2.textContent = "9.99";
itemPrice3.textContent = "9.99";
itemPrice4.textContent = "9.99";
itemPrice5.textContent = "9.99";
itemPrice6.textContent = "9.99";

//append
document.body.appendChild(menuDiv);
menuDiv.appendChild(menuPageTitle);
menuDiv.appendChild(menuSubtitle);
menuDiv.appendChild(menuContainer);
menuContainer.appendChild(menuTitle);
menuContainer.appendChild(itemTitle);
menuContainer.appendChild(itemInfo);
menuContainer.appendChild(shrimpImg);
menuContainer.appendChild(itemPrice);
menuContainer.appendChild(itemTitle2);
menuContainer.appendChild(itemInfo2);
menuContainer.appendChild(chickenImg)
menuContainer.appendChild(itemPrice2);
menuContainer.appendChild(itemTitle3);
menuContainer.appendChild(itemInfo3);
menuContainer.appendChild(itemPrice3);
menuContainer.appendChild(itemTitle4);
menuContainer.appendChild(itemInfo4);
menuContainer.appendChild(itemPrice4);
menuContainer.appendChild(itemTitle5);
menuContainer.appendChild(itemInfo5);
menuContainer.appendChild(tacoImg)
menuContainer.appendChild(itemPrice5);
menuContainer.appendChild(itemTitle6);
menuContainer.appendChild(itemInfo6);
menuContainer.appendChild(itemPrice6);


