Un bucle for es como lo siguiente:

```js
for (let i = 0; i < 10; i++) {
  // imprime los números del 0 al 9
  console.log(i)
}
```
La variable `i` es utilizada como contador, en ella se almacenará la cantidad de veces que se ejecutó el bucle.

La expresión `i < 10;` indica el limite de veces que se ejecutara el código dentro del bucle.
Este continuara iterando si `i` es menor que `10`.

La expresión `i++` incrementa la variable `i` en uno por cada iteración.

## El ejercicio:

Crea un archivo llamado `for-loop.js`.

En ese archivo define una variable llamada `total` e iniciala con el número `0`.

Define una segunda variable llamada `limit` e iniciala con el número `10`.

Crea un for que itere 10 veces. En cada iteración, añade el valor de `i` a la variable `total`.

Puedes utilizar lo siguiente:

```js
total += i
```

Luego del for, utiliza `console.log()` para imprimir la variable `total` a la terminal.

Comprueba si tu programa es correcto utilizando el siguiente comando:

```bash
javascripting verify for-loop.js
```
