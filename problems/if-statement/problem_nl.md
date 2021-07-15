Conditional statements worden gebruikt om de flow van een programma aan te passen, afhankelijk van een boolean voorwaarde.

Een conditional statement ziet er zo uit:

```js
if (n > 1) {
  console.log('the variable n is greater than 1.')
} else {
  console.log('the variable n is less than or equal to 1.')
}
```

Tussen de haakjes moet je een logische test schrijven, dit betekent dat de logische test of true (waar) is, of false (niet waar). 

Het else block is optioneel en bevat de code die uitgevoerd wordt als de logische test *false* is.

## De uitdaging:

Maak een nieuw bestand met de naam `if-statement.js`.

Declareer in dit bestand een nieuwe variabele met de naam `fruit`.

Laat de variabele `fruit` verwijzen naar de string **"orange"**.

Gebruik nu `console.log()`.

Als de lengte van de string `fruit` groter is dan vijf print je "**The fruit name has more than five characters."** naar de console.  
Anders print je "**The fruit name has five characters or less.**" naar de console.

Controleer of je programma goed werkt met dit commando:

```bash
javascripting verify if-statement.js
```
