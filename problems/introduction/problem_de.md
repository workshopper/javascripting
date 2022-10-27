Damit alles seine Ordnung hat, erstellen wir zuerst einen Ordner für diesen Workshop.

Führe diesen Befehl in der Konsole aus, um ein Verzeichnis mit dem Namen `javascripting` zu erstellen (oder etwas anderes, wenn du möchtest):

```bash
mkdir javascripting
```

Wechsel in das Verzeichnis `javascripting`:

```bash
cd javascripting
```

Erstelle eine Datei mit dem Namen `introduction.js`:

```bash
touch introduction.js
```

Oder, für Windows: 
```bash
type NUL > introduction.js
```
(`type` ist Teil des Befehls!)

Öffnen die Datei in deinem bevorzugten Editor und füge diesen Text ein:

```js
console.log('hello')
```

Speicher die Datei und überprüfen dann, ob dein Programm korrekt ist, indem du diese Befehl ausführst:

```bash
javascripting verify introduction.js
```

Übrigens, in diesem Tutorial kannst du der Datei, mit der du arbeitest, jeden beliebigen Namen geben.
Wenn du also für jede Übung eine Datei Namens `catsAreAwesome.js` verwenden möchtest, kannst du das tun.
Stelle dann sicher, dass du immer diesen Befehl ausführst:

```bash
javascripting verify catsAreAwesome.js
```

