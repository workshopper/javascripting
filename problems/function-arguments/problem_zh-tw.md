一個函數可以被聲明為接受任意數量的參數。參數可以是任意的類型，例如字串、數字、陣列、物件，甚至是另一個函數。

例子：

```js
function example (firstArg, secondArg) {
  console.log(firstArg, secondArg);
}
```

我們可以**呼叫**這個函數，並給它兩個參數：

```js
example('hello', 'world');
```

上面的程式碼將印出 `hello world` 到終端。

## 挑戰：

創建名為 `function-arguments.js` 的檔案。

在檔案中，定義一個名為 `math` 的函數，它接受三個參數。你需要知道的是，參數的名字僅僅是用來引用它們的而已。

所以你可以給它們起任何你喜歡的名字。

`math` 所做的工作是，將第二個和第三個參數相乘，然後加上第一個參數，再將最後的結果回傳。

之後，使用 `console.log()` 呼叫並印出函數的執行結果。呼叫時，函數的第一個參數是 `53`，第二個參數是 `61`，第三個參數是 `67`。

執行下面的命令來檢查你撰寫的程式是否正確：

```bash
javascripting verify function-arguments.js
```
