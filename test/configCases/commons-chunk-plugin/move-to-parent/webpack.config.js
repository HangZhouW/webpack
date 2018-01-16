module.exports = {
	entry: {
		bundle0: "./index"
	},
	target: "web",
	output: {
		filename: "[name].js"
	},
	optimization: {
		asyncCommonsChunks: {
			minSize: 1,
			name: "bundle0"
		}
	}
};
