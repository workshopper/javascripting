`Scope` er de variablene, objektene og funksjonene du har tilgang til.

JavaScript har to scope: `global` og `lokal`. En variabel som er deklarert utenfor en funksjon er en `global` variabel. Dens verdi er tilgjengelig og kan endres gjennom hele programmet ditt. En variabel som er deklarert inni en funksjon er `lokal`. Den lages og fjernes hver gang funksjonen kjøres og variabelen kan ikke nås av kode som er utenfor funksjonen.

Funksjoner som er definert inni andre funksjoner, kjent som nøstede funksjoner, har tilgang til scopet til den ytre funksjonen den er deklarert i.

Følg nøye med på kommentarene i koden under:

```js
const a = 4 // a er en global variabel, den kan nås av funksjonene under

function foo () {
  const b = a * 3 // b kan ikke nås utenfor foo funksjonen, men kan nås av funksjoner
  // definert inni foo
  function bar (c) {
    const b = 2 // enda en `b` variabel blir lagd i bar funksjonens scope
    // endringer på den nye `b` variabelen endrer ikke den ytre `b` variabelen
    console.log(a, b, c)
  }

  bar(b * 4)
}

foo() // 4, 2, 48
```
IIFE, Immediately Invoked Function Expression, er et pattern for å lage lokale scope
eksempel:
```js
(function () { // funksjonsuttrykket omgis av paranteser
  // variabler defineres her
  // kan ikke nås utenfor denne funksjonen
})() // funksjonen kjøres med engang
```
## Oppgaven:

Lag en fil som heter `scope.js`.

Kopier inn følgende kode i den filen:
```js
const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;

    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8
      })()
    })()
  })()
})()
```

Bruk din kunnskap om variablenes `scope` og sett inn følgende kode i en av funksjonene som finnes i 'scope.js' slik at det skrives ut `a: 1, b: 8, c: 6` på skjermen:
```js
console.log(`a: ${a}, b: ${b}, c: ${c}`)
```

Se om programmet ditt er riktig ved å kjøre kommandoen:

```bash
javascripting verify scope.js
```
