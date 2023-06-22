function buttonCreator() {
	const buttons = document.createElement("div");
	buttons.classList.add("buttons");
	for (let i = 0; i < 3; i++) {
		const button = document.createElement("button");
		let classListArray = ["home", "menu", "contact"];
		button.classList.add(classListArray[i]);
		button.textContent = classListArray[i].toUpperCase();
		buttons.appendChild(button);
	}
	return buttons;
}

export default buttonCreator;
