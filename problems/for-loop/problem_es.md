---

# FOR (BUCLES)

Un bucle for es como lo siguiente:

```js
for (var i = 0; i < 100; i++) {
  // imprime los números del 0 al 99
  console.log(i);
}
```

Lo que se encuentra dentro de las llaves ({}), `console.log(i)`, se ejecutará por cada iteración del bucle.

La variable `i` es usada para llevar seguimiento de cuantas veces el bucle se ha ejecutado.

El término `i < 10;` indica cuantas veces iterará.
Continuará iterando si `i` es menor que `10`.

El término `i++` incrementa la variable `i` en uno por cada iteración.

## El ejercicio:

Crea un archivo llamado for.js.

En ese archivo define una variable llamada `total` e iniciala con el número `0`.

Define una segunda variable llamada `limit` e iniciala con el número `10`.

Crea un bucle for con una variable `i` comenzando en 0 e incrementandose en 1 por cada iteracion. El bucle deberia ejecutarse mientras `i` sea menor que `limit`.

En cada iteración, añade el valor de `i` a la variable `total`.

Puedes utilizar lo siguiente:

```js
total += i;
```

Luego del for, utiliza `console.log()` para imprimir la variable `total` a la terminal.

Comprueba si tu programa es correcto utilizando el siguiente comando:

`javascripting verify for.js`

---
