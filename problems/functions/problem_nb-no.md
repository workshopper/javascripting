En funksjon er en samling kode som tar imot data, prosesserer den dataen og lager et resultat.


Her er et eksempel:

```js
function eksempel (x) {
  return x * 2
}
```

Vi kan **kalle** denne funksjonen slik som dette for å få nummeret 10:

```js
eksempel(5)
```

Eksemplet over antar at `eksempel` funksjonen tar et nummer som et argument og returner et tall som multipliseres med 2.

## Oppgaven:

Lag en fil som heter `functions.js`.

Definer en funksjon med navnet `eat` i den filen som tar i mot argumentet med navn `food` som forventes å være en string.

På innsiden av den funksjonen skal du returnere `food` argumentet slik som dette:

```js
return food + ' tasted really good.'
```

Inni parantesene til `console.log()`, kall `eat()` funksjonen med stringen `bananas` som argument.

Se om programmet ditt er riktig ved å kjøre kommandoen:

```bash
javascripting verify functions.js
```
