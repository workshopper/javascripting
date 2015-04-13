---

# PROPIEDADES DE OBJETOS

Puedes acceder y manipular propiedades de objetos –– las **llaves** y **valores** que un objeto contiene –– utilizando una forma muy similar que con arrays. 

Un ejemplo usando **corchetes**:

```js
var ejemplo = {
  programar: 'divertido'
};

console.log(ejemplo['programar']);
```

El código anterior imprimirá la string `divertido` al a terminal.

Alternativamente, puedes usar la **notación de punto** para obtener resultados idénticos:

```js
ejemplo.programar;

ejemplo['programar'];
```

La dos líneas de código anteriores retornaran `divertido`.

## El ejercicio:

Crea un archivo llamado `propiedades-de-objetos.js`.

En ese archivo, define una variable llamada `bicicleta` de la siguiente forma:

```js
var bicicleta = {
  tipos: ['todo terreno', 'de carrera', 'hipster']
};
```

Utiliza `console.log()` para imprimir la propiedad `tipos` del objeto `bicileta` a la terminal.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

`javascripting verify propiedades-de-objetos.js`

---
