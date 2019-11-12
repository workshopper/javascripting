一个函数可以被声明为接受任意数量的参数。参数可以是任意的类型，例如字符串，数字，数组，对象，甚至另一个函数。

例子：

```js
function example (firstArg, secondArg) {
  console.log(firstArg, secondArg)
}
```

我们可以**调用**这个函数，并给它两个参数：

```js
example('hello', 'world')
```

上面的代码将打印 `hello world` 到终端。

## 挑战：

创建名为 `function-arguments.js` 的文件。

在文件中，定义一个名为 `math` 的函数，它接受三个参数。你需要知道的是，参数的名字仅仅是用来引用它们的而已。

所以你可以给它们起任何你喜欢的名字。

`math` 所做的工作是，将第二个和第三个参数相乘，然后加上第一个参数，将最后的结果返回。

之后，使用 `console.log()` 调用并打印出函数的结果。调用时，函数的第一个参数是 `53`，第二个参数是 `61`，第三个参数是 `67`。

运行下面的命令检查你的程序是否正确：

```bash
javascripting verify function-arguments.js
```
