const colors = [
	null,
	"#FF0D72",
	"#0DC2FF",
	"#0DFF72",
	"#F538FF",
	"#FF8E0D",
	"#FFE138",
	"#3877FF"
];
(shapes = [
	[
		[1, 1, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	[
		[2, 2],
		[2, 2]
	],
	[
		[0, 0, 3, 0],
		[0, 0, 3, 0],
		[0, 0, 3, 0],
		[0, 0, 3, 0]
	],
	[
		[0, 4, 0],
		[0, 4, 0],
		[0, 4, 4]
	],
	[
		[0, 5, 0],
		[0, 5, 0],
		[5, 5, 0]
	],
	[
		[0, 6, 6],
		[6, 6, 0],
		[0, 0, 0]
	],
	[
		[7, 7, 0],
		[0, 7, 7],
		[0, 0, 0]
	]
]),
	(speed = 7);

let ctx,
	canvas,
	scl,
	arena,
	score = 0,
	hscore,
	end = false,
	mouse = localStorage.mouse
		? JSON.parse(localStorage.mouse)
		: { x: 0, y: 0 },
	restartBtn,
	hoverRestartBtn = false,
	pauseBtn,
	playBtn,
	hoverPauseBtn,
	pause = false,
	horizontalSpeed = 12,
	verticalSpeed = 20,
	limitLineThickness = 1,
	currentLineClearScore = 0;

function init() {
	//Resetting stuff in case the init method has been called before
	clearInterval(verticalMovementInterval);
	clearInterval(horizontalMovementInterval);

	try {
		document.removeEventListener("keydown", keyPressed);
		document.removeEventListener("keyup", keyPressed);
		document.removeEventListener("mousedown", mousePressed);
	} catch (e) {
		console.error(e);
	}
	//

	started = true;

	//Event listeners
	document.addEventListener("keydown", keyPressed);
	document.addEventListener("keyup", keyPressed);
	document.addEventListener("mousedown", mousePressed);
	document.addEventListener("mousemove", mousemove);
	//

	try {
		end = JSON.parse(localStorage._end);
	} catch (e) {
		console.error(e);
		end = false;
	}
	try {
		load();
	} catch (e) {
		console.error(e);
	}

	restartBtn = new Image();
	restartBtn.src = "../images/restart.png";

	pauseBtn = new Image();
	pauseBtn.src = "../images/pause.png";

	playBtn = new Image();
	playBtn.src = "../images/play.png";

	var verticalMovementInterval = setInterval(
		playerVerticalMovement,
		1000 / verticalSpeed
	);
	var horizontalMovementInterval = setInterval(
		playerHorizontalMovement,
		1000 / horizontalSpeed
	);

	if (player == undefined) playerReset();

	requestAnimationFrame(update);
}

let deltaTime = 0,
	lastTime = 0,
	dropCounter = 0,
	dropInterval = speed * 50;
function update(time = 0) {
	if (end) {
		die();
	}

	//Background
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "red";
	ctx.fillRect(
		0,
		scl * 3 - limitLineThickness,
		canvas.width,
		limitLineThickness
	);
	//

	drawMatrix(arena, { x: 0, y: 0 });
	drawMatrix(player.shape, { x: player.x, y: player.y });

	lshandler();

	// Time
	deltaTime = time - lastTime;
	lastTime = time;
	//

	// playerDrop
	dropCounter += deltaTime;
	if (dropCounter > dropInterval && !end && !pause) {
		playerDrop();
		dropCounter = 0;
	}
	//

	if (hscore == null) {
		try {
			hscore = localStorage._hscore;
		} catch (e) {
			console.error(e);
		}
	}
	if (hscore == null) {
		hscore = 0;
	}

	drawScore();

	drawRestartBtn();

	drawPauseBtn();

	lineClear();

	requestAnimationFrame(update);
}

function drawScore() {
	ctx.font = scl * 2 + "px Arial";
	ctx.fillStyle = "#fff";
	ctx.fillText(
		score,
		canvas.width / 2 - ctx.measureText(score).width / 2,
		scl * 2.5
	);

	ctx.font = scl * 0.5 + "px Arial";
	ctx.fillStyle = "#fff";
	ctx.fillText(
		"High score: " + hscore,
		canvas.width / 2 - ctx.measureText("High score: " + hscore).width / 2,
		scl * 3.5
	);
}

function drawRestartBtn() {
	this.offset = 1;
	this.hoverSize = scl / 5;

	if (
		mouse.x > scl * this.offset - this.hoverSize &&
		mouse.x < scl * this.offset + scl + this.hoverSize * 2 &&
		mouse.y > scl * this.offset - this.hoverSize &&
		mouse.y < scl * this.offset + scl + this.hoverSize * 2
	) {
		hoverRestartBtn = true;

		ctx.fillStyle = "#3a3a3a";
		ctx.fillRect(
			scl * this.offset - this.hoverSize,
			scl * this.offset - this.hoverSize,
			scl + this.hoverSize * 2,
			scl + this.hoverSize * 2
		);
	} else {
		hoverRestartBtn = false;
	}

	ctx.drawImage(restartBtn, scl * this.offset, scl * this.offset, scl, scl);
}

function drawPauseBtn() {
	this.offsetX = 8;
	this.offsetY = 1;
	this.hoverSize = scl / 5;

	if (
		mouse.x > scl * this.offsetX - this.hoverSize &&
		mouse.x < scl * this.offsetX + scl + offsetX &&
		mouse.y > scl * this.offsetY - this.hoverSize &&
		mouse.y < scl * this.offsetY + scl + offsetY
	) {
		hoverPauseBtn = true;

		ctx.fillStyle = "#3a3a3a";
		ctx.fillRect(
			scl * this.offsetX - this.hoverSize,
			scl * this.offsetY - this.hoverSize,
			scl + this.hoverSize * 2,
			scl + this.hoverSize * 2
		);
	} else {
		hoverPauseBtn = false;
	}
	const btn = pause ? playBtn : pauseBtn;
	ctx.drawImage(btn, scl * this.offsetX, scl * this.offsetY, scl, scl);
}

function die() {
	let msg = "You hit the limit!";

	//Outline
	let offset = 0.05 * scl;

	ctx.font = scl + "px Arial";
	ctx.fillStyle = "#ff5b5b";
	ctx.fillText(
		msg,
		canvas.width / 2 - ctx.measureText(msg).width / 2 + offset,
		scl * 8 + offset
	);

	let msg2 = "Press any key to restart";

	ctx.font = scl * 0.7 + "px Arial";
	ctx.fillStyle = "#ff5b5b";
	ctx.fillText(
		msg2,
		canvas.width / 2 - ctx.measureText(msg2).width / 2 + offset,
		scl * 9 + offset
	);
	//

	//Actual text
	ctx.font = scl + "px Arial";
	ctx.fillStyle = "red";
	ctx.fillText(
		msg,
		canvas.width / 2 - ctx.measureText(msg).width / 2,
		scl * 8
	);

	ctx.font = scl * 0.7 + "px Arial";
	ctx.fillStyle = "red";
	ctx.fillText(
		msg2,
		canvas.width / 2 - ctx.measureText(msg2).width / 2,
		scl * 9
	);
	//
}

function createMatrix(w, h) {
	let matrix = [];
	while (h--) {
		matrix.push(new Array(w).fill(0));
	}
	return matrix;
}

function drawMatrix(matrix, offset) {
	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] !== 0) {
				ctx.fillStyle = colors[matrix[y][x]];
				ctx.fillRect(
					(offset.x + x) * scl,
					(offset.y + y) * scl,
					scl,
					scl
				);
			}
		}
	}
}

