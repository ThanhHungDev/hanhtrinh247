const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

var entryJS = './src/index.js'
var namePage = 'index'
var teamplateHTML = './src/teamplate/' + namePage + '.html'


module.exports = {
	entry: entryJS,///////////////////////<-------////////////

	optimization: {
		minimizer: [
			new TerserJSPlugin({}),
			new OptimizeCSSAssetsPlugin({})
		],
		splitChunks: {
			chunks: 'all'
		}
	},

	output: {
		filename: 'js/' + namePage + '.bundle.js',
		path: path.join(__dirname, "/../SERVER_PHP/public/"),
		publicPath: '/', /// <=== khoong cos 
	},
	
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				},
			},
			{
				test: /\.(png|woff|woff2|eot|otf|ttf|svg|txt)$/,
				loader: 'url-loader',
				options: {
					limit: 100000
				}
			},
			{
				test: /\.s(a|c)ss$/,
				loader: [
					true ?
						'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|ico|svg|ttf)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'image',
					name: '[name].[ext]'
				}
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'font/'
						}
					}
				]
			}

		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: teamplateHTML
		}),
		new MiniCssExtractPlugin({
			filename: 'css/' + namePage + '.min.css',
		})
	],

	externals: {
		'React': 'React'
	},
	devServer: {
		port: 8080,
		historyApiFallback: true,
	},
	devtool: 'inline-source-map'
}