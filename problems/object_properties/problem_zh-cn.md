你可以使用与访问和操作数组非常类似的方法来访问和操作对象的属性——属性就是对象所包含的键和值的对。

这里是一个使用**方括号**的例子：

```js
const example = {
  pizza: 'yummy'
}

console.log(example['pizza'])
```

上面的例子将打印出 `'yummy'` 到终端。

你也可以使用**英文句号**来得到相同的结果：

```js
example.pizza

example['pizza']
```

上面的两行代码都会返回 `yummy`。

## 挑战：

创建名为 `object-properties.js` 的文件。

在文件中，像这样定义名为 `food` 的变量：

```js
const food = {
  types: 'only pizza'
}
```

使用 `console.log()` 打印 `food` 对象的 `types` 属性到终端。

运行下面的命令来检查你的程序是否正确：

```bash
javascripting verify object-properties.js
```
