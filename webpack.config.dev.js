const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
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
          filename: "img/[name].[ext]",
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },

  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    open: ["index.html"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: "head",
      template: "./index.html",
      filename: "index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
};
