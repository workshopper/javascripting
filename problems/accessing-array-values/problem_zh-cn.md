数组中的元素可以通过一个索引值来访问。

索引值就是一个整数，从 0 开始一直到数组的长度减一。

下面是一个例子：

```js
const pets = ['cat', 'dog', 'rat']

console.log(pets[0])
```

上面的代码将打印出 `pets` 数组的第一个元素，也就是字符串 `cat`。

数组元素必须通过方括号来访问。

英文句号的方式将会导致错误。

这是一个正确的例子：

```js
console.log(pets[0])
```

下面的用法是错误的：
```
console.log(pets.1);
```

## 挑战：

创建一个名为 `accessing-array-values.js` 的文件。

在文件中定义一个数组 `food`：
```js
const food = ['apple', 'pizza', 'pear']
```

使用 `console.log()` 打印数组的第二个值到终端。

运行下面的命令来检查你的程序是否正确：

```bash
javascripting verify accessing-array-values.js
```
