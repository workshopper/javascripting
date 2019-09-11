为了让工作环境整洁有序，我们首先来创建一个文件夹。 

运行下面的这段命令来创建一个名为 `javascripting` 的文件夹（你也可以使用你喜欢的其它名字）：

```bash
mkdir javascripting
```

进入 `javascripting` 文件夹：

```bash
cd javascripting
```

创建一个名为 `introduction.js` 的文件：

非 Windows 用户，请执行 `touch introduction.js`；Windows 用户，请执行 `type NUL > introduction.js`（注意，`type` 也是这个命令的一部分！）

使用你最喜欢的编辑器，打开这个文件，然后将下面这行加入到文件中：

```js
console.log('hello')
```

保存文件，运行下面的命令来检查你的程序是否正确：

```bash
javascripting verify introduction.js
```
