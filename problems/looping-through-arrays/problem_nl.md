In deze uitdaging gebruik je een **for loop** om een lijst met waarden in een array te lezen en aan te passen.

Waarden in een array opvragen kan alleen door gebruik te maken van hele getallen (integers)

Elke waarde in een array heeft een eigen index nummer, deze start altijd bij `0`.

In deze array heeft `hi` het index nummer `1`:

```js
const greetings = ['hello', 'hi', 'good morning']
```

Zo benader je die waarde in de array:

```js
greetings[1]
```

In een  **for loop** kun je de `i` variabele binnen de blokhaken gebruiken in plaats van een direct getal.

## De uitdaging:

Maak een nieuw bestand met de naam `looping-through-arrays.js`.

Definieer in dit bestand een variabele met de naam `pets` die verwijst naar deze array:

```js
['cat', 'dog', 'rat']
```

Schrijf een for loop die elke string in de array verandert, zodat de woorden in het meervoud veranderen.

Binnen de for loop gebruik je daarvoor dit statement:

```js
pets[i] = pets[i] + 's'
```

Na de for loop gebruik je `console.log()` om de `pets` array naar de console te printen.

Controleer of je programma goed werkt met dit commando:

```bash
javascripting verify looping-through-arrays.js
```
