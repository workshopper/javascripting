Pour ce défi nous utiliserons une **boucle for** pour manipuler une liste de valeurs dans un tableau.

L'accès à des valeurs de tableaux peut être effectué en utilisant un nombre entier.

Chaque élément du tableau est identifié par un nombre, commençant à `0`.

Donc dans ce tableau, `hi` est identifié par le nombre `1` :

```js
const greetings = ['hello', 'hi', 'good morning']
```

On peut y accéder comme ceci :

```js
greetings[1]
```

Dans une **boucle for**, plutôt que d'indiquer directement l'index avec un nombre entier nous allons mettre la variable `i` entre les crochets.

## Le défi :

Créez un fichier nommé `iterer-dans-des-tableaux.js`.

Dans ce fichier, définissez une variable nommée `pets` qui contient les valeurs suivantes :

```js
['cat', 'dog', 'rat']
```

Créez une boucle for qui modifie chaque chaîne de caractères dans le tableau pour les mettre au pluriel.

Nous utiliserons une instruction similaire à celle-ci dans la boucle for :

```js
pets[i] = pets[i] + 's'
```

Après la boucle for, utilisez `console.log()` pour afficher le tableau `pets` dans le terminal.

Vérifiez si votre programme est correct en exécutant la commande :

```bash
javascripting verify iterer-dans-des-tableaux.js
```
