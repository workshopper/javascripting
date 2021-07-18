Waarden in een Array kun je opvragen met een index numner.

Het index nummer begint bij nul en loopt tot de *.length* eigenschap van de array min één.

Hier is een voorbeeld:


```js
const pets = ['cat', 'dog', 'rat']

console.log(pets[0])
```

De bovenstaande code print het eerste element van de `pets` array - dat is de string `cat`.

Array elementen kun je benaderen via blokhaken []

Het gebruik van een punt is niet juist.

Juiste notatie:

```js
console.log(pets[0])
```

Onjuiste notatie:
```
console.log(pets.1);
```

## De uitdaging:

Maak een nieuw bestand met de naam `accessing-array-values.js`.

Definieer in dit bestand een array genaamd `food` :
```js
const food = ['apple', 'pizza', 'pear']
```

Gebruik `console.log()` om de `tweede` waarde van de array naar de console te printen.

Controleer of je programma goed werkt met dit commando:

```bash
javascripting verify accessing-array-values.js
```
