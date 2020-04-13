El `scope` o ámbito es el conjunto de variables, objetos y funciones a las que tienes acceso.

JavaScript tiene dos ámbitos: `global` y `local`. Una variable que es declarada fuera de la definición de una función es una variable `global`, y su valor es accesible y modificable a través de tu programa. Una variable que es declarada dentro de la definición de una función es una variable `local`. Se crea y se destruye cada vez que se ejecuta la función, y no se puede acceder a su valor ni modificarlo por ningún código fuera de la misma.

Las funciones definidas dentro de otras funciones, conocidas como funciones anidadas, tienen acceso al ámbito de su función padre.

Presta atención a los comentarios en el siguiente código:

```js
const a = 4 // es una variable global, puede ser accedida por las siguientes funciones

function foo () {
  const b = a * 3 // b no puede ser accedida por fuera de la función foo, pero puede ser accedida
  // por las funciones definidas dentro de foo
  function bar (c) {
    const b = 2 // otra variable `b` es creada dentro del ámbito de la función bar
    // los cambios a esta nueva `b` no afectan a la vieja variable `b`
    console.log(a, b, c)
  }

  bar(b * 4)
}

foo() // 4, 2, 48
```
IIFE, Immediately Invoked Function Expression( Expresión de Función Invocada Inmediatamente ), es un patrón común para crear ámbitos locales.
Por ejemplo:
```js
(function () { // La expresión de la función está entre paréntesis
  // las variables definidas aquí
  // no pueden ser accedidas por fuera
})() // la función es inmediatamente invocada
```
## El ejercicio:

Crea un archivo llamado `scope.js`.

En ese archivo, copia el siguiente código:
```js
const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;

    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8
      })()
    })()
  })()
})()
```

Usa tu conocimiento sobre el ámbito de las variables y ubica el siguiente código dentro de alguna de las funciones
en `scope.js` para que la salida sea `a: 1, b: 8, c: 6`
```js
console.log(`a: ${a}, b: ${b}, c: ${c}`);
```
