Array-Elemente können über die Indexnummer aufgerufen werden.

Die Indexnummer beginnt bei Null und endet bei der Länge des Array-Properties minus eins.

Hier ist ein Beispiel:

```js
const pets = ['cat', 'dog', 'rat']

console.log(pets[0])
```

Der obige Code gibt das erste Element des Array `pets` aus - die Zeichenfolge `cat`.

Array-Elemente können ausschließlich über die Klammernotation aufgerufen werden.

Die Punktnotation ist ungültig.

Gültige Notation:

```js
console.log(pets[0])
```

Ungültige Notation:

```js
console.log(pets.1);
```

## Die Aufgabe:

Erstelle eine Datei mit dem Namen `accessing-array-values.js`.

Definiere in dieser Datei das Array food:

```js
const food = ['apple', 'pizza', 'pear']
```

Verwende `console.log()`, um den `zweiten` Wert des Arrays auf der Konsole auszugeben.

Überprüfe, ob dein Programm korrekt ist, indem du diesen Befehl ausführst:

```bash
javascripting verify accessing-array-values.js
```