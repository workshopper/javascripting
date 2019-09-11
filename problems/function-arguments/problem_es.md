Una función puede ser declarada para recibir cualquier número de argumentos. Los argumentos pueden ser de cualquier tipo. Por ejemplo, un argumento a una función podría ser una string, un número, un array, un objeto e incluso otra función.

Un ejemplo:

```js
function example (firstArg, secondArg) {
  console.log(firstArg, secondArg)
}
```

Podemos **llamar** a la función con dos argumentos de la siguiente forma:


```js
example('hello', 'world')
```

El ejemplo anterior imprimirá `hello world` a la terminal.


## El ejercicio:

Crea un archivo llamando `function-arguments.js`.

En ese archivo, define una función llamada `math` que recibe trés argumentos. Es importante que entiendas que los nombres de los argumentos son únicamente utilizados para referenciarlos. 

Nombra cada parámetro cómo quieras.

La función `math` deberá multiplicar el segundo y tercer argumento, y luego sumar el resultado con el primer argumento para luego retornar el valor obtenido.

Luego de eso, dentro de los paréntesis de `console.log()`, llamá la función `math()``con el número 53 cómo primer argumento, el número 61 cómo segundo argumento y el número 67 cómo tercero.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

```bash
javascripting verify function-arguments.js
```
