Je kunt een function zo declareren dat een willekeurig aantal argumenten kan ontvangen. Argumenten mogen van elk type zijn. Een argument kan dus een string, een number, een array, een object of zelfs een andere function zijn.

Hier is een voorbeeld:

```js
function example (firstArg, secondArg) {
  console.log(firstArg, secondArg)
}
```

Je kunt deze function **aanroepen** met twee argumenten zoals hieronder:

```js
example('hello', 'world')
```

Dit voorbeeld print `hello world` naar de console.

## De uitdaging:

Maak een nieuw bestand met de naam `function-arguments.js`.

Definieer in dit bestand een function met de naam `math` die drie argumenten ontvangt. Het is belangrijk dat je begrijpt dat de namen van argumenten alleen worden gebruikt als verwijzing.

Geef elk argument de naam die je zelf wilt.

Binnen de `math` function vermenigvuldig je het tweede en derde argument met elkaar. Het resultaat van deze berekening tel je op bij het eerste argument. Geef het resultaat terug met `return`.

Na de function roep je binnen de haakjes van `console.log()`, de `math()` function aan met het getal `53` als eerste argument, het getal `61` als tweede argument en het getal `67` als derde argument.

Controleer of je programma goed werkt met dit commando:

```bash
javascripting verify function-arguments.js
```
