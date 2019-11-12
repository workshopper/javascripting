Dovrai spesso cambiare il contenuto di una stringa.

Le stringhe possiedono funzionalità integrata che ti permette di ispezionarne e manipolarne il contenuto.

Ecco un esempio che usa il metodo `.replace()`:

```js
let example = 'this example exists'
example = example.replace('exists', 'is awesome')
console.log(example)
```

Nota che per cambiare il valore referenziato dalla variabile `example`, dobbiamo usare  
nuovamente il segno uguale, questa volta con il metodo `example.replace()` alla destra  
del segno di uguaglianza.

## La sfida:

Crea un file dal nome `revising-strings.js`.

Definisci una variabile dal nome `pizza` che referenzia la stringa: `'pizza is alright'`

Usa il metodo `.replace()` per cambiare `alright` in `wonderful`.

Usa `console.log()` per stampare il risultato del metodo `.replace()` sul terminale.

Verifica che il tuo programma sia corretto eseguendo questo comando:

`javascripting verify revising-strings.js`
