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

	// document.addEventListener("mousemove", mousemove);
	// document.addEventListener("keydown", uiKeyDown);
	// canvas.addEventListener("mousedown", uiMousePressed);

	if (localStorage._scoreResetSept2018 === undefined) {
		localStorage._hscore = hscore = 0;
		localStorage._scoreResetSept2018 = true;
	}

	// requestAnimationFrame(drawUI);
	init();
};

// function drawUI() {
// 	if (started) {
// 		document.removeEventListener("keydown", uiKeyDown);
// 		canvas.removeEventListener("mousedown", uiMousePressed);
// 		return;
// 	}

// 	ctx.globalAlpha = 1;
// 	ctx.fillStyle = "black";
// 	ctx.fillRect(0, 0, canvas.width, canvas.height);
// 	drawMatrix(background, { x: 0, y: 0 });

// 	highlight();

// 	ctx.globalAlpha = 1;
// 	ctx.fillStyle = "white";
// 	ctx.font = scl + "px monospace";
// 	ctx.fillText("> New Game", scl * 2, scl * 10);
// 	ctx.fillText("> Continue", scl * 2, scl * 11);
// 	ctx.fillText("> Info", scl * 2, scl * 12);

// 	requestAnimationFrame(drawUI);
// }

// function highlight() {
// 	if (Math.round(mouse.y / scl) > 9 && Math.ceil(mouse.y / scl) < 13) {
// 		ctx.fillStyle = "gray";
// 		ctx.globalAlpha = 0.2;
// 		ctx.fillRect(0, mouse.y - scl / 2, canvas.width, scl);
// 		//Selected set to num between 0 and 3
// 		selected = Math.round(mouse.y / scl) - 10;
// 	} else {
// 		selected = null;
// 	}
// }

// function uiKeyDown() {
// 	init();
// }

// function uiMousePressed() {
// 	switch (selected) {
// 		case 0:
// 			reset();
// 			init();
// 			if (end) {
// 				location.reload();
// 				reset();
// 				init();
// 			}
// 			break;
// 		case 1:
// 			init();
// 			break;

// 		case 2:
// 			window.open(
// 				"https://chrome.google.com/webstore/detail/popup-tetrys/bnchicpgbdgahiecgofdabidjihblaff",
// 				"_blank"
// 			);
// 			break;
// 	}
// }
function addArray(array) {
	let result = 0;
	array.forEach(value => {
		result += value;
	});

	return result;
}
