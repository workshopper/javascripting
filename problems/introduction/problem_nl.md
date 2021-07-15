Om alles overzichtelijk te houden, maken we een map voor deze workshop.

Voer dit commando uit om een folder te maken met de naam `javascripting` (of een naam die je zelf kiest):

```bash
mkdir javascripting
```

Ga nu naar de `javascripting` folder:

```bash
cd javascripting
```

Maak een nieuw bestand met de naam `introduction.js`:

```bash
touch introduction.js
```

Of, als je op Windows werkt: 
```bash
type NUL > introduction.js
```
(`type` is deel van het commando!)

Open thet bestand in je favoriete editor en voeg deze tekst toe:

```js
console.log('hello')
```

Bewaar het bestand en controleer of je programma goed werkt met dit commando:

```bash
javascripting verify introduction.js
```

Trouwens, in deze tutorial kun je het bestand waarmee je werkt elke naam geven die je wilt, dus als je iets als `catsAreAwesome.js` voor elke oefening wilt gebruiken, kun je dat doen. Zorg ervoor dat je dan dit commando gebruikt:

```bash
javascripting verify catsAreAwesome.js
```

