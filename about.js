//create elements
const aboutDiv = document.createElement("div");
const aboutTitle = document.createElement("h1");
const aboutSubtitle = document.createElement("p");
const aboutTextContainer = document.createElement("div");
const aboutText = document.createElement("p");
const contactInfoDiv = document.createElement("div");
const contactInfo = document.createElement("p");
const contactInfo2 = document.createElement("p");
const contactInfo3 = document.createElement("p");

//set attributes
aboutDiv.setAttribute("id", "aboutDiv")
aboutTitle.setAttribute("class", "aboutTitle");
aboutSubtitle.setAttribute("class", "aboutSubtitle");
aboutTextContainer.setAttribute("class", "aboutTextContainer");
aboutText.setAttribute("class", "aboutText");
contactInfoDiv.setAttribute("class", "contactInfoDiv");
contactInfo.setAttribute("class", "contactInfo");
contactInfo2.setAttribute("class", "contactInfo");
contactInfo3.setAttribute("class", "contactInfo");

//add content
aboutTitle.textContent = "Tacos Everyday";
aboutSubtitle.textContent = "Tacos. Tacos. And more tacos!";
aboutText.textContent = "We believe tacos should be eaten everyday! So we created Tacos Everyday to make sure you can get your taco fix any day of the week!";
contactInfo.textContent = "Reach out to us anytime: 555-555-5555";
contactInfo2.textContent = "Email us at: info@tacoseveryday.com";
contactInfo3.textContent = "See us in person at: 123 Taco Street, Taco Town, TX 12345";

//append
document.body.appendChild(aboutDiv)
aboutDiv.appendChild(aboutTitle);
aboutDiv.appendChild(aboutSubtitle);
aboutDiv.appendChild(aboutTextContainer);
aboutTextContainer.appendChild(aboutText);
aboutTextContainer.appendChild(contactInfoDiv);
contactInfoDiv.appendChild(contactInfo);
contactInfoDiv.appendChild(contactInfo2);
contactInfoDiv.appendChild(contactInfo3);
