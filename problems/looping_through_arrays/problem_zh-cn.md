本次挑战中，我们将使用一个 **for 循环**来访问并操作数组中的值。

访问数组可以使用一个整数轻易办到。

数组中的每一项都被一个从 `0` 开始的整数唯一标识。

所以下面的数组中，数字 `1` 标识了 `hi`：

```js
const greetings = ['hello', 'hi', 'good morning']
```

于是，`hi` 就可以像这样被访问：

```js
greetings[1]
```

在 **for 循环**中，我们可以在方括号中使用变量 `i`，而不是直接地使用数字。

## 挑战：

创建一个名为 `looping-through-arrays.js` 的文件。

在文件中定义一个变量 `pets`，使它引用下面的数组：

```js
['cat', 'dog', 'rat']
```

创建一个 for 循环，把数组里的每一个字符串都变成复数。

在 for 循环里，你可以使用下面的语句：

```js
pets[i] = pets[i] + 's'
```

最后，使用 `console.log()` 打印 `pets` 数组到终端。

运行下面的命令检查你的程序是否正确：

```bash
javascripting verify looping-through-arrays.js
```
