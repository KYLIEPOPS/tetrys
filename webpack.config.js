const path = require("path");

module.exports = [
	{
		mode: "production",
		entry: "./combined.js",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "app.js"
		}
	},
	{
		mode: "production",
		entry: "./js/bmc.js",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "bmc.js"
		}
	}
];
