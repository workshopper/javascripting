For-Schleifen ermöglichen es dir, einen Codeblock eine bestimmte Anzahl von Wiederholungen auszuführen. Diese for-Schleife loggt zehn Mal auf der Konsole:

```js
for (let i = 0; i < 10; i++) {
  // gibt die Zahlen 0 bis 9 aus
  console.log(i)
}
```

Der erste Teil, `let i = 0`, wird einmal zu Beginn der Schleife ausgeführt. Die Variable `i` wird verwendet, um zu verfolgen, wie oft die Schleife gelaufen ist.

Der zweite Teil, `i < 10`, wird zu Beginn jeder Schleifen-Iteration geprüft, bevor der Code innerhalb der Schleife ausgeführt wird. Wenn die Aussage wahr ist, wird der Code innerhalb der Schleife ausgeführt. Wen falsch ist, ist die Schleife beendet. Die Anweisung `i < 10;` bedeutet, dass die Schleife so lange fortgesetzt wird, wie `i` kleiner als `10` ist.

Der letzte Teil, `i++`, wird am Ende jeder Schleife ausgeführt. Dadurch wird die Variable `i` nach jeder Schleife um 1 erhöht. Sobald `i` die Zahl `10` erreicht, wird die Schleife beendet.

## Die Aufgabe:

Erstelle eine Datei mit dem Namen `for-loop.js`.

In dieser Datei definiere eine Variable namens `total` und setze sie gleich der Zahl `0`.

Definiere eine zweite Variable mit dem Namen `limit` und mache sie gleich der Zahl `10`.

Erstelle eine for-Schleife mit einer Variablen `i`, die bei 0 beginnt und bei jedem Durchlauf der Schleife um 1 erhöht wird. Die Schleife sollte so lange laufen, wie `i` kleiner als `limit` ist.

Bei jeder Iteration der Schleife addiere die Zahl `i` zur Variablen `total`. Um dies zu tun, kannst du diese Anweisung verwenden:

``js
total += i
```

Wenn diese Anweisung in einer for-Schleife verwendet wird, kann man sie auch als _Akkumulator_ bezeichnen.  Stelle dir die Anweisung wie die laufende Summe einer Registrierkasse vor, bei der jeder Posten gescannt und addiert wird.  In dieser Aufgabe hast du 10 Artikel, die zufällig jeweils um 1 teurer werden (wobei der erste Artikel gratis ist!).

Nach der for-Schleife gibst du mit `console.log()` die Variable `total` auf dem Terminal aus.

Überprüfe, ob dein Programm korrekt ist, indem du diesen Befehl ausführst:

``bash
javascripting verify for-loop.js
```
