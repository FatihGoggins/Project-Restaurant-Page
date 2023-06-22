import mantıImg from "./assets/mantı.jpg";
import yağlamaImg from "./assets/yağlama.jpeg";
import pastırmaImg from "./assets/pastırma.jpg";

function menuPageFunction(container) {
	const menuPageContent = document.createElement("div");
	menuPageContent.classList.add("menupage-content");
	container.appendChild(menuPageContent);

	const Dish = (dishImgSrc, dishName, dishInfo) => {
		return { dishImgSrc, dishName, dishInfo };
	};
	const mantı = new Dish(mantıImg, "Mantı", "Mantı is a dish made by putting ground meat flavored with various spices into small pieces of dough and boiling these pieces of dough in water. Mantı, which is a part of Turkish cuisine as well as Central Asian cuisines, is a popular food in the former USSR countries.");
	const yağlama = new Dish(yağlamaImg, "Yağlama", "Yağlama is a dish consisting of şebit, minced meat, tomato paste sauce and yoghurt. It is made by placing the shabits on top of each other and putting plenty of juicy and tomato paste mince between each layer.");
	const pastırma = new Dish(pastırmaImg, "Pastırma", "Pastırma is a food made in Turkish cuisine by drying raw meat with various spices and salt. Today, Kayseri is known as the pastırma production city. Pastırma is an old Turkish food. It is known that the first to make pastırma were the Huns in Central Asia.");

	const dishes = [mantı, yağlama, pastırma];

	for (let i = 0; i < 3; i++) {
		const dish = document.createElement("div");
		dish.classList.add("dish");
		const dishImg = document.createElement("img");
		dishImg.setAttribute("src", dishes[i].dishImgSrc);
		const dishName = document.createElement("p");
		dishName.classList.add("dish-name");
		dishName.textContent = dishes[i].dishName;
		const dishText = document.createElement("p");
		dishText.textContent = dishes[i].dishInfo;
		const dishArray = [dishImg, dishName, dishText];
		for (let j = 0; j < 3; j++) {
			dish.appendChild(dishArray[j]);
		}
		menuPageContent.appendChild(dish);
	}
}
export default menuPageFunction;
