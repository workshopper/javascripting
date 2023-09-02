Für diese Aufgabe werden wir eine **For-Schleife** verwenden, um auf eine Liste von Werten in einem Array zuzugreifen und diese zu manipulieren.

Der Zugriff auf Array-Werte kann mit einem Integer erfolgen.

Jedes Element in einem Array wird durch eine Nummer identifiziert, die bei `0` beginnt.

In diesem Array wird `hi` also durch die Nummer `1` identifiziert:

```js
const greetings = ['Hallo', 'Hi', 'Guten Morgen']
```

Es kann so aufgerufen werden:

```js
greetings[1]
```

Daher verwenden wir in einer **For-Schleife** die Variable `i` innerhalb der eckigen Klammern anstatt direkt einen Integer zu verwenden.

## Die Aufgabe:

Erstelle eine Datei mit dem Namen `looping-through-arrays.js`.

Definiere in dieser Datei eine Variable mit dem Namen pets, die auf folgendes Array verweist:

```js
['cat', 'dog', 'rat']
```

Erstelle eine Schleife, die jeden String im Array so verändert, dass er im Plural steht.
Du wirst innerhalb der Schleife folgende Anweisung verwenden:

```js
pets[i] = pets[i] + 's'
```

Verwende nach der Schleife `console.log()`, um das Array `pets` im Terminal auszugeben.
Überprüfe, ob dein Programm korrekt funktioniert, indem du folgenden Befehl ausführst:

```bash
javascripting verify looping-through-arrays.js
```