「スコープ」は参照できる変数・オブジェクト・関数の集合です。

JavaScriptには、二つのスコープがあります。グローバルとローカルです。
関数定義の外側で定義した変数はグローバルスコープです。プログラムのどこからでも参照して変更することができます。
関数定義の内側で定義した変数はローカルスコープです。関数が実行されるときに作られ、関数が終了すると破棄されます。
関数外のプログラムからは参照できません。

他の関数の中で定義した関数を「ネストした関数」と呼びます。「ネストした関数」からは親関数のスコープを参照できます。

次のソースコードのコメントを読んでください...

```js
const a = 4 // a はグローバル変数です。下の全ての関数から参照できます。

function foo () {
  const b = a * 3 // b は foo 関数の外からは参照できません。 foo 関数の中で定義した関数 bar からは参照できます。

  function bar (c) {
    const b = 2 // bar 関数の中でもう一つ b 変数を定義します
    // 新しい b を変更しても、元の b 変数は変わりません。
    console.log(a, b, c)
  }

  bar(b * 4)
}

foo() // 4, 2, 48
```

即時実行関数式 (Immediately Invoked Function Expression : IIFE) という共通パターンで、ローカルスコープを作れます。
例えば...

```js
(function () { // 関数式をカッコで括ります
  // 変数はここで定義します
  // 関数の外からは参照できません
})() // 関数を即座に実行します
```

## やってみよう

`scope.js`ファイルを作りましょう。
ファイルの中に、次のソースコードをコピーしましょう...

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

変数のスコープを活用しましょう。次のコードを関数の中に配置してください。`scope.js` の中の関数です。
そして、目指す出力は `a: 1, b: 8,c: 6` です。

```js
console.log(`a: ${a}, b: ${b}, c: ${c}`);
```
