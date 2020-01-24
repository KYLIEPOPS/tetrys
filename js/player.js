var dropScoreInterval = 1,
	landScoreInterval = 10,
	lineclearScoreInterval = 75,
	player = {
		start_x: 5,
		x: 5,
		y: 0,
		shape: []
	};

function collide() {
	let s = player.shape;

	for (let y = 0; y < s.length; y++) {
		for (let x = 0; x < s[y].length; x++) {
			if (
				s[y][x] !== 0 &&
				arena[player.y + y] && //Checking if row exists
				arena[player.y + y][player.x + x] !== 0
			) {
				return true;
			}
		}
	}

	return false;
}

function playerDrop() {
	dropCounter = 0;

	if (
		player.y + player.shape.length - 1 - getBottomBlanks(player.shape) <
		0
	) {
		player.x = player.start_x;
	}
	if (
		player.x + player.shape.length - 1 - getRightBlanks(player.shape) >
		arena[0].length - 1
	) {
		player.x =
			arena[0].length -
			player.shape.length +
			getRightBlanks(player.shape);
	}
	if (player.x + getLeftBlanks(player.shape) < 0) {
		player.x = 0 - getLeftBlanks(player.shape);
	}

	player.y++;

	if (
		collide() ||
		player.y >
			arena.length - player.shape.length + getBottomBlanks(player.shape)
	) {
		score += landScoreInterval;
		player.y--;
		merge(player, arena);

		if (addArray(arena[2]) > 0) {
			drawMatrix(arena, { x: 0, y: 0 });

			end = true;
			reset(false);
			return;
		} else playerReset();
	}
}

function playerReset() {
	player.shape = shapes[Math.round(Math.random() * (shapes.length - 1))];
	player.y = -player.shape.length + getBottomBlanks(player.shape);
	player.x = 5 - Math.round(player.shape.length / 2);
	player.start_x = player.x;

	currentLineClearScore = lineclearScoreInterval;
}

function playerRotate(dir) {
	const pos = player.x;
	let offset = 1;
	rotate(player.shape, dir);

	while (collide(arena, player)) {
		player.x += offset;
		offset = -(offset + (offset > 0 ? 1 : -1));
		if (offset > player.shape[0].length) {
			rotate(player.shape, -dir);
			player.x = pos;
			return;
		}
	}
}

function getBottomBlanks(matrix) {
	let blanks = 0;

	for (let y = matrix.length - 1; y >= 0; y--) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] !== 0) {
				return blanks;
			}
		}
		blanks++;
	}

	return blanks;
}

function getTopBlanks(matrix) {
	let blanks = 0;

	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] !== 0) {
				return blanks;
			}
		}
		blanks++;
	}

	return blanks;
}

function getRightBlanks(matrix) {
	let blanks = 0;

	for (let x = matrix.length - 1; x >= 0; x--) {
		for (let y = 0; y < matrix.length; y++) {
			if (matrix[y][x] !== 0) {
				return blanks;
			}
		}
		blanks++;
	}

	return blanks;
}

function getLeftBlanks(matrix) {
	let blanks = 0;

	for (let x = 0; x < matrix.length; x++) {
		for (let y = 0; y < matrix.length; y++) {
			if (matrix[y][x] !== 0) {
				return blanks;
			}
		}
		blanks++;
	}

	return blanks;
}

function reset(reload) {
	left = down = right = false;

	lshandler();

	end = true;
	localStorage._end = JSON.stringify(end);

	localStorage._arena = JSON.stringify(
		createMatrix(canvas.width / scl, canvas.height / scl).slice(0)
	);

	if (reload) {
		location.reload();
	}
}

var left = false,
	down = false,
	right = false;
function playerVerticalMovement() {
	if (down && !pause) {
		score += dropScoreInterval;
		playerDrop();
	}
}

function playerHorizontalMovement() {
	if (left && !pause) {
		player.x--;
		if (collide()) {
			player.x++;
		}
	} else if (right && !pause) {
		player.x++;
		if (collide()) {
			player.x--;
		}
	}
}

function keyPressed(event) {
	if (!end) {
		if (pause) return;

		if (event.type == "keydown") {
			switch (event.keyCode) {
				case 87: // up
				case 38: // up
					playerRotate(1);
					break;

				case 65: // left
				case 37: // left
					if (
						player.y +
							player.shape.length -
							getBottomBlanks(player.shape) <
						0
					)
						break;
					left = true;
					break;

				case 83: // down
				case 40: // down
					down = true;
					break;

				case 68: // right
				case 39: // right
					if (
						player.y +
							player.shape.length -
							getBottomBlanks(player.shape) <
						0
					)
						break;
					right = true;
					break;

				case 27:
					localStorage.mouse = JSON.stringify({ x: -10, y: -10 });
					break;
			}
		} else if (event.type == "keyup") {
			switch (event.keyCode) {
				case 65: // left
					left = false;
					break;

				case 37: // left
					left = false;
					break;

				case 83: // down
					down = false;
					break;

				case 40: // down
					down = false;
					break;

				case 68: // right
					right = false;
					break;

				case 39: // right
					right = false;
					break;
			}
		}
	} else {
		reset(true);
	}
}
