Bedingte Anweisungen werden verwendet, um den Kontrollfluss eines Programms auf der Grundlage einer bestimmten booleschen Bedingung zu ändern.

Eine bedingte Anweisung sieht wie folgt aus:

```js
if (n > 1) {
  console.log('die Variable n ist größer als 1.')
} else {
  console.log('die Variable n ist kleiner oder gleich 1.')
}
```

Innerhalb der Klammern musst du eine logische Anweisung eingeben, was bedeutet, dass das Ergebnis der Anweisung entweder wahr oder falsch ist. 

Der else-Block ist optional und enthält den Code, der ausgeführt wird, wenn die Anweisung falsch ist.

## Die Aufgabe:

Erstelle eine Datei mit dem Namen `if-statement.js`.

Deklariere in dieser Datei eine Variable namens `fruit`.

Weise der Variable `fruit` den String-Wert **"orange"** zu.

Verwende dann `console.log()`, um "**The fruit name has more than five characters.**" zu drucken, wenn die Länge des Wertes von `fruit` größer als fünf ist.
Andernfalls drucke "**The fruit name has five characters or less.**"

Überprüfe, ob dein Programm korrekt ist, indem du diesen Befehl ausführst:

```bash
javascripting verify if-statement.js
```
