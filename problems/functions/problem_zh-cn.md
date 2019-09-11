函数就是一大段代码，这段代码将输入处理，然后产生输出。

例子：

```js
function example (x) {
  return x * 2
}
```

我们可以像下面这样**调用**这个函数，得到数字 10：

```js
example(5)
```

上面的这段代码里，`example` 函数将一个数字作为参数——也就是输入——然后返回那个数字乘以 2 的结果。

## 挑战：

创建一个名为 `functions.js` 的文件。

在文件中，定义一个名为 `eat` 的函数，其参数名为 `food`，类型为 `string`。

在函数中将 `food` 参数处理后像下面这样返回：

```js
return food + ' tasted really good.'
```

在 `console.log()` 的括号中，调用 `eat()` 函数，并把字符串 `bananas` 当做参数传递给它。

运行下面的命令检查你的程序是否正确：

```bash
javascripting verify functions.js
```
