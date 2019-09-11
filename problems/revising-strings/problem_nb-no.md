Du trenger ofte å endre innholdet av en string.

Stringer har innebygd funksjonalitet som lar de manipulere og se på innholdet.

Her er et eksempel som bruker `.replace()` metoden:

```js
let example = 'dette eksemplet er kjedelig'
example = example.replace('kjedelig', 'kult')
console.log(example)
```

Merk deg at for å endre verdien variabelen `example` refererer til så bruker vi likhetstegnet. Denne gangen med `example.replace()` metoden på høyre siden av likhetstegnet.

## Oppgaven:

Lag en fil med navnet `revising-strings.js`.

Deklarer en variabel, `pizza`, som refererer til strengen: `pizza is alright`

Benytt `.replace()` metoden for å endre `alright` til `wonderful`.

Bruk `console.log()` for å skrive ut resultatet av `.replace()` metoden til skjermen.

Kontroller programmet ditt for å se om det er riktig ved å kjøre denne kommandoen:

`javascripting verify revising-strings.js`
