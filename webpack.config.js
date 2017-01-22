var path = require('path');

const fontPath = path.join(__dirname, 'src/fonts')
const srcPath = path.join(__dirname, 'src')
const appPath = path.join(__dirname, 'app')
const stylesPath = path.join(__dirname, 'src/styles')
const imgPath = path.join(__dirname, 'src/img')

var config = {
  context: srcPath,
  entry: [
    './main.js',
  ],
  output: {
    path: appPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      { include: stylesPath,
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        include: stylesPath,
        test: /\.css$/,
        loader: 'css-loader',
      },
      { include: fontPath, test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
      { include: fontPath, test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
      { include: fontPath, test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
      { include: fontPath, test: /\.ttf$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
      { include: fontPath, test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
      { include: fontPath, test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' },
      { include: imgPath, test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192', }
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
module.exports = config;
