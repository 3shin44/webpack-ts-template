# Webpack & TypeScript Environmental Template

## 使用需求

在前端環境中可使用HTML-script或ES-module導入

## 使用說明

- HTML-script

  - 導入
  
  ` <script src="./dist/bundle_umd.js"> `

  - 使用
  ` console.log( LibraryName.func() ) `

- ES-module

  - 導入-1 (適用: 導入所有函式)
  
  ` import * as LibraryName from "./dist/bundle_esm" `

  - 使用-1
  
  ` console.log( LibraryName.func() ) `

  - 導入-2 (適用: 導入單一函式)
  
  ` import { funcName } from "./dist/bundle_esm" `

  - 使用-2
  
  ` console.log( funcName() ) `

## 專案環境建置

- 安裝 `npm install`
 
## 開發說明

- 使用指引：開發檔案於src目錄下, 最終要輸出的資料請匯至index.ts檔案中

- 導出參數

  - BROWSER (UMD)

  設定LibraryName, 以便後續呼叫

  - ESM (ES Module)

  import * as LibName from '{pathToLib}'
  import LibName from '{pathToLib}'

- 打包: 執行對應語法`npm run build-all`, 匯出檔案於dist目錄下

  - 單獨打包使用對應語法即可


## 筆記

- 需求

  - 在前端環境中可使用HTML-script或ES-module導入

  - 在此需求下, 兩種匯入方式對應不同匯出語法, 此處可透過套件協助, 以達到"維護一套原始碼, 輸出不同格式"

- Webpack設定細節

  - output.library: 輸出格式類型, 詳見: https://webpack.js.org/configuration/output/#outputlibrary

  - webpacl.config.js 若設定為UMD格式, 應設定對應"LibraryName"

  - webpacl.config.js 若設定為ES6 module, 但要特別設定, 且目前為實驗性功能, 關鍵字: libraryTarget: 'module',   experiments: { outputModule: true }

  - 以NPM函式庫發布: 需在package.json指定函式庫格式, 但webpack預設會強制檢查到格式不符而中斷匯出, 若以NPM函式庫發布且要符合多格式匯入需求, 需討論以何種方式發布較適當

- 匯出格式工具類型對比
  
| 類型         | webpack                                           | rollup                     |
| ------------ | ------------------------------------------------- | -------------------------- |
| 適用場景     | 泛用, 複雜的網頁開發                              | 專精 JS 模組化             |
| 支援匯出語法 | 預設為 CommonJS, 同時內建其他語法                 | ES6                        |
| 匯出         | 依使用需求而定                                    | 匯出單獨模組且優化結果較好 |
| Tree Shaking | 基礎                                              | 佳, 且壓縮後體積通常較小   |
| 選擇建議     | 需較高相容性的環境, 複雜網頁元件(CSS, HTML...etc) | 專用 JS 模組               |
