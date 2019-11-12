A menudo necesitarás cambiar el contenido de una string.

Las strings tienen una funcionalidad por defecto que te permite reemplazar caracteres.

Por ejemplo a continuación veremos un uso del método `.replace()`:

```js
let example = 'this example exists'
example = example.replace('exists', 'is awesome')
console.log(example)
```

Nota que para cambiar el valor que la variable `example` referencia, 
necesitamos utilizar el signo de igualdad de nuevo, esta vez con el resultado
del método `example.replace()` del lado derecho del signo.

## El ejercicio:

Crea un archivo llamado `revising-strings.js`.

Define una variable llamada `pizza` que referencie esta string: `'pizza is alright'`

Utiliza el método `.replace()` para cambiar `alright` con `wonderful`.

Luego, utiliza `console.log()` para imprimir los resultados del método `.replace()` a la terminal.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

`javascripting verify revising-strings.js`
