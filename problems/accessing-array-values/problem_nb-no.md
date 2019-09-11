Verdiene i et array kan nås ved å bruke et indeksnummer.

Indeksnummeret starter fra null opp til antallet verdier i arrayet, minus en.

Her er et eksempel:

```js
const dyr = ['katt', 'hund', 'rotte']

console.log(dyr[0])
```

Koden over skriver ut den første verdien i `dyr` arrayet - strengen `katt`.

Array verdier kan kun nås ved å bruke klammeparantes.

Punktum notasjon er ikke gyldig.

Gyldig:

```js
console.log(dyr[0])
```

Ugyldig:
```
console.log(dyr.1);
```

## Oppgaven:

Lag en fil som heter `accessing-array-values.js`.

Definer et array `food` i den filen:
```js
const food = ['apple', 'pizza', 'pear']
```

Bruk `console.log()` til å skrive ut den `andre` verdien av det arrayet til skjermen.

Se om programmet ditt er riktig ved å kjøre kommandoen:

```bash
javascripting verify accessing-array-values.js
```
