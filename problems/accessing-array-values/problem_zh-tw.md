陣列中的元素可以通過一個索引值來訪問。

索引值就是一個整數，從 0 開始一直到陣列的長度減一。

下面是一個例子：

```js
const pets = ['cat', 'dog', 'rat']

console.log(pets[0])
```

上面的程式碼將印出 `pets` 陣列的第一個元素，也就是字串 `cat`。

陣列元素必須通過中括號來訪問。

英文句號的方式將會導致錯誤。

這是一個正確的例子：

```js
console.log(pets[0])
```

下面的用法是錯誤的：
```
console.log(pets.1);
```

## 挑戰：

建立一個名為 `accessing-array-values.js` 的檔案。

在該檔案中定義一個陣列 `food`：
```js
const food = ['apple', 'pizza', 'pear']
```

使用 `console.log()` 印出陣列中的 `第二個` 值。

執行下面的命令來檢查你的程式是否正確：

```bash
javascripting verify accessing-array-values.js
```
