export default function buildMenuDiv() {
  const contentDiv = document.querySelector("#content");

  const title = document.createElement("h1");
  const subtitle = document.createElement("p");
  const subtextContainer = document.createElement("div");
  const subtext = document.createElement("p");
  const tacoImg = document.createElement("img");
  tacoImg.src = "/assets/taco.png";
  const shrimpImg = document.createElement("img");
  shrimpImg.src = "/assets/shrimp.png";
  const chickenImg = document.createElement("img");
  chickenImg.src = "/assets/chicken.png";
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
  const itemPrice = document.createElement("span");
  const itemPrice2 = document.createElement("span");
  const itemPrice3 = document.createElement("span");
  const itemPrice4 = document.createElement("span");
  const itemPrice5 = document.createElement("span");

  title.setAttribute("class", "title");
  subtitle.setAttribute("class", "subtitle");
  subtextContainer.setAttribute("class", "subDiv");
  subtext.setAttribute("class", "subtext");
  menuContainer.setAttribute("class", "menuContainer");
  menuTitle.setAttribute("class", "menuTitle");
  itemTitle.setAttribute("class", "itemTitle");
  itemTitle2.setAttribute("class", "itemTitle2");
  itemTitle3.setAttribute("class", "itemTitle4");
  itemTitle4.setAttribute("class", "itemTitle5");
  itemTitle5.setAttribute("class", "itemTitle6");
  itemInfo.setAttribute("class", "itemInfo");
  itemInfo2.setAttribute("class", "itemInfo2");
  itemInfo3.setAttribute("class", "itemInfo3");
  itemInfo4.setAttribute("class", "itemInfo4");
  itemInfo5.setAttribute("class", "itemInfo5");
  itemPrice.setAttribute("class", "itemPrice");
  itemPrice2.setAttribute("class", "itemPrice2");
  itemPrice3.setAttribute("class", "itemPrice3");
  itemPrice4.setAttribute("class", "itemPrice4");
  itemPrice5.setAttribute("class", "itemPrice5");
  tacoImg.setAttribute("class", "tacoImg");
  chickenImg.setAttribute("class", "chickenImg");
  shrimpImg.setAttribute("class", "shrimpImg");
  contentDiv.innerHTML = "";

  title.textContent = "Tacos Everyday";
  subtitle.textContent = "Tacos. Tacos. And more tacos!";
  menuTitle.textContent = "Menu: ";
  itemTitle.textContent = "Shrimp Tacos";
  itemTitle2.textContent = "Chicken Tacos";
  itemTitle3.textContent = "Street Tacos";
  itemTitle4.textContent = "Regular Tacos";
  itemTitle5.textContent =
    "Create Your Own Tacos - think subway, but with tacos!";
  itemInfo.textContent =
    "Shrimp tacos are made with fresh shrimp, lettuce, and our special sauce.";
  itemInfo2.textContent =
    "Chicken tacos are made with tender chicken, lettuce, and our special sauce.";
  itemInfo3.textContent =
    "Street tacos are made with seasoned meat, lettuce, and our special sauce.";
  itemInfo4.textContent =
    "Regular tacos are made with our signature blend of meats, lettuce, and our special sauce.";
  itemInfo5.textContent =
    "Create your own tacos with our variety of fillings and salsas!";
  itemPrice.textContent = "9.99";
  itemPrice2.textContent = "9.99";
  itemPrice3.textContent = "9.99";
  itemPrice4.textContent = "9.99";
  itemPrice5.textContent = "9.99";

  contentDiv.appendChild(title);
  contentDiv.appendChild(subtitle);
  contentDiv.appendChild(menuContainer);
  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(itemTitle);
  menuContainer.appendChild(itemInfo);
  menuContainer.appendChild(shrimpImg);
  menuContainer.appendChild(itemPrice);
  menuContainer.appendChild(itemTitle2);
  menuContainer.appendChild(itemInfo2);
  menuContainer.appendChild(chickenImg);
  menuContainer.appendChild(itemPrice2);
  menuContainer.appendChild(itemTitle3);
  menuContainer.appendChild(itemInfo3);
  menuContainer.appendChild(itemPrice3);
  menuContainer.appendChild(itemTitle4);
  menuContainer.appendChild(itemInfo4);
  menuContainer.appendChild(tacoImg);
  menuContainer.appendChild(itemPrice4);
  menuContainer.appendChild(itemTitle5);
  menuContainer.appendChild(itemInfo5);
  menuContainer.appendChild(itemPrice5);
}
