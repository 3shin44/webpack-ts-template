const path = require('path');

// 取得主檔設定
const mainSetting = require('./webpack.config.js')

module.exports = {
  // UMD 格式輸出設定
  entry: './src/index.ts',
  output: {
    library: 'testLibrary',
    libraryTarget: 'umd',
    filename: 'bundle_umd.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 相同設定沿用主檔
  resolve: mainSetting.resolve,
  module: mainSetting.module
};
