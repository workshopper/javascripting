Una función es un bloque de código que puede recibir un input y devolver un output.

Vamos a utilizar la palabra reservada `return` para especificar lo que devuelve una función.


Por ejemplo:
```js
function example (x) {
  return x * 2
}
```

Podemos **llamar** a la función de esta forma para obtener el número 10:

```js
console.log(example(5))
```

El ejemplo anterior asume que la función `example` recibirá un número cómo argumento –– input –– y retornará el número multiplicado por 2.

## El ejercicio:

Crea una archivo llamando `functions.js`

En ese archivo, define una función llamada `eat` que reciba un argumento llamado `food` que será una string.

Dentro de la función, retorna el argumento `food` de la siguiente manera:

```js
return food + ' tasted really good.'
```

Dentro de los paréntesis de `console.log()`, llama a la función `eat()` con la string `bananas` cómo argumento.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

```bash
javascripting verify functions.js
```
