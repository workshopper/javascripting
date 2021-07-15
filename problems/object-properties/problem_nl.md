Het benaderen en aanpassen van object eigenschappen –– de keys en values die het object bevat –– doe je met een methode die lijkt op de array manier.

Hier is een voorbeeld met **blokhaken**:

```js
const example = {
  pizza: 'yummy'
}

console.log(example['pizza'])
```

Deze code print de string `'yummy'` naar de console.

Daarnaast kun je ook de **dot notatie** gebruiken met hetzelfde resultaat.

```js
example.pizza

example['pizza']
```

Deze twee regels code geven allebei `yummy` als resultaat.

## De uitdaging

Maak een nieuw bestand met de naam `object-properties.js`.

Definieer in dit bestand een nieuwe variabele met de naam `food` zoals hieronder:

```js
const food = {
  types: 'only pizza'
}
```

Gebruik `console.log()` om de `types` eigenschap van het `food` object naar de console te printen.

Controleer of je programma goed werkt met dit commando:

```bash
javascripting verify object-properties.js
```
