函式就是一段程式碼，這段程式碼將輸入處理，然後產生輸出。

範例：

```js
function example (x) {
  return x * 2
}
```

我們可以像下面這樣**呼叫**這個函式，得到數字 10：

```js
example(5)
```

上面的這段程式碼裡，`example` 函式將一個數字作為參數——也就是輸入——然後返回那個數字乘以 2 的結果。

## 挑戰：

建立一個名為 `functions.js` 的檔案。

在該檔案中，定義一個名為 `eat` 的函式，其參數名為 `food`，型別為 `string`。

在函式中將 `food` 參數處理後像下面這樣返回：

```js
return food + ' tasted really good.'
```

在 `console.log()` 的括號中，呼叫 `eat()` 函式，並把字串 `bananas` 當做參數傳遞給它。

執行下面的命令檢查你撰寫的程式是否正確：

```bash
javascripting verify functions.js
```
