For 迴圈看起來是這樣的：

```js
for (let i = 0; i < 10; i++) {
  // log the numbers 0 through 9
  console.log(i)
}
```

變數 `i` 被用來記錄迴圈已經運行了多少次。

條件式 `i < 10;` 指明了迴圈的上限。
如果 `i` 小於 `10`，迴圈將繼續進行。

語句 `i++` 代表每次迴圈後將變數 `i` 的值加一。

## 挑戰：

建立一個名為 `for-loop.js` 的檔案。

在該檔案中定義一個名為 `total` 的變數，讓它等於 `0`。

再定義第二個名為 `limit` 的變數，讓它等於 `10`。

建立一個 for 迴圈。使用變數 `i`，初始值為 0，每次迴圈將其值加一。只要 `i` 小於 `limit`，迴圈就應該一直運行。

每次迴圈中，將 `i` 加到 `total` 上。你可以這樣做：

```js
total += i
```

For 迴圈結束後，使用 `console.log()` 印出 `total` 變數的值到終端機上。

執行下面的命令來檢查你撰寫的程式是否正確：

```bash
javascripting verify for-loop.js
```
