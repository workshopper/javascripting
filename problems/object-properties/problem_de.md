Du kannst auf Objekteigenschaften zugreifen und sie manipulieren –– die Schlüssel und Werte, die ein Objekt enthält –– indem du eine Methode verwendest, die sehr ähnlich zu Arrays ist.

Hier ist ein Beispiel mit **eckigen Klammern**:

```js
const example = {
  pizza: 'yummy'
}

console.log(example['pizza'])
```

Der obige Code wird den String `'yummy'` auf der Konsole ausgeben.

Alternativ kannst du **Punkt-Notation** verwenden, um identische Ergebnisse zu erzielen:

```js
example.pizza

example['pizza']
```

Die beiden Codezeilen oben geben beide `yummy` zurück.

## Die Aufgabe:

Erstelle eine Datei mit dem Namen `object-properties.js`.

Definiere in dieser Datei eine Variable namens `food` wie folgt:

```js
const food = {
  types: 'only pizza'
}
```

Verwende `console.log()`, um die Eigenschaft `types` des `food`-Objekts auf der Konsole auszugeben.

Überprüfe, ob dein Programm korrekt ist, indem du folgenden Befehl ausführst:

```bash
javascripting verify object-properties.js
```
