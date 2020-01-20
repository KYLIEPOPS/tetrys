var background = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 6, 6, 6, 0, 0],
	[0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
	[0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
	[0, 5, 5, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[3, 0, 0, 0, 0, 0, 0, 7, 7, 0],
	[3, 0, 0, 0, 0, 0, 0, 7, 7, 0],
	[3, 1, 0, 2, 0, 0, 0, 0, 0, 0],
	[3, 1, 0, 2, 2, 4, 4, 0, 0, 0],
	[1, 1, 1, 2, 2, 4, 4, 0, 0, 0],
	[1, 6, 6, 2, 2, 4, 4, 0, 0, 1]
];

var started = false,
	selected = null;

window.onload = function() {
	//Init canvas stuff (variables on other files)
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	scl = canvas.width / 10;
	//

	if (localStorage._scoreResetSept2018 === undefined) {
		localStorage._hscore = hscore = 0;
		localStorage._scoreResetSept2018 = true;
	}

	init();
};

function addArray(array) {
	let result = 0;
	array.forEach(value => {
		result += value;
	});

	return result;
}
