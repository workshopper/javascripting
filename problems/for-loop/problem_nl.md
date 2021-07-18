Met "For loops" kun je een blok code meerdere keren uitvoeren. Deze loop print tien keer iets naar de console.

```js
for (let i = 0; i < 10; i++) {
  // log the numbers 0 through 9
  console.log(i)
}
```

Het eerste deel, `let i = 0`, wordt één keer uitgevoerd aan het begin van de loop iteratie. De variabele `i` wordt gebruikt om bij te houden hoe veel keer de loop is uitgevoerd.

Het tweede deel, `i < 10`, wordt voor het begin van elke loop iteratie gecontroleerd. Als het logische statement true is (waar) dan wordt de code in de loop uitgevoerd. Als het false (niet waar) is, dan is de loop klaar. Het logische statement `i < 10;` geeft aan dat de loop uitgevoerd zal worden zolang `i` kleiner is dan `10`.

Het laatste deel, `i++`, wordt aan het einde van elke loop iteratie uitgevoerd. Dit verhoogt de variabele `i` met 1 na elke loop iteratie. Zodra `i` gelijk wordt aan `10`, zal de loop stoppen.

## De uitdaging

Maak een nieuw bestand met de naam`for-loop.js`.

Definieer een nieuwe variabele met de naam `total` en maak deze gelijk aan het getal `0`.

Definieer nu een tweede variabele met de naam `limit` en maak deze gelijk aan het getal `10`.

Schrijf een for loop waarbij de variabele `i` start bij 0 en die na elke loop met 1 ophoogt. De loop moet uitgevoerd worden zo lang `i` kleiner is dan `limit`.

Tel in elke loop iteratie het getal `i` op bij de `total` variabele. Dit kun je doen met dit statement:

```js
total += i
```

Als dit statement wordt gebruikt in een for loop, wordt dit ook wel een _accumulator_ genoemd.  Denk aan een kassa waar je elke keer een nieuw artikel scant en het bedrag optelt bij het totaal. 

Bij deze uitdaging heb je dus 10 artikelen waarvan de prijs elke keer met 1 wordt opgehoogd (en waarbij het eerste artikel gratis is!)

Gebruik `console.log()` NA de for loop om de waarde van de `total` naar de console te printen.

Controleer of je programma goed werkt met dit commando:

```bash
javascripting verify for-loop.js
```
