實際工作中可能經常需要修改一個字串。

字串中包含一些內建的功能允許你查看並修改它們的內容。

這裡是一個使用 `.replace()` 方法的例子：

```js
let example = 'this example exists'
example = example.replace('exists', 'is awesome')
console.log(example)
```

為了改變 `example` 變數引用的值，我們需要再一次使用等號。這一次出現在等號右邊的是 `example.replace()` 方法。

## 挑戰：

建立一個名為 `revising-strings.js` 的檔案。

定義一個名為 `pizza` 的變數，並且賦予它字串 `'pizza is alright'`。

使用 `.replace()` 方法將 `alright` 替換為 `wonderful`。

用 `console.log()` 將 `.replace()` 方法的結果輸出到終端機上。

執行下面的命令來檢查你寫的程式是否正確：

`javascripting verify revising-strings.js`
