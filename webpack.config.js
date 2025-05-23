
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
        rules: [
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            {test: /\.svg$/, use: "svg-loader"},
            {test: /\.js$/, use: 'babel-loader'},
        ]
    },    
  output: {
    filename: 'bundle.js',   
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
      filename: 'index.html',       
      inject: 'body'                
    })
  ],
  devServer: {
        static: {
          directory: path.join(__dirname, "src"), 
        },
        hot: true,
        open: true,
    },
    target: 'web',
  mode: 'development' ,      
};