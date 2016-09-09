const webpack = require('webpack')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const pathToElements = path.resolve(__dirname, 'app', 'src', 'elements')

const paths = [
	'/',
]

module.exports = {
	entry: {
		main: './app/server.js',
		client: './app/client.js',
	},
	output: {
		filename: '[name].js',
		path: 'dist',
		libraryTarget: 'umd',
	},
	resolve: {alias: {elements: pathToElements}},
	plugins: [
		new StaticSiteGeneratorPlugin('main', paths),
		new ExtractTextPlugin('[name].css'),
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
			{
				test: /\.pcss$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:8]!postcss-loader'
				),
			},
		],
	},
	postcss: [
		require('postcss-import')({
			addDependencyTo: webpack,
			path: path.join(__dirname, 'app', 'src'),
		}),
		require('postcss-custom-media'),
		require('postcss-nested'),
		require('postcss-inline-svg')({path: 'assets/images/'}),
		require('postcss-assets')({
			loadPaths: ['assets/'],
			basePath: 'assets/',
			cachebuster: true,
		}),
		require('postcss-svgo'),
		require('postcss-css-variables'),
		require('postcss-calc'),
		require('autoprefixer'),
	],
}
