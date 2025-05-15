`undefined` と `null` はどちらも JavaScript におけるプリミティブ型の一つです。
この 2 値はまとめて "nullish value" とも呼ばれます。

`undefined` は存在しないプロパティや未指定の引数、返り値などに入る値です。

たとえば...

```js
{}.a; // -> undefined
[][0]; // -> undefined

function f(x) { return x }
f(); // -> undefined

function g() { return }
g(); // -> undefined
```

`null` は意図的にオブジェクトの値が存在しないことを表します。

## 違い

`null` と `undefined` の異なる点として `typeof` 演算子に渡した際の結果があります。

```js
typeof null; // -> "object"
typeof undefined; // -> "undefined"
```

どちらも偽値であり共通点も多いですが、異なる値であることに注意してください。

```js
null === undefined; // -> false
```

## 「`null` か `undefined` の場合」

課題「真偽値」の説明の中で、基本的には `==` ではなく `===` を使うよう説明しました。

しかし、「`null` か `undefined` の場合」という条件を書きたい場合には `==` の使用を許容するプロジェクトもあります。
`obj == null` または `obj == undefined` は `obj === null || obj === undefined` と同じ意味になり、短く書くことができるからです。

## Nullish Coalescing

変数などの値が nullish value の場合にのみデフォルト値を指定したい場合があります。
このときに `||` を使用すると、 `null` や `undefined` 以外の偽値 (`false` や `""` など) も上書きしてしまいます。

これを解決するために登場したのが nullish coalescing (`??`) です。

```js
const nullable1 = {};
nullable1 || "default"; // -> {}
nullable1 ?? "default"; // -> {}

const nullable2 = null;
nullable2 || "default"; // -> "default"
nullable2 ?? "default"; // -> "default"

const nullable3 = false;
nullable3 || "default"; // -> "default"
nullable3 ?? "default"; // -> false
```

`??` でも `&&` や `||` と同様に短絡評価が発生します。
(短絡評価を忘れた場合は、課題「真偽値」の説明を読み直しましょう。)

## やってみよう

`null` と `undefined` の性質を整理するために、ドリルを解きましょう。

`null-undefined.js` ファイルを作り、以下のコードをコピーしてください。

```js
const obj = {};
console.log(obj.a === "<fill here>");

const arr = [];
console.log(arr[0] === "<fill here>");

const id = (x) => x;
console.log(id() === "<fill here>");

const noop = () => {};
console.log(noop() === "<fill here>");

console.log(typeof null === "<fill here>");
console.log(typeof undefined === "<fill here>");

console.log((obj || "default") === "<fill here>");
console.log((obj ?? "default") === "<fill here>");

console.log((undefined || "default") === "<fill here>");
console.log((undefined ?? "default") === "<fill here>");

console.log((false || "default") === "<fill here>");
console.log((false ?? "default") === "<fill here>");
```

全ての `console.log` による出力が `true` となるように、`'<fill here>'` と書かれた場所を書き換えてください。 (文字列である必要はありません。)

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify null-undefined.js
```
