為了讓工作環境井然有序，我們首先來建立一個新資料夾。 

執行下面的這段命令來建立一個名為 `javascripting` 的資料夾（當然你也可以使用其他你喜歡的名字）：

```bash
mkdir javascripting
```

進入 `javascripting` 資料夾：

```bash
cd javascripting
```

建立一個名為 `introduction.js` 的檔案：

非 Windows 用戶，請執行 `touch introduction.js`；Windows 用戶，請執行 `type NUL > introduction.js`（注意，`type` 也是這個命令的一部分！）

使用你最喜歡的編輯器，打開這個檔案，然後將下面這行程式碼加入到檔案中：

```js
console.log('hello')
```

儲存檔案，執行下面的命令來檢查你的程式是否正確：

```bash
javascripting verify introduction.js
```
