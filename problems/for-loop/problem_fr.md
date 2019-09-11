Les boucles `for` vous permettent de répéter l'exécution d'un bloc de code un certain nombre de fois. Cette boucle `for` affiche dans la console dix fois :

```js
for (let i = 0; i < 10; i++) {
  // affiche les nombres de 0 a 9
  console.log(i)
}
```

La première partie, `let i = 0`, n'est exécutée qu'une fois au début de la boucle. La variable `i` est utilisée pour compter le nombre d'exécutions de la boucle.

La seconde partie, `i < 10`, est vérifiée au début de chaque itération de la boucle avant que le code contenu ne s'exécute. Si la condition est valide, le code contenu dans la boucle est exécuté. Sinon, la boucle est terminée. La condition `i < 10;` indique que la boucle va continuer de s'exécuter tant que `i` est inférieur à `10`.

La partie finale, `i++`, est exécutée à la fin de chaque boucle. Elle incrémente la variable `i` après chaque itération. Dès que `i` atteint 10, la boucle est terminée.

## Le défi :

Créez un fichier nommé `boucle-for.js`.

Dans ce fichier, définissez une variable nommée `total` et assignez lui la valeur `0`.

Créez une seconde variable nommée `limit` et assignez lui la valeur 10.

Créez une boucle `for` avec une variable `i` commençant à 0 et s'incrémentant à chaque itération de la boucle. La boucle doit s'exécuter aussi longtemps que `i` est strictement inférieur à `limit`.

À chaque itération de la boucle, ajoutez le nombre `i` à la variable `total`. Pour faire cela, vous pouvez utiliser l'instruction suivante :

```js
total += i
```

Après la boucle, utilisez `console.log()` pour afficher la variable `total` dans le terminal.

Vérifiez si votre programme est correct en exécutant la commande :

```bash
javascripting verify boucle-for.js
```
