Une fonction est un bloc de code qui prend des entrées, qui traite ces entrées, et produit une sortie.

Voici un exemple :

```js
function example (x) {
  return x * 2
}
```

Nous pouvons **appeler** cette fonction comme cela pour récupérer le nombre 10 :

```js
example(5)
```

L'exemple ci-dessus part du principe que la fonction `example` prend en argument — en entrée — un nombre et va renvoyer ce nombre multiplié par 2.

## Le défi :

Créez un fichier nommé `fonctions.js`.

Dans ce fichier, définissez une fonction nommée `eat` qui prend un argument nommé `food` qui est considéré comme étant une chaîne de caractères.

Dans cette fonction, retournez l'argument `food` comme cela :

```js
return food + ' tasted really good.'
```

Dans les parenthèses de `console.log()`, appelez la fonction `eat()` avec la chaîne de caractères `bananas` comme argument.

Vérifiez si votre programme est correct en exécutant la commande :

```bash
javascripting verify fonctions.js
```
