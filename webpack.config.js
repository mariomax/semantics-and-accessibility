const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  plugins: [
    new HtmlPlugin({ template: `./src/index.html` }),
    new HtmlPlugin({ template: `./src/second.html`, filename: `second.html` }),
    new HtmlPlugin({ template: `./src/third.html`, filename: `third.html` }),
    new CopyWebpackPlugin([
      {from: 'src/images', to: 'images'}
    ])
  ],
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1, }
              },
              'postcss-loader'
            ]
        }   
    ]
  }
};