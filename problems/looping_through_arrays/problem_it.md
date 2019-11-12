Per questa sfida useremo un **ciclo for** per accedere e manipolare una lista di valori in un array.

L'accesso ai valori di un array si effettua attraverso un numero intero.

Ciascun elemento di un array è identificato da un numero, a iniziare dallo `0`.

Quindi in questo array `hi` è identificato dal numero `1`:

```js
const greetings = ['hello', 'hi', 'good morning']
```

E può essere acceduto come segue:

```js
greetings[1]
```

Quindi dentro un **ciclo for** useremmo la variabile `i` dentro le parentesi quadre anziché usare direttamente un intero.

## La sfida:

Crea un file dal nome `looping-through-arrays.js`.

In questo file, definisci una variabile chiamata `pets` che referenzia questo array:

```js
['cat', 'dog', 'rat']
```

Crea un ciclo for che cambia ciascuna stringa dell'array nel suo plurale.

Utilizzerai un'istruzione come questa all'interno del ciclo for:

```js
pets[i] = pets[i] + 's'
```

Al termine del ciclo for, usa `console.log()` per stampare l'array `pets` sul terminale.

Verifica che il tuo programma sia corretto eseguendo questo comando:

```bash
javascripting verify looping-through-arrays.js
```
