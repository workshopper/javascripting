I cicli for si presentano come il seguente:

```js
for (let i = 0; i < 10; i++) {
  // scrive i numeri da 0 a 9
  console.log(i)
}
```

La variabile `i` viene usata per tenere il conto del numero di volte in cui il ciclo è stato eseguito.

L'espressione `i < 10;` indica il limite del ciclo.
Il ciclo continuerà ad eseguire le istruzioni se `i` è minore di `10`.

L'istruzione `i++` incrementa la variabile `i` di 1 ad ogni iterazione.

## La sfida:

Crea un file chiamato `for-loop.js`.

In questo file definisci una variabile chiamata `total` e assegnale il numero `0`.

Definisci una seconda variabile chiamata `limit` e assegnale il numero `10`.

Crea un ciclo for con una variabile `i` che inizia da 0 e viene incrementata di 1 ad ogni iterazione del ciclo. Il ciclo deve essere eseguito finché `i` è minore di `limit`.

Ad ogni iterazione del ciclo, aggiungi il valore di `i` alla variabile `total`. Per fare ciò, puoi usare quest'istruzione:

```js
total += i
```

Al termine del ciclo for, usa `console.log()` per stampare la variabile `total` sul terminale.

Verifica che il tuo programma sia corretto eseguendo questo comando:

```bash
javascripting verify for-loop.js
```
