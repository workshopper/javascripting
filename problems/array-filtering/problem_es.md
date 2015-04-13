---

# FILTRADO DE ARRAYS

Los arrays poseen métodos predefinidos que nos permiten manipularlos.

Por ejemplo, los métodos `forEach`, `map`, `some` y `filter` son bastante utilizados.

Algo muy común es filtrar arrays para que contengan sólo ciertos valores.

Para esto podemos utilizar el método `.filter`.

Por ejemplo:

```js
var mascotas = ['gato', 'perro', 'elefante'];

var filtrados = mascotas.filter(function (mascota) {
  return (mascota !== 'elephant');
});
```

La variable `filtrados` será igual a un array que contiene solo `gato` y `perro`.

## El ejercicio:

Crea un archivo llamado `filtrado-de-arrays.js`.

En ese archivo, define una variable llamada `numeros` que referencie al siguiente array:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

Luego, define una variable llamada `filtrados` que referencie el resultado de `numeros.filter()`.

La función que recibe `.filter()` será algo cómo lo siguiente:

```js
function numerosPares (numero) {
  return numero % 2 === 0;
}
```

Utiliza `console.log()` para imprimir el array filtrado a la terminal.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

`javascripting verify filtrado-de-arrays.js`

---
