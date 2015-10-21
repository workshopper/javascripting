Puedes acceder y manipular propiedades de objetos –– las **llaves** y **valores** que un objeto contiene –– utilizando una forma muy similar que con arrays. 

Un ejemplo usando **corchetes**:

```js
var example = {
  pizza: 'yummy'
};

console.log(example['pizza']);
```

El código anterior imprimirá la string `yummy` al a terminal.

Alternativamente, puedes usar la **notación de punto** para obtener resultados idénticos:

```js
example.pizza;

example['pizza'];
```

La dos líneas de código anteriores retornaran `yummy`.

## El ejercicio:

Crea un archivo llamado `object-properties.js`.

En ese archivo, define una variable llamada `food` de la siguiente forma:

```js
var food = {
  types: 'only pizza'
};
```

Utiliza `console.log()` para imprimir la propiedad `types` del objeto `food` a la terminal.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

```bash
javascripting verify object-properties.js
```