function merge(object, arena) {
	const matrix = object.shape;

	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix.length; x++) {
			if (matrix[y][x] && matrix[y][x] !== 0) {
				try {
					arena[object.y + y][object.x + x] = matrix[y][x];
				} catch (e) {
					console.error(e);
				}
			}
		}
	}
}

function rotate(matrix, dir) {
	for (let y = 0; y < matrix.length; ++y) {
		for (let x = 0; x < y; ++x) {
			[matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
		}
	}

	if (dir > 0) {
		matrix.forEach(row => row.reverse());
	} else {
		matrix.reverse();
	}
}

function lineClear() {
	for (let i = arena.length - 1; i >= 0; i--) {
		if (
			arena[i].every(value => {
				return value > 0;
			})
		) {
			arena.splice(i, 1);
			//Adds new row to top of arena
			arena.splice(0, 0, new Array(arena[1].length).fill(0));
			score += currentLineClearScore;
			currentLineClearScore *= 2;
			//The score you get from each line, doubles for each line you do at once
		}
	}
}

function load() {
	try {
		if (end) {
			hscore = JSON.parse(localStorage._hscore);

			arena = createMatrix(canvas.width / scl, canvas.height / scl).slice(
				0
			);
			playerReset();

			end = false;
			return;
		}
	} catch (e) {
		console.error(e);
		hscore = 0;
	}
	//Arena
	try {
		if (localStorage._arena != null && localStorage._arena != "undefined") {
			arena = JSON.parse(localStorage._arena);
		}
	} catch (e) {
		console.error(e);
	} finally {
		if (arena == null) {
			arena = createMatrix(canvas.width / scl, canvas.height / scl);
		}
	}
	//

	//Scores
	try {
		if (
			localStorage._hscore == null ||
			localStorage._hscore == "undefined"
		) {
			highScore = localStorage._hscore = 0;
		} else {
			highScore = JSON.parse(localStorage._hscore);
		}
		if (localStorage._score == null || localStorage._score == "undefined") {
			score = localStorage._score = 0;
		} else {
			score = JSON.parse(localStorage._score);
		}
		player = JSON.parse(localStorage._player);
	} catch (e) {
		console.error(e);
	}
	//
}

//Localstorage handler

function lshandler() {
	try {
		if (score > hscore) {
			hscore = score;
			localStorage._hscore = JSON.stringify(hscore);
		}

		localStorage._end = JSON.stringify(end);
		localStorage._score = JSON.stringify(score);
		localStorage._arena = JSON.stringify(arena);
		localStorage._player = JSON.stringify(player);
	} catch (e) {}
}

function mousemove(e) {
	const computedStyle = window.getComputedStyle(canvas);
	const cwidth = parseInt(computedStyle.width);
	const cheight = parseInt(computedStyle.height);

	const mx = canvas.width / cwidth;
	const my = canvas.height / cheight;

	let rect = canvas.getBoundingClientRect();
	mouse.x = (e.clientX - rect.left) * mx;
	mouse.y = (e.clientY - rect.top) * my;

	localStorage.setItem("mouse", JSON.stringify(mouse));
}

function mousePressed(e) {
	if (hoverRestartBtn) {
		reset(true);
	} else if (hoverPauseBtn) {
		pause = !pause;

		// Remove button press
		up = down = left = right = false;
	}
}
