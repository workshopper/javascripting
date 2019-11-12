JavaScript fournit un moyen natif de lister toutes les clés disponibles d'un objet. Ceci peut être utile pour parcourir en boucle toutes les propriétés d'un objet et manipuler leurs valeurs en conséquence.

Voici un exemple de liste de toutes les clés d'objets utilisant la méthode prototype **Object.keys()**.

```js
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}
const keys = Object.keys(car)

console.log(keys)
```

Le code ci-dessus imprimera un tableau de _strings_, où chaque _string_ est une _clé_ (_key_) dans l'objet `car`. `['make', 'model', 'year']`

## The challenge:

Créez un fichier nommé `object-keys.js`.

Dans ce fichier, définissez une variable nommée `car` comme ceci:

```js
const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
```

Définissez ensuite une autre variable nommée `keys` comme ceci:
```js
const keys = Object.keys(car)
```

Utilisez `console.log()` pour imprimer la variable `keys` sur le terminal.

Vérifiez si votre programme est correct en exécutant cette commande:

```bash
javascripting verify object-keys.js
```
