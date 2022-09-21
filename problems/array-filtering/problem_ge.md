Es gibt viele Möglichkeiten, Arrays zu manipulieren.

Eine häufige Aufgabe besteht darin, Arrays so zu filtern, dass sie nur bestimmte Werte enthalten.

Dazu können wir die Methode `.filter()` verwenden.

Hier ist ein Beispiel:

```js
const pets = ['Katze', 'Hund', 'Elefant']

const gefiltert = pets.filter(function (pet) {
  return (Haustier !== 'Elefant')
})
```

Die Variable „gefiltert“ enthält jetzt nur noch „Katze“ und „Hund“.

## Die Herausforderung:

Erstellen Sie eine Datei mit dem Namen „array-filtering.js“.

Definieren Sie in dieser Datei eine Variable namens "numbers", die auf dieses Array verweist:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Definieren Sie wie oben eine Variable namens „filtered“, die auf das Ergebnis von „numbers.filter()“ verweist.

Die Funktion, die Sie an die `.filter()`-Methode übergeben, sieht etwa so aus:

```js
Funktion geradeZahlen (Zahl) {
  Rückgabenummer % 2 === 0
}
```

Achten Sie genau auf die in Ihrer Lösung verwendete Syntax. Verwenden Sie `console.log()`, um das `gefilterte` Array auf dem Terminal auszugeben.

Überprüfen Sie, ob Ihr Programm korrekt ist, indem Sie diesen Befehl ausführen:

„Bash
Javascript überprüfen array-filtering.js
```