JavaScript heeft een ingebouwde manier om alle beschikbare keys van een object weer te geven. Dit kan handig zijn als je alle eigenschappen van een object wilt doorlopen en de waarden wilt manipuleren.

Hier is een voorbeeld dat alle object keys ophaalt door gebruik te maken van de **Object.keys()** method.

```js
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}
const keys = Object.keys(car)

console.log(keys)
```

De code hierboven print een array met strings, elke string is een key in het car object. `['make', 'model', 'year']`

## De uitdaging:

Maak een nieuw bestand met de naam `object-keys.js`.

Definieer in dit bestand een nieuwe variabele `car` zoals hieronder:

```js
const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
```

Definieer nu een andere variabele met de naam `keys` zoals hieronder:
```js
const keys = Object.keys(car)
```

Gebruik `console.log()` om de `keys` variabele naar de console te printen.

Controleer of je programma goed werkt met dit commando:

```bash
javascripting verify object-keys.js
```
