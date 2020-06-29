JavaScriptはオブジェクトの利用可能なキーを全て列挙する方法を提供しています．これは，ループ処理によってオブジェクトに応じた値の操作に役立ちます．

これは **Object.keys()** を使って全てのオブジェクトのキーを列挙する例です．

```js
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}
const keys = Object.keys(car)

console.log(keys)
```

上記のコードでは，文字列の配列が表示されます．各文字列はオブジェクトのキーです． `['make', 'model', 'year']`

## やってみよう

`object-keys.js`ファイルを作りましょう．

ファイルの中で，変数`car`を定義します．

```js
const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
```

そして，別の変数`keys`を定義します．
```js
const keys = Object.keys(car)
```

`console.log()`を使って，変数`keys` をターミナルに表示しましょう．

次のコマンドを実行し，あなたのプログラムが正しく動くか確認しましょう．

```bash
javascripting verify object-keys.js
```

