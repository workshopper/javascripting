Los objetos son en cierta forma contenedores y se los puede pensar cómo diccionarios.

Tendrá ciertas **llaves** y cada una se verá referenciada a un **valor**.

Por ejemplo:

```js
const foodPreferences = {
  pizza: 'yum',
  salad: 'gross'
}
```

En el ejemplo anterior podemos ver que las **llaves** del objeto `foodPreferences` son **pizza** y **salad**. Sus valores son `yum` y `gross` respectivamente.

## El ejercicio:

Crea un archivo llamado `objects.js`.

En ese archivo, define una variable llamada `pizza` de la siguiente forma:

```js
const pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
}
```

Utiliza `console.log()` para imprimir el objeto `pizza` a la terminal.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

```bash
javascripting verify objects.js
```
