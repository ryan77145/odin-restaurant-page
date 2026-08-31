export default function buildAboutDiv() {

  const contentDiv = document.querySelector("#content");


  const title = document.createElement("h1");
  const subtitle = document.createElement("p");
  const subtextContainer = document.createElement("div");
  const subtext = document.createElement("p");
  const subtext2 = document.createElement("p");
  const summary = document.createElement("p");
  const contactInfoDiv = document.createElement("div");
  const contactInfo = document.createElement("p");
  const contactInfo2 = document.createElement("p");
  const contactInfo3 = document.createElement("p");

  title.setAttribute("class", "title");
  subtitle.setAttribute("class", "subtitle");
  subtextContainer.setAttribute("class", "subDiv");
  subtext.setAttribute("class", "subtext");
  subtext2.setAttribute("class", "subtext2");
  summary.setAttribute("class", "summary");
  contactInfoDiv.setAttribute("class", "contactInfoDiv");
  contactInfo.setAttribute("class", "contactInfo");
  contactInfo2.setAttribute("class", "contactInfo");
  contactInfo3.setAttribute("class", "contactInfo");

  contentDiv.innerHTML = "";

  title.textContent = "Tacos Everyday";
  subtitle.textContent = "Tacos. Tacos. And more tacos!";
  subtext.textContent =
    "We believe tacos should be eaten everyday! So we created Tacos Everyday to make sure you can get your taco fix any day of the week!";
  contactInfo.textContent = "Reach out to us anytime: 555-555-5555";
  contactInfo2.textContent = "Email us at: info@tacoseveryday.com";
  contactInfo3.textContent =
    "See us in person at: 123 Taco Street, Taco Town, TX 12345";

  contentDiv.appendChild(title);
  contentDiv.appendChild(subtitle);
  contentDiv.appendChild(subtextContainer);
  subtextContainer.appendChild(subtext);
  subtextContainer.appendChild(contactInfoDiv);
  contactInfoDiv.appendChild(contactInfo);
  contactInfoDiv.appendChild(contactInfo2);
  contactInfoDiv.appendChild(contactInfo3);
}
