---

# BLOQUE CONDICIONAL

Los bloques condicionales son utilizados, partiendo de una condición booleana específica, alterar el control de flujo de un programa.

Un bloque condicional se parece a lo siguiente:

```js
if (n > 1) {
  console.log('the variable n is greater than 1.');
} else {
  console.log('the variable n is less than or equal to 1.');
}
```

Dentro de los paréntesis debes ingresar una sentencia lógica, significa que deberá ser verdadera (true) o falsa (false).

El *else* block es opcional y contiene el código que será ejecutado si la sentencia lógica dentro de los paréntesis es falsa.

## El ejercicio:

Crea un archivo llamando `bloque-condicional.js`.

En ese archivo, declara una variabe llamada `fruit`.

Haz la variable `fruit` referenciar al valor **orange** de tipo string.

Luego utiliza `console.log()` para imprimir a la terminal "**The fruit name has more than five characters.**" si el length de la variable `fruit` es mayor a cinco.
Imprime "**The fruit name has five characters or less.**" de lo contrario.

Comprueba si tu programa funciona correctamente ejecutando el siguiente comando:

`javascripting verify bloque-condicional.js`

---
