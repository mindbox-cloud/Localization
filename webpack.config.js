module.exports = {
	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: "ts-loader"
		}]
	},
	externals: {
		"react": "React"
	},
	resolve: {
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	entry: "./index",
	output: {
		filename: "./js/index.js",
	},
	devtool: "source-map"
};