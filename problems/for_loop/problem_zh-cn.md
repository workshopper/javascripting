For 循环看起来是这样的：

```js
for (let i = 0; i < 10; i++) {
  // log the numbers 0 through 9
  console.log(i)
}
```

变量 `i` 被用来记录循环已经运行了多少次。

语句 `i < 10;` 指明了循环的上限。
如果 `i` 小于 `10`，循环将继续进行。

语句 `i++` 每次循环后将变量 `i` 的值加一。

## 挑战：

创建一个名为 `for-loop.js` 的文件。

在文件中定义一个名为 `total` 的变量，让它等于 `0`。

再定义第二个名为 `limit` 的变量，让它等于 `10`。

创建一个 for 循环。使用变量 `i`，初始值为 0，每次循环将其值加一。只要 `i` 小于 `limit`，循环就应该一直运行。

每次循环中，将 `i` 加到 `total` 上。你可以这样做：

```js
total += i
```

For 循环结束后，使用 `console.log()` 打印 `total` 变量到终端。

运行下面的命令来检查你的程序是否正确：

```bash
javascripting verify for-loop.js
```
