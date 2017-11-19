var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',

	output: {
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},

	devServer: {
		inline: true,
		port: 7777,
		contentBase: __dirname + '/public/',
		historyApiFallback: true
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: [ 'es2015', 'react' ]
				}
			},
			{
				test: /\.scss$/,
				loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
				exclude: /node_modules/
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader?name=/public/icons/[name].[ext]'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},

	plugins: [
		new webpack.ProvidePlugin({
			'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
		})
	]
};
