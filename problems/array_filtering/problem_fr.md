Il y a beaucoup de manières de manipuler les tableaux.

Une tâche commune est de filtrer les tableaux pour ne garder que certaines valeurs.

Pour cela nous pouvons utiliser la méthode `.filter()`.

Voici un exemple :

```js
const pets = ['cat', 'dog', 'elephant']

const filtered = pets.filter(function (pet) {
  return (pet !== 'elephant')
})
```

La variable `filtered` ne va contenir que `cat` et `dog`.

## Le défi :

Créer un fichier nommé `filtrage-de-tableau.js`.

Dans ce fichier, définissez une variable nommée `numbers` qui contient ce tableau :

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Comme ci-dessus, définissez une variable nommée `filtered` qui contient le résultat de `numbers.filter()`.

La fonction que vous passerez à la méthode `.filter()` va ressembler à ça :

```js
function evenNumbers (number) {
  return number % 2 === 0
}
```

Utilisez `console.log()` pour afficher le tableau `filtered` dans le terminal.

Vérifiez que votre programme soit correct en exécutant la commande :

```bash
javascripting verify filtrage-de-tableau.js
```
