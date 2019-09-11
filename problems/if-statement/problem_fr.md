Les instructions conditionnelles servent à changer le flux d'exécution d'un programme selon des conditions booléennes spécifiques.

Une instruction conditionnelle ressemble à ça :

```js
if (n > 1) {
  console.log('the variable n is greater than 1.')
} else {
  console.log('the variable n is less than or equal to 1.')
}
```

Dans les parenthèses vous devez entrer une expression logique, ce qui veut dire que le résultat de l'instruction est soit vrai ( `true` ) soit faux ( `false` ).

Le bloc `else` est optionnel et contient le code qui sera exécuté si la condition est fausse.

## Le défi :

Créez un fichier nommé `instruction-conditionnelle.js`.

Dans ce fichier, déclarez une variable `fruit`.

Assignez à la variable `fruit` la chaîne de caractères ***"orange"***.

Utilisez ensuite `console.log()` pour afficher **« The fruit name has more than five characters. »** si la longueur du contenu de la variable `fruit` est supérieure à cinq.
Sinon, affichez **« The fruit name has five characters or less. »**

Vérifiez si votre programme est correct en exécutant la commande :

```bash
javascripting verify instruction-conditionnelle.js
```
