Vi kan gjøre enkle regnestykker med operatører som `+`, `-`, `*`, `/`, og `%`.

For mer avanserte regnestykker, kan vi bruke `Math` objektet.

I denne oppgaven skal vi bruke `Math` objektet for å avrunde nummer.

## Oppgaven:

Lag en fil som heter `rounding-numbers.js`.

Definer en variabel med navnet `roundUp` i den filen som referer flyttallet `1.5`.

Vi vil bruke `Math.round()` metoden for å runde opp til nærmeste heltall.

Et eksempel på bruk av `Math.round()`:

```js
Math.round(0.5)
```

Definer en andre variabel med navnet `rounded` som referer resultat av `Math.round()` methoden,
gitt `roundUp` variabelen som argument.

Bruk `console.log()` for å skrive det nummeret til skjermen.

Se om programmet ditt er riktig ved å kjøre denne:

```bash
javascripting verify rounding-numbers.js
```