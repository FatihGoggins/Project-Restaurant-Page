import "./styles/main.css";
import buttonCreator from "./buttons";
import homePageFunction from "./home";
import clearMainContent from "./clearContent";
import menuPageFunction from "./menu";
import contactPageFunction from "./contact";

const container = document.querySelector(".container");

const header = document.createElement("div");
header.classList.add("header");
const title = document.createElement("div");
title.textContent = "Welcome to Kayseri Cuisine";
title.classList.add("title");
header.appendChild(title);
header.appendChild(buttonCreator());
container.appendChild(header);

const buttonsArray = Array.from(document.querySelectorAll("button"));
buttonsArray.forEach((button) => {
	button.addEventListener("click", function (event) {
		clearMainContent(mainContent);
		if (event.target.textContent === "HOME") {
			homePageFunction(mainContent);
		} else if (event.target.textContent === "MENU") {
			menuPageFunction(mainContent);
		} else if (event.target.textContent === "CONTACT") {
			contactPageFunction(mainContent);
		}
	});
});

const mainContent = document.createElement("div");
mainContent.classList.add("main-content");
container.appendChild(mainContent);
homePageFunction(mainContent);

const footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent = "@ 2023 Kayseri Cuisine. All rights reserved.";
container.appendChild(footer);
