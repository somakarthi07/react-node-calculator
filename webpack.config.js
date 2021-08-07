const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: "./client/index.js",
  output: {
    path: __dirname + "/public",
    filename: "./bundle.js",
  },
  mode: 'development',
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      { 
        // check for files ending with  .css (uses Regex)
        test: /\.css$/,
         // use these loaders of .css files. 'css-loader gets run first and is 
         // used to handle the imports of our css files inside our jsx files. 
         // The style loader then mounts our css in to the DOM
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};