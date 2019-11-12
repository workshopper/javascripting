我們可以對數字進行一些基本的數學運算，比如 `+`，`-`，`*`，`/`，和 `%`。

對於更複雜的數學運算，我們需要使用 `Math` 物件。

這個挑戰中我們將要使用 `Math` 物件來對數字進行取整。

## 挑戰：

建立一個名為 `rounding-numbers.js` 的檔案。

在該檔案中定義一個名為 `roundUp` 的變數，並賦值浮點數 `1.5`。

下面就要使用 `Math.round()` 方法來對這個數進行向上取整。

`Math.round()` 的例子：

```js
Math.round(0.5)
```

再定義一個名為 `rounded` 的變數，讓它引用 `Math.round()` 的結果。將 `roundUp` 作為參數傳遞。

使用 `console.log()` 印出結果到終端機上。

執行下面的命令檢查你寫的程式是否正確：

```bash
javascripting verify rounding-numbers.js
```
