实际工作中可能经常需要修改一个字符串。

字符串中包含一些内建的功能允许你查看并修改它们的内容。

这里是一个使用 `.replace()` 方法的例子：

```js
let example = 'this example exists'
example = example.replace('exists', 'is awesome')
console.log(example)
```

为了改变 `example` 变量引用的值，我们需要再一次使用等号。这一次出现在等号右边的是 `example.replace()` 方法。

## 挑战：

创建一个名为 `revising-strings.js` 的文件。

定义一个名为 `pizza` 的变量，并且让它引用字符串 `'pizza is alright'`。

使用 `.replace()` 方法将 `alright` 替换为 `wonderful`。

用 `console.log()` 将 `.replace()` 方法的结果打印到终端。

运行下面的命令来检查你的程序是否正确：

`javascripting verify revising-strings.js`
