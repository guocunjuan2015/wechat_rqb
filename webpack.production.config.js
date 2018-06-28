const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle-[hash].js"
  },

  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
  },

  module: {
    rules: [{
        test: /(\.jsx|\.js)$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"],
          },
        }],
        exclude: /node_mudules/
      },
      {
        test: /\.css$/,
        use:[
          {loader:"style-loader"},
          {loader:"css-loader",
            options:{
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("style.css")
  ]
}
