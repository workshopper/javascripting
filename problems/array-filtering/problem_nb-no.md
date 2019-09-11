Det finnes mange måter å manipulere arrayer på.

Noe man ofte gjør er å filtrere et array til å kun inneholde noen ønskede verdier.

For det kan vi bruke `.filter()` metoden.

Her er et eksempel:

```js
const dyr = ['katt', 'hund', 'elefant']

const filtrert = dyr.filter(function (ettDyr) {
  return (ettDyr !== 'elefant')
})
```
`filtrert` variablen vil nå kun inneholde `katt` og `hund`.

## Oppgaven:

Lag en fil som heter `array-filtering.js`.

Definer en variabel med navnet `numbers` i den filen som referer dette arrayet:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Som i eksemplet over, definer en variabel med navnet `filtered` som refererer resultatet av `numbers.filter()`.

Funksjonen du gir til `.filter()` metoden skal se slik ut:

```js
function evenNumbers (number) {
  return number % 2 === 0
}
```

Bruk `console.log()` til å skrive ut `filtered` arrayet til skjermen.

Se om programmet ditt er riktig ved å kjøre kommandoen:

```bash
javascripting verify array-filtering.js
```
