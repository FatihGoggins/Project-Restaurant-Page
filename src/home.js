function homePageFunction(container) {
	const homePageContent = document.createElement("div");
	homePageContent.classList.add("homepage-content");
	container.appendChild(homePageContent);
	const review = document.createElement("div");
	review.classList.add("review");
	homePageContent.appendChild(review);

	const reviewTitle = document.createElement("div");
	reviewTitle.textContent = "About";
	reviewTitle.classList.add("review-title");
	review.appendChild(reviewTitle);

	const reviewText = document.createElement("div");
	reviewText.textContent = "Kayseri, which has a rich culinary culture, has a multicultural structure in terms of both civilizations and tastes. Its cuisine, which consists mainly of floury and meaty foods, forms the center of unique dishes. As Kayseri Cuisine, we prepare our products carefully and give priority to their taste in this way we set out to preserve traditional flavors and share them with everyone. Our menu, which we have developed on the basis of a rich cuisine, consists of only dishes that we are masters of. In addition, our brand and products are always in a position of development.";
	reviewText.classList.add("review-text");
	review.appendChild(reviewText);

	const visit = document.createElement("div");
	visit.classList.add("visit");
	homePageContent.appendChild(visit);

	const visitTitle = document.createElement("div");
	visitTitle.textContent = "Visit Us";
	visitTitle.classList.add("visit-title");
	visit.appendChild(visitTitle);

	const visitText = document.createElement("div");
	visitText.textContent = "We are located in the heart of Ankara at Dikmen Valley. We are open through the week from 8 a.m. to 12 p.m. Join us for an unforgettable dining experience in a world where fantasy meets flavor.";
	visitText.classList.add("visit-text");
	visit.append(visitText);
}
export default homePageFunction;
