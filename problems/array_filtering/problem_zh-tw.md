有許多種方法可以對陣列進行操作。

一個常見的任務是過濾一個陣列使之僅包含特定的值。

使用 `.filter()` 方法可以達到這個目的。

下面是一個例子：

```js
const pets = ['cat', 'dog', 'elephant']

const filtered = pets.filter(function (pet) {
  return (pet !== 'elephant')
})
```

變數 `filtered` 現在僅包含 `cat` 和 `dog`。

## 挑戰：

建立一個名為 `array-filtering.js` 的檔案。

在該檔案中，定義一個名為 `numbers` 的變數，並賦予下面的值：

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

像上面的例子那樣，定義一個 `filtered` 變數，使它引用 `numbers.filter()` 的結果。

傳遞給 `.filter()` 方法的函式應該像下面這樣：

```js
function evenNumbers (number) {
  return number % 2 === 0
}
```

使用 `console.log()` 印出變數 `filtered` 陣列到終端機上。

執行下面的命令來檢查你撰寫的程式是否正確：

```bash
javascripting verify array-filtering.js
```
