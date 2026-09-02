JavaScript 提供了一种原生的方式，用来列出对象的所有键（keys）。当你需要遍历对象的所有属性并相应地操作它们的值时，这会很有用。

下面是一个使用 **Object.keys()** 原型方法来列出对象所有键的例子。

```js
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}
const keys = Object.keys(car)

console.log(keys)
```

上面的代码会打印一个字符串数组，其中每个字符串都是 car 对象中的一个键。`['make', 'model', 'year']`

## 挑战任务：

创建一个名为 `object-keys.js` 的文件。

在该文件中，像这样定义一个名为 `car` 的变量：

```js
const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
```

然后像这样定义另一个名为 `keys` 的变量：
```js
const keys = Object.keys(car)
```

使用 `console.log()` 将 `keys` 变量打印到终端。

通过运行以下命令来检查你的程序是否正确：

```bash
javascripting verify object-keys.js
```
