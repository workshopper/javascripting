Lo `scope` o ambito è l'insieme di variabili, oggetti e funzioni a cui hai accesso.

JavaScript possiede due ambiti: `globale` e `locale`. Una variabile dichiarata fuori da qualsiasi definizione di funzione è una variabile `globale`, e il suo valore è accessibile e modificabile all'interno dell'intero programma. Una variabile dichiarata dentro una definizione di funzione è `locale`. Viene creata e distrutta ogni volta che la funzione viene eseguita, e non può essere acceduta da codice esterno alla funzione.

Le funzioni definite all'interno di altre funzioni, note come funzioni annidate, hanno accesso all'ambito della propria funzione genitrice.

Presta attenzione ai commenti nel codice seguente:

```js
const a = 4 // a è una variabile globale, può essere acceduta dalle funzioni seguenti

function foo () {
  const b = a * 3 // b non può essere acceduta fuori dalla funzione foo, ma può essere acceduta dalle funzioni
  // definite all'interno di foo
  function bar (c) {
    const b = 2 // un'altra variabile `b` è creata all'interno dell'ambito della funzione bar
    // i cambiamenti a questa nuova variabile `b` non hanno effetto sulla variabile `b` precedente
    console.log(a, b, c)
  }

  bar(b * 4)
}

foo() // 4, 2, 48
```
IIFE, _Immediately Invoked Function Expression_ ovvero espressione di funzione invocata immediatamente, è un pattern comune per creare ambiti locali
esempio:
```js
(function () { // l'espressione di funzione è circondata da parentesi
  // le variabili definite qui
  // non possono essere accedute dall'esterno
})() // la funzione è invocata immediatamente
```
## La sfida:

Crea un file dal nome `scope.js`.

In questo file, copia il codice seguente:
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

Usa la tua comprensione dell'`ambito` delle variabili e posiziona il codice seguente dentro una delle funzioni in `scope.js`
in maniera tale che il risultato sia `a: 1, b: 8,c: 6`
```js
console.log(`a: ${a}, b: ${b}, c: ${c}`);
```

Verifica che il tuo programma sia corretto eseguendo questo comando:

```bash
javascripting verify scope.js
```
