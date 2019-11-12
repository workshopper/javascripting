配列の要素には添え字を使ってアクセスできます。

添え字は `0` から `配列の長さ - 1` までの数です。

以下に例を示します...

```js
const pets = ['cat', 'dog', 'rat']

console.log(pets[0])
```

上記のコードは配列 `pets` の最初の要素、つまり文字列 `cat` を表示します。

配列の要素には角括弧を使うとアクセスできます。

有効な書き方

```js
console.log(pets[0])
```

ドット表記を使ってもアクセスできません。

無効な書き方

```
console.log(pets.1);
```

## やってみよう

`accessing-array-values.js` ファイルを作りましょう。

ファイルの中で、次の配列 `food` を定義します。
```js
const food = ['apple', 'pizza', 'pear']
```


`console.log()` を使って、配列の `2` 番目の値をターミナルに出力してください。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify accessing-array-values.js
```
