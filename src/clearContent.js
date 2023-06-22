function clearMainContent(content) {
	while (content.firstChild) {
		content.firstChild.remove();
	}
}
export default clearMainContent;
