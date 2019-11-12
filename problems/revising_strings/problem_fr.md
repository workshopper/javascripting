Vous allez souvent avoir besoin de changer le contenu d'une chaîne de caractères.

Les chaînes de caractères ont des fonctionnalités directement intégrées qui vous permettent de manipuler leur contenu.

Voici un exemple qui utilise la méthode `.replace()` :

```js
let example = 'this example exists'
example = example.replace('exists', 'is awesome')
console.log(example)
```

Notez que pour modifier la valeur contenue dans la variable `example`, nous devons utiliser encore une fois le signe égal, mais cette fois avec la méthode `example.replace()` à la droite du égal.

## Le challenge :

Créez un fichier nommé `revisions-chaines.js`.

Définissez une variable nommée `pizza` qui contient cette chaîne de caractères : `'pizza is alright'`

Utilisez la méthode `.replace()` pour modifier `alright` en `wonderful`.

Utilisez `console.log()` pour afficher le résultat de la méthode `.replace()` dans le terminal.

Vérifiez si votre programme est correct en exécutant la commande :

`javascripting verify revisions-chaines.js`
