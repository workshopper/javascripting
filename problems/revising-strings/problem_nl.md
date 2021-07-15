Je zult vaak de inhoud van een string moeten wijzigen.

Strings hebben ingebouwde functionaliteit waarmee je hun inhoud kunt inspecteren en aanpassen.

Hier is een voorbeeld waarbij de method`.replace()` wordt gebruikt:

```js
let example = 'this example exists'
example = example.replace('exists', 'is awesome')
console.log(example)
```

Onthoud dat als je de waarde wilt aanpassen waar de `example` variabele naar verwijst, je opnieuw een "=" teken
moet gebruiken met de `example.replace()` method aan de rechterkant van het "=" teken.

## De uitdaging:

Maak een nieuw bestand met de naam `revising-strings.js`.

Definieer een variabele met de naam `pizza` die verwijst naar de string: `'pizza is alright'`

Gebruik de `.replace()` method om `alright` te veranderen in `wonderful`.

Gebruik `console.log()` om het resultaat van de `.replace()` method naar de console te printen.

Controleer of je programma goed werkt met dit commando:

`javascripting verify revising-strings.js`
