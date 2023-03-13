const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[contenthash].js",
    clean: true,
  },

  resolve: {
    extensions: [".js"],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[contenthash][ext]",
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },

  mode: "production",

  plugins: [
    new HtmlWebpackPlugin({
      inject: "head",
      template: "./index.html",
      filename: "index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "index.[contenthash].css",
    }),
  ],
};
