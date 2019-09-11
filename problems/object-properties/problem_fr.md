Vous pouvez manipuler les propriétés d'objets — les clés et valeurs qu'un objet contient — en utilisant des méthodes très similaires aux tableaux.

Voici un example utilisant des **crochets** :

```js
const example = {
  pizza: 'yummy'
}

console.log(example['pizza'])
```

Le code ci-dessus va afficher la chaine de caractères `yummy` dans le terminal.

Une alternative consiste à utiliser la **notation en point** pour avoir le même résultat :

```js
example.pizza

example['pizza']
```

Les deux lignes de code ci-dessus renverront `yummy`.

## Le défi :

Créez un fichier nommé `proprietes-objet.js`.

Dans ce fichier, définissez une variable nommée `food` comme ceci :

```js
const food = {
  types: 'only pizza'
}
```

Utilisez `console.log()` pour afficher la propriété `types` de l'objet `food` dans le terminal.

Vérifiez si votre programme est correct en exécutant la commande :

```bash
javascripting verify proprietes-objet.js
```
