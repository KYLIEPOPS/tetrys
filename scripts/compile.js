const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const indexHTML = fs.readFileSync(path.join(__dirname, "..", "index.html"));

const dom = new JSDOM(indexHTML);

fs.writeFileSync(
	"dist/index.html",
	dom.window.document.documentElement.outerHTML.replace(/\n|\t/g, "")
);

const playerjs = fs.readFileSync(path.join(__dirname, "..", "js", "player.js"));
const startjs = fs.readFileSync(path.join(__dirname, "..", "js", "start.js"));
const tetrisjs = fs.readFileSync(path.join(__dirname, "..", "js", "tetris.js"));

const combinedjs =
	startjs.toString() + tetrisjs.toString() + playerjs.toString();

fs.writeFileSync(
	path.join(__dirname, "..", "combined.js"),
	Buffer.from(combinedjs)
);
