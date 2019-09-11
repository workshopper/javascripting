Du kan bruke og endre objektegenskaper –– nøklene og verdiene et objekt inneholder –– svært likt som arrayer.

Her er et eksempel som bruker **hakeparantes**:

```js
const eksempel = {
  pizza: 'yummy'
}

console.log(eksempel['pizza'])
```

Koden over skriver ut stringen `'yummy'` til skjermen.

Alternativt kan du bruke **punktum notasjon** for samme resultat:

```js
eksempel.pizza

eksempel['pizza']
```

De to linjene over returnerer `yummy` begge to.

## Oppgaven:

Lag en fil som heter `object-properties.js`.

Definer en variabel med navnet `food` i den filen:

```js
const food = {
  types: 'only pizza'
}
```

Bruk `console.log()` til å skrive ut `types` egenskapen av `food` objektet til skjermen.

Se om programmet ditt er riktig ved å kjøre denne kommandoen:

```bash
javascripting verify object-properties.js
```
