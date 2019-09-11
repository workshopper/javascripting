有许多种方法可以对数组进行操作。

一个常见的任务是过滤一个数组使之仅包含特定的值。

使用 `.filter()` 方法可以达到这个目的。

下面是一个例子：

```js
const pets = ['cat', 'dog', 'elephant']

const filtered = pets.filter(function (pet) {
  return (pet !== 'elephant')
})
```

变量 `filtered` 现在仅包含 `cat` 和 `dog`。

## 挑战：

创建名为 `array-filtering.js` 的文件。

在文件中，定义一个名为 `numbers` 的变量，并赋予下面的值：

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

像上面的例子那样，定义一个 `filtered` 变量，使它引用 `numbers.filter()` 的结果。

传递给 `.filter()` 方法的函数应该像下面这样：

```js
function evenNumbers (number) {
  return number % 2 === 0
}
```

使用 `console.log()` 打印变量 `filtered` 数组到终端。

运行下面的命令来检查你的程序是否正确：

```bash
javascripting verify array-filtering.js
```
