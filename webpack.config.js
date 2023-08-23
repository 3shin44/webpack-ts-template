const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    library: 'testLibrary',
    libraryTarget: 'umd', // 输出格式为 UMD
    filename: 'bundle.js',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
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
