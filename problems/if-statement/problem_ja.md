条件文を使って、次に実行する文を変更します。プログラムの流れを変更できます。条件は真理値で指定します。

たとえば...

```js
if (n > 1) {
  console.log('the variable n is greater than 1.')
} else {
  console.log('the variable n is less than or equal to 1.')
}
```

カッコの間に論理式を指定します。論理式の結果は真か偽である必要があります。

`else` ブロックはつけても、つけなくても構いません。つけた場合は、論理式の結果が偽の時に実行されます。

## やってみよう

`if-statement.js` ファイルを作りましょう。

ファイルの中で、変数 `fruit` を定義しましょう。

変数 `fruit` は**文字列型**の**orange**を表します。

`fruit` の文字数が5より大きかったら、console.log() を使い、**The fruit name has more than five characters.**をターミナルに表示しましょう。
そうでなければ**The fruit name has five characters or less.**を表示しましょう。

次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify if-statement.js
```
