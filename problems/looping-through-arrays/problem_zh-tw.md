本次挑戰中，我們將使用一個 **for 迴圈**來存取並操作陣列中的值。

存取陣列可以使用一個整數輕易辦到。

陣列中的每項元素都有一個唯一的索引值，是一個由 `0` 開始的整數。

所以下面的陣列中，數字 `1` 標識了 `hi`：

```js
const greetings = ['hello', 'hi', 'good morning']
```

於是，`hi` 就可以像這樣被存取：

```js
greetings[1]
```

在 **for 迴圈**中，我們可以在中括號中使用變數 `i`，而不是直接地使用數字。

## 挑戰：

建立一個名為 `looping-through-arrays.js` 的檔案。

在該檔案中定義一個名為 `pets` 的變數，使它引用下面的陣列：

```js
['cat', 'dog', 'rat']
```

建立一個 for 迴圈，把陣列裡的每一個字串都變成複數單字（尾端加上s）。

在 for 迴圈裡，你可以使用下面的語句：

```js
pets[i] = pets[i] + 's'
```

最後，使用 `console.log()` 輸出 `pets` 陣列到終端機上。

執行下面的命令檢查你撰寫的程式是否正確：

```bash
javascripting verify looping-through-arrays.js
```
