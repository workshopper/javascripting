Una funzione è un blocco di codice che riceve dati di input, li processa, e infine produce un output.

Ecco un esempio:

```js
function example (x) {
  return x * 2
}
```

Possiamo **invocare** questa funzione come segue per ottenere il numero 10:

```js
example(5)
```

L'esempio precedente assume che la funzione `example` riceverà un numero come argomento –– ovvero input –– e restituirà quel numero moltiplicato per 2.

## La sfida:

Crea un file dal nome `functions.js`.

In questo file, definisci una funzione dal nome `eat` che accetta un argomento di nome `food`
che ci si aspetta sia una stringa.

All'interno della funzione restituisci l'argomento `food` come segue:

```js
return food + ' tasted really good.'
```

Dentro le parentesi di `console.log()`, invoca la funzione `eat()` con la stringa `bananas` come argomento.

Verifica che il tuo programma sia corretto eseguendo questo comando:

```bash
javascripting verify functions.js
```
