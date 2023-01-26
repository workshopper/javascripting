Array-Elemente können über die Indexnummer aufgerufen werden.

Die Indexnummer beginnt bei Null und endet bei der Länge des Array-Properties minus eins.

Hier ist ein Beispiel:

```js
const pets = ['Katze', 'Hund', 'Ratte']

console.log(pets[0])
```

Der obige Code gibt das erste Element des Array pets aus - die Zeichenfolge Katze.

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
Die Herausforderung:

Erstelle eine Datei mit dem Namen accessing-array-values.js.

Definiere in dieser Datei das Array food:
```js
const food = ['Apfel', 'Pizza', 'Birne']
```
Verwende console.log(), um den zweiten Wert des Arrays in die Konsole auszugeben.

Überprüfe, ob dein Programm korrekt ist, indem du diesen Befehl ausführst:
```js
javascripting verify accessing-array-values.js
```