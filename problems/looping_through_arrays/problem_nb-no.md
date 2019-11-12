I denne oppgaven skal vi bruke en **for løkke** til å lese og endre en liste av verdier i et array.

Å lese verdier fra et array kan gjøres med et heltall.

Hvert innslag i et array identifiseres med et nummer, fra og med `0`.

Så i denne arrayet er `hei` identifisert ved nummeret `1`:

```js
const hilsinger = ['hallo', 'hei', 'god morgen']
```

Verdien kan nås slik som dette:

```js
hilsinger[1]
```

Så på innsiden av en **for løkke** ville vi brukt `i` varibelen inni hakeparantesen istedenfor å bruke et tall.

## Oppgaven:

Lag en fil som heter `looping-through-arrays.js`.

Definer en variabel `pets` som refererer til denne arrayet:

```js
['cat', 'dog', 'rat']
```

Lag en for løkke som endrer hver eneste string i det arrayet til flertall.

Du vil måtte bruke et uttrykk som dette på inni for løkken:

```js
pets[i] = pets[i] + 's'
```

Etter den for løkken, bruk `console.log()` for å skrive ut `pets` arrayet til skjermen.

Se om programmet ditt er riktig ved å kjøre denne kommandoen:

```bash
javascripting verify looping-through-arrays.js
```
