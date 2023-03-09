JavaScript bietet eine native Möglichkeit, alle verfügbaren Schlüssel/Keys eines Objekts aufzulisten. Dies kann nützlich sein, um durch alle Eigenschaften eines Objekts zu iterieren und ihre Werte entsprechend zu manipulieren.

Hier ist ein Beispiel zum Auflisten aller Objektschlüssel mit der Methode des Prototyps **Object.keys()**:

```js
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}
const keys = Object.keys(car)

console.log(keys)
```

Der obige Code gibt ein Array von Strings aus, wobei jeder String ein Key im `car`-Objekt ist. `['make', 'model', 'year']`

## Die Aufgabe:

Erstelle eine Datei mit dem Namen `object-keys.js`.

Definiere in dieser Datei eine Variable namens `car` wie folgt:

```js
const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
```

Definiere dann eine weitere Variable namens `keys` wie folgt:
```js
const keys = Object.keys(car)
```

Verwende `console.log()`, um die Variable `keys` auf der Konsole auszugeben.

Überprüfe, ob dein Programm korrekt ist, indem du diesen Befehl ausführst:

```bash
javascripting verify object-keys.js
```
