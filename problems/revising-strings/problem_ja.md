文字列の中身を書き換えたいことがあります。

文字列には用意された機能があります。文字列の中身を調べたり、書き換えたりできます。

たとえば `.replace()` メソッドは次のように使います...

```js
let example = 'this example exists'
example = example.replace('exists', 'is awesome')
console.log(example)
```

等号を使って `example` 変数を、もう一度変更することに注意してください。
上の例では等号の右に `example.replace()` を書きました。

## やってみよう

`revising-strings.js` ファイルを作りましょう。

ファイルの中で、文字列は `'pizza is alright'` を表す、変数 `pizza` を定義します。

`.replace()` メソッドを使って、 `alright` を `wonderful` に変更します。

`console.log()` を使い、`.replace()` の結果をコンソールに表示します。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

`javascripting verify revising-strings.js`
