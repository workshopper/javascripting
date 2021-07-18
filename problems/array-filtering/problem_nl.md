Er zijn veel manieren om arrays aan te passen

Een veelvookomende handeling is het filteren van arrays zodat alleen bepaalde waarden overblijven.

Hiervoor kun je de `.filter()` method gebruiken.

Hier is een voorbeeld:

```js
const pets = ['cat', 'dog', 'elephant']

const filtered = pets.filter(function (pet) {
  return (pet !== 'elephant')
})
```

De `filtered` variabele bevat nu alleen `cat` en `dog`.

## De uitdaging

Maak een nieuw bestand met de naam `array-filtering.js`.

Definieer in dit bestand een variabele met de naam `numbers` die verwijst naar deze array:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Zoals bovenaan is voorgedaan, maak nu een variabele genaamd `filtered` die verwijst naar het resultaat van `numbers.filter()`.

De functie die je aan de `.filter()` method geeft ziet er zo uit:

```js
function evenNumbers (number) {
  return number % 2 === 0
}
```

Let goed op de syntax die gebruikt wordt in deze uitdaging. Gebruik `console.log()` om de `filtered` array naar de console te printen.

Controleer of je programma goed werkt met dit commando:

```bash
javascripting verify array-filtering.js
```
