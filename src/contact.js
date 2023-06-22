import personImg from "./assets/account.svg";

function contactPageFunction(container) {
	const contactPageContent = document.createElement("div");
	contactPageContent.classList.add("contact-content");
	container.appendChild(contactPageContent);

	const Person = (personImgSrc, name, rank, phoneNumber) => {
		return { personImgSrc, name, rank, phoneNumber };
	};
	const bigBrother = new Person(personImg, "Thor", "Chef", "(+90)123 456 78 90");
	const littleBrother = new Person(personImg, "Baldur", "Chef", "(+90)987 654 32 10");
	const me = new Person(personImg, "Fatih Karaoğlu", "Intern Chef", "(+90)554 514 42 95");
	const people = [bigBrother, littleBrother, me];

	for (let i = 0; i < 3; i++) {
		const person = document.createElement("div");
		person.classList.add("person");
		const personImg = document.createElement("img");
		personImg.setAttribute("src", people[i].personImgSrc);
		const name = document.createElement("p");
		name.textContent = people[i].name;
		const rank = document.createElement("p");
		rank.textContent = people[i].rank;
		const phoneNumber = document.createElement("p");
		phoneNumber.textContent = people[i].phoneNumber;
		const personArray = [personImg, name, rank, phoneNumber];
		for (let j = 0; j < 4; j++) {
			person.appendChild(personArray[j]);
		}
		contactPageContent.appendChild(person);
	}
}
export default contactPageFunction;
