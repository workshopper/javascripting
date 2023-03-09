Eine Funktion ist ein Block von Code, der eine Eingabe entgegennimmt, diese Eingabe verarbeitet und dann eine Ausgabe produziert.

Hier ist ein Beispiel:

```js
function example (x) {
  return x * 2
}
```

Wir können diese Funktion wie folgt **aufrufen**, um die Zahl 10 zu erhalten:

```js
example(5)
```

Das obige Beispiel geht davon aus, dass die Funktion `example` eine Zahl als Argument -- als Eingabe -- entgegennimmt und diese Zahl mit 2 multipliziert zurückgibt.

## Die Aufgabe:

Erstelle eine Datei namens `functions.js`.

Definiere in dieser Datei eine Funktion namens `eat`, die ein Argument namens `food` annimmt und erwartet, dass es sich dabei um einen String handelt.

Gib innerhalb der Funktion das `food`-Argument auf folgende Weise zurück:

```js
return food + ' tasted really good.'
```

Rufe die `eat()`-Funktion mit dem String `bananas` als Argument innerhalb der Klammern von `console.log()` auf.

Überprüfe, ob dein Programm korrekt ist, indem du diesen Befehl ausführst:

```bash
javascripting verify functions.js
```
