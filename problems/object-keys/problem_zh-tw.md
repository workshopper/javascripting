JavaScript 提供了一種原生的方式，用來列出物件（object）的所有鍵（keys）。當你需要遍歷物件的所有屬性並據此操作它們的值時，這會很有用。

下面是一個使用 **Object.keys()** 原型方法來列出物件所有鍵的範例。

```js
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}
const keys = Object.keys(car)

console.log(keys)
```

上面的程式碼會印出一個字串陣列，其中每個字串都是 car 物件中的一個鍵。`['make', 'model', 'year']`

## 挑戰任務：

建立一個名為 `object-keys.js` 的檔案。

在該檔案中，像這樣定義一個名為 `car` 的變數：

```js
const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
```

然後像這樣定義另一個名為 `keys` 的變數：
```js
const keys = Object.keys(car)
```

使用 `console.log()` 將 `keys` 變數印到終端機。

透過執行以下指令來檢查你的程式是否正確：

```bash
javascripting verify object-keys.js
```
