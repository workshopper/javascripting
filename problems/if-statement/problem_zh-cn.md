条件语句基于一个特定的布尔值（即要么为真要么为假的值）来改变程序的控制流。

条件语句长得像下面这样：

```js
if (n > 1) {
  console.log('the variable n is greater than 1.')
} else {
  console.log('the variable n is less than or equal to 1.')
}
```

在括号中你必须输入一个逻辑判断语句，这个逻辑判断语句的结果必须要么为真要么为假。

`else` 语句块是可选的，包含了一旦逻辑语句结果为假时需要被执行的语句。

## 挑战：

创建一个名为 `if-statement.js` 的文件。

在文件中，声明一个名为 `fruit` 的变量。

给 `fruit` 变量赋给**字符串**类型的值 **orange**。

接下来要使用 `console.log()`。如果 `fruit` 值的长度大于五，打印出 "**The fruit name has more than five characters.**"；否则，打印出 "**The fruit name has five characters or less.**"

运行下面的命令检查你的程序是否正确：

```bash
javascripting verify if-statement.js
```
