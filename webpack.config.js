var debug = process.env.NODE_ENV !== "production";
/*const BabiliPlugin = require("babili-webpack-plugin");//打包插件工具*/
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractTxtplugin =  new ExtractTextPlugin({
    filename:'./src/css/[name].[contenthash:8].css'
});

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devServer:{ //根目录添加文件devServer.js，用于创建服务器实例
	historyApiFallback: true,
  },
  performance:{
      hints:'warning',
  },
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry:{
      root:"./src/js/root.js",  //代码隔离
      vendor:['react']

  },
  output: {
    path: __dirname,
    /*filename: "./src/bundle.js"*/
    filename: "[name].js"
  },
  devtool:'source-map', //查看源代码方便在浏览器中打断点
  module: {
    rules: [
      {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'stage-1']
            }
      },
      {
      //下面是使用ant-design的配置文件
      test: /\.css?$/,
      use: extractTxtplugin.extract({
             fallback: "style-loader",
             use: "css-loader"
        })
      },
      {
            test: /\.less$/,
            loader:'style-loader!css-loader!postcss-loader!less-loader'

      },

      {
            test: /\.sass$/,
            loader:'style-loader!css!postcss-loader!sass-loader'

      },
     {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      }
    ]
  },

  plugins:[
   new webpack.HotModuleReplacementPlugin(),/*使用browserHistory时需要修改的地方*/
   new webpack.optimize.DedupePlugin(),
   new webpack.optimize.OccurrenceOrderPlugin (),
  /* new BabiliPlugin(), ///打包工具*/
   new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    extractTxtplugin

  ],
};
