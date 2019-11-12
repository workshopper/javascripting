我们可以对数字进行一些基本的数学运算，比如 `+`，`-`，`*`，`/`，和 `%`。

对于更复杂的数学运算，我们需要使用 `Math` 对象。

这个挑战中我们将要使用 `Math` 对象来对数字进行取整。

## 挑战：

创建一个名为 `rounding-numbers.js` 的文件。

在文件中定义名为 `roundUp` 的变量，并赋值浮点数 `1.5`。

下面就要使用 `Math.round()` 方法来对这个数进行向上取整。

`Math.round()` 的例子：

```js
Math.round(0.5)
```

再定义一个名为 `rounded` 的变量，让它引用 `Math.round()` 的结果。将 `roundUp` 作为参数传递。

使用 `console.log()` 打印结果到终端。

运行下面的命令检查你的程序是否正确：

```bash
javascripting verify rounding-numbers.js
```
