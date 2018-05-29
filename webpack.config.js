const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(jpg|png|svg|ico)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'images/[hash]-[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.sass$/,
				use: [
	                "style-loader",
	                { 
						loader: 'css-loader', 
						options: { minimize: true }
					},
	                "sass-loader"
	            ]
			},
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.sass']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Avercast Sandwich',
			template: './src/index.html'
		})
	],
	devServer: {
		historyApiFallback: true,
		contentBase: './dist',
	}
}; 