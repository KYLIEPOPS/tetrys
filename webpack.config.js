const path = require("path");

module.exports = [
	{
		mode: "production",
		entry: "./combined.js",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "app.js"
		}
	}
];
