`Scope` noem je de variabele, objecten en functions waar je toegang toe hebt.

JavaScript kent twee scopes: `global` en `local`. Een variabele die is gedeclareerd buiten een function definitie is een `globale` variabele, en die variabele is toegankelijk en aanpasbaar in alle programma code. Een variabele die is gedefinieerd binnen een function is `local`. De variabele wordt elke keer aangemaakt en weer verwijderd als de function wordt uitgevoerd, en kan niet worden benaderd door code buiten de function.

Functions die worden gedefinieerd binnen andere functions, we noemen dat nested functions, hebben toegang tot de scope van de bovenliggende function.

Let goed op de opmerkingen in de onderstaande code:

```js
const a = 4 // a is een globale variabele, deze is toegankelijk via de onderstaande functions:

function foo () {
  const b = a * 3 // b is niet toegankelijk buiten de foo-function, maar is toegankelijk via functions
  // die gedefinieerd zijn binnen foo
  function bar (c) {
    const b = 2 // een andere `b` variable is gedefinieerd in de bar function scope
    // de veranderingen aan deze nieuwe `b` variabele hebben geen effect op de andere `b` variabele
    console.log(a, b, c)
  }

  bar(b * 4)
}

foo() // 4, 2, 48
```


IIFE, Immediately Invoked Function Expression, is een veelgebruikte manier om een local scope te maken.

Voorbeeld
```js
(function () { // de function (zonder naam) bevindt zich binnen haakjes.
  // variabelen die hier worden gedefinieerd
  // kunnen niet worden benaderd van buiten de function
})() // de function wordt direct aangeroepen / uitgevoerd
```
## De uitdaging:

Maak een nieuw bestand met de naam `scope.js`.

Kopieer onderstaande code in je nieuwe bestand:
```js
const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;

    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8;
      })()
    })()
  })()
})()
```

Gebruik je nieuwe kennis over de `scope` van variabelen en zet onderstaande code binnen één van de functions in je `scope.js` zodat dit de uitvoer wordt: `a: 1, b: 8, c: 6`
```js
console.log(`a: ${a}, b: ${b}, c: ${c}`);
```

Controleer of je programma goed werkt met dit commando:

```bash
javascripting verify scope.js
```
