このワークショップで使うディレクトリを作りましょう。

次のコマンドを実行して、`javascripting` ディレクトリを作ります。

```bash
mkdir javascripting
```

`javascripting` ディレクトリに移動しましょう。

```bash
cd javascripting
```

`introduction.js` という名前のファイルを作成します。

macOS または Linux の場合：

```bash
touch introduction.js
```

Windows PowerShell の場合：

```powershell
New-Item introduction.js -ItemType File
```

Windows のコマンドプロンプト（`cmd.exe`）の場合：

```bat
type NUL > introduction.js
```

テキストエディタから直接ファイルを作成しても構いません。その場合は UTF-8 で保存してください。

お好みのエディタでファイルを開きます。次の文を書き足しましょう。

```js
console.log('hello')
```

ファイルを保存します。次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
javascripting verify introduction.js
```
