
Mit For-Schleifen können Sie einen Codeblock eine bestimmte Anzahl von Malen ausführen. Diese For-Schleife loggt sich zehnmal in die Konsole ein:

```js
für (es sei i = 0; i < 10; i++) {
  // die Zahlen 0 bis 9 protokollieren
  Konsole.log(i)
}
```

Der erste Teil, `let i = 0`, wird einmal am Anfang der Schleife ausgeführt. Die Variable "i" wird verwendet, um zu verfolgen, wie oft die Schleife gelaufen ist.

Der zweite Teil, „i < 10“, wird zu Beginn jeder Schleifeniteration überprüft, bevor der Code innerhalb der Schleife ausgeführt wird. Wenn die Anweisung wahr ist, wird der Code innerhalb der Schleife ausgeführt. Wenn es falsch ist, dann ist die Schleife vollständig. Die Aussage „i < 10;“ gibt an, dass die Schleife fortgesetzt wird, solange „i“ kleiner als „10“ ist.

Der letzte Teil, `i++`, wird am Ende jeder Schleife ausgeführt. Dadurch wird die Variable „i“ nach jeder Schleife um 1 erhöht. Sobald „i“ „10“ erreicht, wird die Schleife beendet.

## Die Herausforderung:

Erstellen Sie eine Datei mit dem Namen „for-loop.js“.

Definieren Sie in dieser Datei eine Variable mit dem Namen "total" und setzen Sie sie gleich der Zahl "0".

Definieren Sie eine zweite Variable mit dem Namen "limit" und machen Sie sie gleich der Zahl "10".

Erstellen Sie eine for-Schleife mit einer Variablen "i", die bei 0 beginnt und bei jedem Schleifendurchgang um 1 erhöht wird. Die Schleife soll so lange laufen, wie `i` kleiner als `limit` ist.

Addieren Sie bei jeder Iteration der Schleife die Zahl „i“ zur „total“-Variablen. Dazu können Sie diese Anweisung verwenden:

```js
insgesamt += i
```

Wenn diese Anweisung in einer for-Schleife verwendet wird, kann sie auch als _ein Akkumulator_ bezeichnet werden. Stellen Sie es sich wie die laufende Summe einer Registrierkasse vor, während jeder Artikel gescannt und addiert wird. Für diese Herausforderung haben Sie 10 Artikel und sie erhöhen sich zufällig um 1 pro Artikel (wobei der erste Artikel kostenlos ist!).

Verwenden Sie nach der for-Schleife `console.log()`, um die `total`-Variable an das Terminal auszugeben.

Überprüfen Sie, ob Ihr Programm korrekt ist, indem Sie diesen Befehl ausführen:

„Bash
Javascript überprüfen for-loop.js
```