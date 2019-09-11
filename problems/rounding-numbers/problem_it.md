Possiamo effettuare dei calcoli matematici di base usando operatori familiari come `+`, `-`, `*`, `/` e `%`.

Per matematica più complessa, possiamo usare l'oggetto `Math`.

In questa sfida useremo l'oggetto `Math` per arrotondare i numeri.

## La sfida:

Crea un file dal nome `rounding-numbers.js`.

In questo file definisci una variabile chiamata `roundUp` che referenzia il valore decimale `1.5`.

Useremo il metodo `Math.round()` per arrotondare il numero per eccesso. Questo metodo arrotonda sia per eccesso che per difetto all'intero più vicino.

Un esempio dell'uso di `Math.round()`:

```js
Math.round(0.5)
```

Definisci una seconda variabile chiamata `rounded` che referenzia l'output del metodo `Math.round()`, passando la variabile `roundUp` come argomento.

Usa `console.log()` per stampare il numero ottenuto sul terminale.

Verifica che il tuo programma sia corretto eseguendo questo comando:

```bash
javascripting verify rounding-numbers.js
```
