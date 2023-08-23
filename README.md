# Webpack & TypeScript Environmental Template

## Init

1. npm install
 
## Usage



## Project Structure


## CMDs of packjson


## Note

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
- 
  UMD為兼容前後端語法(Node.js, AMD, Window/Global), 輸出時需多設定` globalObject: 'this' `, 不過本專案多為前端使用, 確認無後端需求後可考慮改為純前端語法ES6 module ` libraryTarget: 'module' `