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

El termino `i < 10;` indica cuantas veces iterará.

Continuará iterando si `i` es menor que `10`.

El termino `i++` incrementa la variable `i` en uno por cada iteración.

## El ejercicio:

Crea un archivo llamado for.js.

En ese archivo define una variable llamada `total` e iniciala con el número `0`.

Define una segunda variable llamada `limite` e iniciala con el número `10`.

Crea un for que itere 10 veces. En cada iteración, añade el valor de `i` a la variable `total`.

Puedes utilizar lo siguiente:

```js
total += i;
```

Luego del for, utiliza `console.log()` para imprimir la variable `total` a la terminal.

Comprueba si tu programa es correcto utilizando el siguiente comando:

`javascripting verify for.js`

---
