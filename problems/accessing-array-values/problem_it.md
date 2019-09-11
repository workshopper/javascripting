È possibile accedere agli elementi di un array tramite il loro indice numerico.

L'indice numerico comincia da zero e arriva al valore della proprietà `length` dell'array meno uno.

Ecco un esempio:


```js
const pets = ['cat', 'dog', 'rat']

console.log(pets[0])
```

Il codice precedente stampa il primo elemento dell'array `pets` - la stringa `cat`.

È necessario accedere agli elementi dell'array soltanto attraverso la notazione con parentesi quadre.

La notazione puntata non è valida.

Notazione valida:

```js
console.log(pets[0])
```

Notazione non valida:
```
console.log(pets.1);
```

## La sfida:

Crea un file dal nome `accessing-array-values.js`.

In questo file, definisci l'array `food` :
```js
const food = ['apple', 'pizza', 'pear']
```


Usa `console.log()` per stampare il `secondo` valore dell'array sul terminale.

Verifica che il tuo programma sia corretto eseguendo questo comando:

```bash
javascripting verify accessing-array-values.js
```
