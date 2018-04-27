const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
module.exports = {
	module: {
		rules: [
			{
                test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
                        options: {
							minimize: true
						}
                    }
                ]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}
		]
	},
    devtool: "inline-source-map",
    plugins: [
    	new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],
    devServer: {
		contentBase: require('path').join(__dirname, "dist"),
		compress: true,
		port: 8033,
		host: "127.0.0.1",
		hot: true
        // proxy: {
        //     '/login': {
        //         target: 'http://127.0.0.1:8080/login',
        //         secure: false
        //     }
        // }
	}
};