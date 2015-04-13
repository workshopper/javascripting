---

# RECORRIENDO ARRAYS

Para este ejercicio usaremos un bucle **for** para acceder y manipular una lista de valores en un array.

Se puede acceder a los valores de un array utilizando un contador.

Cada ítem en el array es identificado por un número, su índice. 

Los índices comienzan desde el cero.

Entonces en este array, el elemento `que tal` es identificado por el número `1`:

```js
var saludos = ['hola', 'que tal', 'buen día'];
```
Puede ser accedido de la siguiente forma:

```js
saludos[1];
```

Entonces dentro de un bucle **for** utilizaremos la variable `ì` dentro de los corchetes.

## El ejercicio:

Crea un archivo llamando `recorriendo-arrays.js`.

En ese archivo, define una variable llamada `mascotas` que referencie este array:

```js
['gato', 'perro', 'tortuga'];
```

Crea un bucle for que cambie cada string en el array para que sean plurales.

Usarás una sentencia parecida a la siguiente dentro del bucle:

```js
mascotas[i] = mascotas[i] + 's';
```

Utiliza `console.log()` para imprimir el array `mascotas` a la terminal.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

`javascripting verify recorriendo-arrays.js`

---
