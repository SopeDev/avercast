const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = (env, argv) => {
	return {
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
		                argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader',
		                'sass-loader'
		            ]
				},
			]
		},
		resolve: {
			extensions: ['*', '.js', '.jsx', '.sass']
		},
		output: {
			path: __dirname + '/docs',
			publicPath: '/',
			filename: 'bundle.js'
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Avercast Sandwich',
				template: './src/index.html'
			}),
			new MiniCssExtractPlugin({
				filename: "[name].css",
				chunkFilename: "[id].css"
			})
		],
		devServer: {
			historyApiFallback: true,
			contentBase: './docs',
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.css$/,
						chunks: 'all',
						enforce: true
					}
				}
			}
		}
	}
}