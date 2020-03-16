const path = require('path');
ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
mode: 'development',
  entry: './src/index.js',
  entry: {
    home: [
        './src/index.js'
    ],
    // style: [
    //     './src/css/index.less'
    // ]
},
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules:[
      {
          test:/\.css$/,
          use:['style-loader','css-loader']
      }
 ]
  },
};