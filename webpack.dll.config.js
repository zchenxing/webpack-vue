const path    = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      vendor: ['vue', 'vue-router', 'vuex', 'vue-awesome-swiper', 'animejs']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
};