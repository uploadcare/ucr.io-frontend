const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const paths = [
	'/',
]

module.exports = {
	entry: {main: './app/index.js', },
	output: {
		filename: 'index.js',
		path: 'dist',
		libraryTarget: 'umd',
	},
	plugins: [
		new StaticSiteGeneratorPlugin('main', paths),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
			},
			{
				test: /\.ejs$/,
				loader: 'ejs-compiled',
			},
		],
	},
}
