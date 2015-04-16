---

# ACCEDIENDO A LOS VALORES DE UN ARRAY

Se puede tener acceso a los elementos de un Array a través del número de índice.

El número de índice comienza en cero y finaliza en el valor de la propiedad longitud (length) del array, restándole uno. 

A continuación, un ejemplo:

```js
	var mascotas = ['gato', 'perro', 'rata'];

	console.log(mascotas[0]);
```

El código de arriba, imprime el primer elemento del array de `mascotas` - string `gato`

Los elementos del Array se deben acceder, únicamente, usando la notación de paréntesis.

Notación de punto es inválida.

Notación válida:

```js
	console.log(mascotas[0]);
```

Notación inválida:
```
	console.log(mascotas.1);
```

## El ejercicio:

Crea un archivo llamado `accediendo-valores-array.js`

En ese archivo, define un array llamado `comida` :
```js
var comida = ['manzana', 'pizza', 'pera'];
```

Usa `console.log()` para imprimir el `segundo` valor del array en la terminal.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

`javascripting verify accediendo-valores-array.js`

---
