オブジェクトのプロパティの値を取得したり変更したりできます。
プロパティはオブジェクトに含まれるキーと値の組み合わせです。
オブジェクトのプロパティは配列とよく似た方法で操作します。

次の例のように角括弧を使います...

```js
const example = {
  pizza: 'yummy'
}

console.log(example['pizza'])
```

上のコードは、 `'yummy'` とターミナルに出力します。

別のやりかたとして、ドット記法を使って同じ結果を得ることもできます...

```js
example.pizza

example['pizza']
```

上の二つの行は、両方とも `yummy` という値を返します。

## やってみよう


`object-properties.js` ファイルを作りましょう。


ファイルの中で、変数 `food` を次のように定義してください...

```js
const food = {
  types: 'only pizza'
}
```

`console.log()` を使って、 `food` オブジェクトの `types` プロパティをターミナルに表示しましょう。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify object-properties.js
```
