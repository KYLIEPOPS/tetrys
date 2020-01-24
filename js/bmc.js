window.addEventListener("load", () => {
	let timesPlayed = localStorage.getItem("timesPlayed");

	if (timesPlayed == null) {
		timesPlayed = 1;
	} else {
		timesPlayed = Number(timesPlayed) + 1;
	}

	localStorage.setItem("timesPlayed", timesPlayed);

	let x = timesPlayed % 8;
	const r = Math.round(Math.random() * x);

	if (timesPlayed > 19 && r == 1) {
		document.querySelector("div.bmc").removeAttribute("style");
	}
});
