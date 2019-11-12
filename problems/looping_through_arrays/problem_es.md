Para este ejercicio usaremos un bucle **for** para acceder y manipular una lista de valores en un array.

Se puede acceder a los valores de un array utilizando un contador.

Cada ítem en el array es identificado por un número, su índice. 

Los índices comienzan desde el cero.

Entonces en este array, el elemento `hi` es identificado por el número `1`:

```js
const greetings = ['hello', 'hi', 'good morning']
```
Puede ser accedido de la siguiente forma:

```js
greetings[1]
```

Entonces dentro de un bucle **for** utilizaremos la variable `ì` dentro de los corchetes.

## El ejercicio:

Crea un archivo llamando `looping-through-arrays.js`.

En ese archivo, define una variable llamada `pets` que referencie este array:

```js
['cat', 'dog', 'rat']
```

Crea un bucle for que cambie cada string en el array para que sean plurales.

Usarás una sentencia parecida a la siguiente dentro del bucle:

```js
pets[i] = pets[i] + 's'
```

Utiliza `console.log()` para imprimir el array `pets` a la terminal.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

```bash
javascripting verify looping-through-arrays.js
```
