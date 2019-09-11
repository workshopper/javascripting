`作用域` 就是你能访问到的变量、对象以及函数的集合。

JavaScript 有两种类型的作用域：`全局` 以及 `局部`。函数外声明的变量是一个 `全局` 变量，它的值可以在整个程序中被访问和修改。函数内声明的变量是 `局部` 的，它随着函数的调用而被创建，随着函数的结束而被销毁。它不能在函数外被访问。

在函数中定义的函数，也叫嵌套函数，可以访问到外层函数的作用域。

注意下面的代码：

```js
const a = 4 // a is a global variable, it can be accesed by the functions below

function foo () {
  const b = a * 3 // b cannot be accesed outside foo function, but can be accesed by functions
  // defined inside foo
  function bar (c) {
    const b = 2 // another `b` variable is created inside bar function scope
    // the changes to this new `b` variable don't affect the old `b` variable
    console.log(a, b, c)
  }

  bar(b * 4)
}

foo() // 4, 2, 48
```
立即函式（IIFE, Immediately Invoked Function Expression）是用来创建局部作用域的常用方法。
例子：
```js
(function () { // the function expression is surrounded by parenthesis
  // variables defined here
  // can't be accesed outside
})() // the function is immediately invoked
```
## 挑战：

创建名为 `scope.js` 的文件。

在文件中复制粘贴下面的代码：
```js
const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;

    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8
      })()
    })()
  })()
})()
```

依你对 `作用域` 的理解，将下面这段代码插入上述代码里，使得代码的输出为 `a: 1, b: 8,c: 6`。
```js
console.log(`a: ${a}, b: ${b}, c: ${c}`)
```
