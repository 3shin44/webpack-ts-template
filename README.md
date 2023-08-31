# Webpack & TypeScript Environmental Template

## 環境建置

- 安裝 `npm install`
 
## 使用

- 使用指引：開發檔案於src目錄下, 最終要輸出的資料請匯至index.ts檔案中

- 打包: 執行`npm run build-prod`, 匯出檔案於dist目錄下

## Project Structure


## CMDs of packjson


## 備註

- webpack.config.js should setting "LibraryName" property for function export

- export method: webpack/rollup
  
| Type           | webpack                                                                                                          | rollup                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Usage          | Widly, Complex web application                                                                                   | Focus on JS library                              |
| Syntax         | CommonJS and other                                                                                               | ES6                                              |
| Export         | have various export options                                                                                      | export an individaul library, and optimize on it |
| Tree Shaking   | Basic                                                                                                            | Advanced, usually export smaller result          |
| How to choice? | For complex app, contains js, css, html...and additional func such as hot module replacement, server development | For JS library development                       |

- UMD format

- UMD為兼容前後端語法(Node.js, AMD, Window/Global), 輸出時需多設定` globalObject: 'this' `, 不過本專案多為前端使用, 確認無後端需求後可考慮改為純前端語法ES6 module ` libraryTarget: 'module' `


## 筆記

Webpack也可以輸出為ES6 module, 但要特別設定, 且目前為實驗性功能,

要達到原始需求:

1. 可使用ES6 Module語法  

2. 保留 HTML script 導入語法

以webpack目前設定, 應改兩組設定檔分別導出, 若還要弄成NPM Library, 由於webpack會做檢查

所以package.json也要做對應設定, 不然直接被打槍

關鍵字: libraryTarget: 'module',   experiments: { outputModule: true }

## 結論

- 需求與情境

原始碼為JS function且會切分許多檔案, 最終合併的檔案移除註解與簡化變數名稱, 使用方式為HTML-script或ES Module

- 做法

  - Webpack only: 需分別設定&導出兩種檔案

  - Mix: Webpack包UMD格式, Rollup包ES Module