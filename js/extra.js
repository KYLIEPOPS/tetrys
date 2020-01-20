function removeCoffeeButton(closedManually = true) {
	const canvasHeight = document.querySelector("canvas").clientHeight;
	document.querySelector("div.support").style.display = "none";
	document.body.parentElement.style.height = canvasHeight;

	if (closedManually) {
		location.hash = "support_closed";
	}
}

function addCoffeButton() {
	const canvasHeight = document.querySelector("canvas").clientHeight;
	const supportHeight = document.querySelector("div.support").clientHeight;
	document.querySelector("div.support").style.display = "block";
	document.body.parentElement.style.height = `${canvasHeight +
		supportHeight}px`;
}

window.addEventListener("load", () => {
	const r = Math.random();
	const x = Math.round(r * 6);

	if (
		location.hash == "#support_opened" ||
		(x == 1 && location.hash != "#support_closed")
	) {
		addCoffeButton();
		location.hash = "support_opened";
	} else {
		removeCoffeeButton(false);
	}
	console.log(x);
});

document
	.querySelector(".x-bmc-button")
	.addEventListener("click", removeCoffeeButton);
