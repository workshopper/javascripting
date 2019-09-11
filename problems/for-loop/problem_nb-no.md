For løkker ser slik ut:

```js
for (let i = 0; i < 10; i++) {
  // skriv ut nummerne fra 0 til 9
  console.log(i)
}
```

Variablen `i` brukes til å vite hvor mange ganger en løkke har kjørt.

Uttrykket `i < 10;` indikerer grensen til en løkke.
Den vil fortsette i løkke så lenge `i` er mindre enn `10`.

Resultatet av `i++` øker verdien til variablen `i` med 1 etter hver runde.

## Oppgaven:

Lag en fil som heter `for-loop.js`.

Definer en variabel med navnet `total` i den filen og sett verdien til nummeret `0`.

Definer en andre variabel med navnet `limit` og sett dens verdi til nummer `10`.

Lag en for løkke med en variabel `i` som starter på 0 og økes med 1 hver runde gjennom løkken. Løkken skal kjøre så lenge `i` er mindre enn `limit`.

I hver runde av løkken, legg til nummeret i variablen `i` til verdien i `total` variablen. Det kan gjøres på følgende måte:

```js
total += i
```

Etter for løkken, bruk `console.log()` til å skrive ut verdien av `total` variablen til skjermen.

Se om programmet ditt er riktig ved å kjøre kommandoen:

```bash
javascripting verify for-loop.js
```
