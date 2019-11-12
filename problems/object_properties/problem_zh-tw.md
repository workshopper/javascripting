你可以使用與存取和操作陣列非常類似的方法來存取和操作物件的屬性——屬性就是物件所包含的鍵和值的對。

這裡是一個使用**中括號**的例子：

```js
const example = {
  pizza: 'yummy'
}

console.log(example['pizza'])
```

上面的例子將印出 `'yummy'` 到終端機上。

你也可以使用**點**來得到相同的結果：

```js
example.pizza

example['pizza']
```

上面的兩行程式碼都會返回 `yummy`。

## 挑戰：

建立一個名為 `object-properties.js` 的檔案。

在該檔案中，像這樣定義一個名為 `food` 的變數：

```js
const food = {
  types: 'only pizza'
}
```

使用 `console.log()` 印出 `food` 物件的 `types` 屬性到終端機上。

執行下面的命令來檢查你寫的程式是否正確：

```bash
javascripting verify object-properties.js
```
