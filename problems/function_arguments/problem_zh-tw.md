一個函式可以被宣告為接受任意數量的參數。參數可以是任意的型別，例如字串、數字、陣列、物件，甚至是另一個函式。

範例：

```js
function example (firstArg, secondArg) {
  console.log(firstArg, secondArg)
}
```

我們可以**呼叫**這個函式，並給它兩個參數：

```js
example('hello', 'world')
```

上面的程式碼將印出 `hello world` 到終端機上。

## 挑戰：

建立一個名為 `function-arguments.js` 的檔案。

在該檔案中，定義一個名為 `math` 的函式，它接受三個參數。你需要知道的是，參數的名字僅僅是用來引用它們的而已。

所以你可以給它們起任何你喜歡的名字。

`math` 所做的工作是，將第二個和第三個參數相乘，然後加上第一個參數，再將最後的結果回傳。

之後，使用 `console.log()` 呼叫並印出函式的執行結果。呼叫時，函式的第一個參數是 `53`，第二個參數是 `61`，第三個參數是 `67`。

執行下面的命令來檢查你撰寫的程式是否正確：

```bash
javascripting verify function-arguments.js
```
