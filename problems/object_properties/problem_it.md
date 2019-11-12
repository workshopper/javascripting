Puoi accedere e manipolare proprietà degli oggetti –– le chiavi e i valori contenuti da un oggetto –– usando un metodo molto simile agli array.

Ecco un esempio usando le **parentesi quadre**:

```js
const example = {
  pizza: 'yummy'
}

console.log(example['pizza'])
```

Il codice precedente stamperà la stringa `'yummy'` sul terminale.

In alternativa, puoi usare la **notazione puntata** per ottenere un risultato identico:

```js
example.pizza

example['pizza']
```

Le due righe di codice precedenti restituiranno entrambe `yummy`.

## La sfida:

Crea un file dal nome `object-properties.js`.

In questo file, definisci una variabile chiamata `food` come segue:

```js
const food = {
  types: 'only pizza'
}
```

Usa `console.log()` per stampare la proprietà `types` dell'oggetto `food` sul terminale.

Verifica che il tuo programma sia corretto eseguendo questo comando:

```bash
javascripting verify object-properties.js
```
