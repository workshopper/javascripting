JavaScript fornisce un modo nativo per elencare tutte le chiavi disponibili di un oggetto. Questo può essere utile per scorrere in sequenza tutte le proprietà di un oggetto e manipolarne i valori di conseguenza.

Ecco un esempio di elencazione di tutte le chiavi dell'oggetto usando il metodo prototipo **Object.keys()**.

```js
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}
const keys = Object.keys(car)

console.log(keys)
```

Il codice sopra stamperà una matrice di stringhe, in cui ogni stringa è una chiave nell'oggetto car. `['make', 'model', 'year']`

## The challenge:

Crea un file chiamato `object-keys.js`.

In quel file, definire una variabile denominata `car` come questa:

```js
const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
```

Quindi definire un'altra variabile denominata `keys` come questa:
```js
const keys = Object.keys(car)
```

Usa `console.log ()` per stampare la variabile `keys` sul terminale

Controlla se il tuo programma è corretto eseguendo questo comando:

```bash
javascripting verify object-keys.js
```
