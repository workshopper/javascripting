Esistono parecchie maniere di manipolare gli array.

Un compito comune è filtrare gli array perché contengano soltanto i valori desiderati.

Per fare ciò possiamo utilizzare il metodo `.filter()`.

Ecco un esempio:

```js
const pets = ['cat', 'dog', 'elephant']

const filtered = pets.filter(function (pet) {
  return (pet !== 'elephant')
})
```

La variabile `filtered` conterrà soltanto `cat` e `dog`.

## La sfida:

Crea un file dal nome `array-filtering.js`.

In questo file, definisci una variabile chiamata `numbers` che fa riferimento a questo array:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Come sopra, definisci una variabile chiamata `filtered` che fa riferimento al risultato di `numbers.filter()`.

La funzione che passerai al metodo `.filter()` dovrà apparire come segue:

```js
function evenNumbers (number) {
  return number % 2 === 0
}
```

Usa `console.log()` per stampare l'array `filtered` sul terminale.

Verifica che il tuo programma sia corretto eseguendo questo comando:

```bash
javascripting verify array-filtering.js
```
