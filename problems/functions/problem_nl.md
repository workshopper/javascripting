Een function is een blok met code die input ontvangt, deze input verwerkt, en een output teruggeeft.

Een voorbeeld:

```js
function example (x) {
  return x * 2
}
```

Je kunt deze function **aanroepen** zoals hieronder om het getal 10 te krijgen:

```js
example(5)
```

Dit voorbeeld gaat er van uit dat de `example` function een number als argument krijgt –– als input –– en als output (return) het number vermenigvuldigt met 2 teruggeeft.

## De uitdaging

Maak een nieuw bestand met de naam `functions.js`.

Definieer in dit bestand een function met de naam `eat` die een argument genaamd `food` krijgt (waarvan we verwachten dat het een string is).

Geef het `food` argument in de function terug zoals hier:

```js
return food + ' tasted really good.'
```

Roep nu de binnen de haakjes van `console.log()`, de `eat()` function aan met de string `bananas` als argument.

Controleer of je programma goed werkt met dit commando:

```bash
javascripting verify functions.js
```
