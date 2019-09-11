On peut déclarer qu'une fonction reçoit n'importe quel nombre d'arguments. Les arguments peuvent être de n'importe quel type : un argument peut être une chaîne de caractères, un nombre, un tableau, un objet et même une autre fonction.

Voici un exemple :

```js
function example (firstArg, secondArg) {
  console.log(firstArg, secondArg)
}
```

Nous pouvons **appeler** cette fonction avec deux arguments comme cela :

```js
example('hello', 'world')
```

L'exemple ci-dessus va afficher dans le terminal `hello world`.

## Le défi :

Créez un fichier nommé `arguments-de-fonction.js`.

Dans ce fichier, définissez une fonction nommée `math` qui prend trois arguments. Il est important que vous compreniez que les noms d'arguments ne sont seulement utilisés que pour y faire référence.

Nommez chaque argument comme vous le souhaitez.

Dans la fonction `math`, renvoyez la valeur obtenue de la multiplication du second argument avec le troisième et en ajoutant le premier argument au résultat.

Après cela, dans les parenthèses de `console.log()`, appelez la fonction `math()` avec le nombre `53` comme premier argument, le nombre `61` comme second et le nombre `67` en troisième argument.

Vérifiez si votre programme est correct en exécutant la commande :

```bash
javascripting verify arguments-de-fonction.js
```
