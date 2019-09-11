En beslutning brukes for å endre kontrollflyten til et program, basert på en valgt betingelse.

En beslutning ser slik ut:

```js
if (n > 1) {
  console.log('variablen n er større enn 1.')
} else {
  console.log('variablen n er mindre eller lik 1.')
}
```

På innsiden av parantesene må du skrive et logisk uttrykk, det vil si et resultat av et uttrykk som enten er sant eller galt.

else delen av en beslutning er valgfritt og inneholder den koden som vil kjøres dersom uttrykket er galt.

## Oppgaven:

Lag en fil som heter `if-statement.js`.

Definer en variabel med navnet `fruit` i den filen.

Lag `fruit` variablen slik at den referer verdien **orange** av typen **String**.

Bruk deretter `console.log()` til å skrive ut "**The fruit name has more than five characters.**" om lengden av verdien til `fruit` er større enn 5.
Hvis ikke, skriv ut "**The fruit name has five characters or less.**" til skjermen.

Se om programmet ditt er riktig ved å kjøre kommandoen:

```bash
javascripting verify if-statement.js
```
