变量就是一个可以引用具体值的名字。变量通过使用 `let` 及紧随其后的变量名来声明。

下面是一个例子：

```js
let example
```

这个例子里的变量被**声明**，但是没有被定义（也就是说，它目前还没有引用一个值）。

下面是一个定义变量的例子，这样变量将会有一个值：


```js
const example = 'some string'
```

# 注 

变量通过 `let` 来**声明**，并通过等号来**定义**它的值。这也就是经常提到的“让一个变量等于一个值（变量赋值）”。

## 挑战：

创建一个名为 `variables.js` 的文件。

在文件中声明一个名为 `example` 的变量。

**让变量 `example` 等于值 `'some string'`。**

然后使用 `console.log()` 打印 `example` 变量到控制台。

运行下面的命令来检查你的程序是否正确：

`javascripting verify variables.js`
