var debug = process.env.NODE_ENV !== "production";
const BabiliPlugin = require("babili-webpack-plugin");//打包插件工具
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractTxtplugin =  new ExtractTextPlugin({
    filename:'./src/css/[name].[contenthash:8].css'
});

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devServer:{ //根目录添加文件devServer.js，用于创建服务器实例
	historyApiFallback: true,
  hot:true,
  inline: true // 实时刷新
  },
  performance:{
      hints:'warning',
      maxEntrypointSize:10000,
      maxAssetSize:450000
  },
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  /*entry: ["./src/js/index.js", 使用browserHistory时需要修改的地方
        'webpack-dev-server/client?http://localhost:4562',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',],*/
  //entry: "./src/js/root.js",
// entry 为多入口
  entry:{
      root:"./src/js/root.js",  //代码隔离
      vendor:['react']

  },
  output: {
    path: __dirname,
    /*filename: "./src/bundle.js"*/
    filename: "[name].js"
  },
/*  devtool:'source-map', *///查看源代码方便在浏览器中打断点
  module: {
    rules: [
      {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            }
      },
      {
            //下面是使用ant-design的配置文件
            test: /\.css?$/,
            /*use: ExtractTextPlugin.extract({
                  use: "css-loader"
                })*/
                /*loader: ExtractTextPlugin.extract('style-loader', 'css-loader')*/
          /* loader:'style-loader!css-loader'*/
             /*use: ["style-loader", "css-loader", "postcss-loader"]*/
        /*loader: ExtractTextPlugin.extract("style-loader", "css-loader")*/
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

        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      }
    ]
  },

  plugins:[
   new webpack.HotModuleReplacementPlugin(),/*使用browserHistory时需要修改的地方*/
   new webpack.optimize.DedupePlugin(),
   new webpack.optimize.OccurrenceOrderPlugin (),
   new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }), //代码代码压缩混淆
   new BabiliPlugin(), ///打包工具*/
    // 将样式文件独立打包
    /*new ExtractTextPlugin("styles.css"),*/
  //结果文件的名称style-[contenthash].css
  new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
   new webpack.optimize.CommonsChunkPlugin({

        name : 'vendor' // 指定公共 bundle 的名字。代码隔离
    }),
    extractTxtplugin

  ],
};
