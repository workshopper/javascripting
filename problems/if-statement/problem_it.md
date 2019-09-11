Le istruzioni condizionali sono usate per alterare il flusso di controllo di un programma, in base ad una specifica condizione booleana.

Un'istruzione condizionale appare come segue:

```js
if (n > 1) {
  console.log('the variable n is greater than 1.')
} else {
  console.log('the variable n is less than or equal to 1.')
}
```

Dentro le parentesi devi includere un'istruzione logica, nel senso che il risultato dell'istruzione deve essere vero oppure falso.

Il blocco `else` è opzionale e contiene del codice che sarà eseguito se la condizione è falsa.

## La sfida:

Crea un file dal nome `if-statement.js`.

In questo file, dichiara una variabile chiamata `fruit`.

Fa' in modo che la variabile `fruit` referenzi la stringa **"orange"**.

Quindi usa `console.log()` per stampare "**The fruit name has more than five characters."** se la lunghezza del valore di `fruit` è maggiore di cinque.
Altrimenti, stampa "**The fruit name has five characters or less.**"

Verifica che il tuo programma sia corretto eseguendo questo comando:

```bash
javascripting verify if-statement.js
```
