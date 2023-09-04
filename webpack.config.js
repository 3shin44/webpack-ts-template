const path = require('path');

// 預設webpack參數檔案
module.exports = {
  entry: './src/index.ts',
  output: {
    library: {
      // do not specify a `name` here
      type: 'module',
    },
    filename: 'bundle_esm.js',
    path: path.resolve(__dirname, 'dist'),
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
