Auf Array-Elemente kann über die Indexnummer zugegriffen werden.

Die Indexnummer beginnt bei Null bis zur Eigenschaftslänge des Arrays minus eins.

Hier ist ein Beispiel:


```js
const pets = ['Katze', 'Hund', 'Ratte']

console.log(Haustiere[0])
```

Der obige Code druckt das erste Element des Arrays „Haustiere“ – die Zeichenfolge „Katze“.

Auf Array-Elemente darf nur über die Klammernotation zugegriffen werden.

Die Punktnotation ist ungültig.

Gültige Schreibweise:

```js
console.log(Haustiere[0])
```

Ungültige Schreibweise:
```
console.log (Haustiere.1);
```

## Die Herausforderung:

Erstellen Sie eine Datei mit dem Namen „accessing-array-values.js“.

Definieren Sie in dieser Datei das Array `food` :
```js
const food = ['Apfel', 'Pizza', 'Birne']
```


Verwenden Sie `console.log()`, um den `zweiten` Wert des Arrays an das Terminal auszugeben.

Überprüfen Sie, ob Ihr Programm korrekt ist, indem Sie diesen Befehl ausführen:

„Bash
Javascript überprüfen Sie den Zugriff auf die Array-Werte.js
```