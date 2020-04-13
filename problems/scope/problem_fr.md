Le `scope` est l'ensemble de variables, d'objets et de fonctions auxquels vous avez accès.

Le JavaScript a deux scopes : le scope `global` et le scope `local`. Une variable qui est déclarée hors d'une fonction est une variable `globale` et sa valeur est accessible et modifiable à travers tout le programme. Une variable qui est déclarée dans une fonction est `locale`. Elle est créée et détruite à chaque fois que la fonction est exécutée, et n'est pas accessible en dehors de cette fonction.

Les fonctions définies à l'intérieur d'autres fonctions, aussi connues en tant que fonctions imbriquées ( _nested_ ), ont accès au scope de leur fonction parent.

Soyez attentif aux commentaires dans le code suivant :

```js
const a = 4 // a est une variable globale, elle est accessible dans les fonctions ci-dessous

function foo () {
  const b = a * 3 // b n'est pas accessible hors de la fonction foo mais l'est
  // dans les fonctions déclarées à l'intérieur de foo

  function bar (c) {
    const b = 2 // une autre variable `b` est créée à l'intérieur du scope de la fonction
    		// les changements apportés à cette nouvelle variable `b` n'ont pas d'effet sur
    // l'ancienne variable `b`
    console.log(a, b, c)
  }

  bar(b * 4)
}

foo() // 4, 2, 48
```

IIFE, Immediately Invoked Function Expression, est un schéma commun pour créer des scopes locaux :

```js
(function () { // l'expression `function` est entourée par des parenthèses
  // les variables définies ici
  // ne sont pas accessibles en dehors
})() // la fonction est appelée immédiatement
```
## Le défi :

Créez un fichier nommé `scope.js`.

Dans ce fichier, copiez le code suivant :
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

Utilisez vos connaissances des `scopes` de variables et placez le code suivant à l'intérieur d'une fonction de `scope.js` afin d'obtenir la sortie `a: 1, b: 8, c: 6`
```js
console.log(`a: ${a}, b: ${b}, c: ${c}`);
```

Vérifiez si votre programme est correct en exécutant la commande :

```bash
javascripting verify scope.js
```
