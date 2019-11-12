條件語句基於一個特定的布林（Boolean）值來改變程序的流程。

條件語句長得像下面這樣：

```js
if (n > 1) {
  console.log('the variable n is greater than 1.')
} else {
  console.log('the variable n is less than or equal to 1.')
}
```

在括號中你必須輸入一個邏輯判斷語句，這個邏輯判斷語句的結果不是true（真）就是false（假）。

`else` 語句區塊是可選的，包含了一旦邏輯語句結果為false時需要被執行的程式碼。

## 挑戰：

建立一個名為 `if-statement.js` 的檔案。

在該檔案中，宣告一個名為 `fruit` 的變數。

給 `fruit` 變數賦予 **字串** 型別的值 **orange**。

接下來要使用 `console.log()`。如果 `fruit` 值的長度大於五，印出 "**The fruit name has more than five characters.**"；否則就印出 "**The fruit name has five characters or less.**"

執行下面的命令檢查你撰寫的程式是否正確：

```bash
javascripting verify if-statement.js
```
