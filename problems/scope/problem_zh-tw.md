`作用域` 就是你能訪問到的變數、物件以及函式的集合。

JavaScript 有兩種類型的作用域：`全域` 以及 `區域`。函式外宣告的變數是一個 `全域` 變數，它的值可以在整個程式中被存取和修改。函式內宣告的變數是 `區域` 的，它隨著函式的呼叫而被建立，再隨著函式的結束而被銷毀。它不能在函式以外被存取。

在函式中定義的函式，也叫巢狀函式，可以存取到外層函式的作用域。

注意下面的程式碼：

```js
const a = 4 // a 是一個全域變數，它可以被下面的函式存取

function foo () {
  const b = a * 3 // b 不能夠在 foo 函式以外被存取，但是可以被定義於 foo 內部的其他函式存取

  function bar (c) {
    const b = 2 // 另一個新的 `b` 變數被建立在 bar 函式的作用域內
    // 對這個新的 `b` 變數的改變並不會影響到舊的 `b` 變數
    console.log(a, b, c)
  }

  bar(b * 4)
}

foo() // 4, 2, 48
```
立即函式（IIFE, Immediately Invoked Function Expression）是用來建立區域作用域的常用方法。
範例：
```js
(function () { // 這個函式語法被一組小括號括起來
  // 在這裡定義的變數
  // 不能夠在這個函式外被存取
})() // 這個函式立即被執行
```
## 挑戰：

建立一個名為 `scope.js` 的檔案。

在該檔案中複製貼上以下的程式碼：
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

依你對 `作用域` 的理解，將下面這段程式碼插入上述程式碼裡，使得程式碼的輸出為 `a: 1, b: 8,c: 6`。
```js
console.log(`a: ${a}, b: ${b}, c: ${c}`)
```
