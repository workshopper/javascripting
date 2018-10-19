オブジェクトは、配列に似た値のリストです。配列と違い、各要素を整数ではなくキーで識別します。

たとえば...


```js
const foodPreferences = {
  pizza: 'yum',
  salad: 'gross'
}
```

## やってみよう


`objects.js` ファイルを作りましょう。


ファイルの中で、変数 `pizza` を次のようにして定義してください...

```js
const pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
}
```

`console.log()` を使って、 `pizza` オブジェクトをターミナルに表示しましょう。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう...

```bash
javascripting verify objects.js
```
