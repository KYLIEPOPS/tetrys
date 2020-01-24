const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const indexHTML = fs.readFileSync(path.join(__dirname, "..", "index.html"));
const stylecss = fs.readFileSync(path.join(__dirname, "..", "style.css"));

const dom = new JSDOM(indexHTML);

const styleElement = dom.window.document.querySelector("style#styles");
styleElement.innerHTML = stylecss.toString();

fs.writeFileSync(
	path.join(__dirname, "..", "dist", "index.html"),
	dom.window.document.documentElement.outerHTML.replace(/\n|\t/g, "")
);

const playerjs = fs.readFileSync(path.join(__dirname, "..", "js", "player.js"));
const startjs = fs.readFileSync(path.join(__dirname, "..", "js", "start.js"));
const tetrysjs = fs.readFileSync(path.join(__dirname, "..", "js", "tetrys.js"));

const combinedjs =
	startjs.toString() + tetrysjs.toString() + playerjs.toString();

fs.writeFileSync(
	path.join(__dirname, "..", "combined.js"),
	Buffer.from(combinedjs)
);

// fs.copyFileSync(
// 	path.join(__dirname, "..", "js", "bmc.js"),
// 	path.join(__dirname, "..", "dist", "bmc.js")
// );
