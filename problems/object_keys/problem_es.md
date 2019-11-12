JavaScript nos da una manera nativa de listar todas las _llaves_ (_keys_) de
un objeto. Esto puede ser muy útil para iterar sobre las propiedades de un
objeto y manipular sus valores.

Veámos un ejemplo de cómo podríamos listar todas las propiedades de un objeto
usando el método **Object.keys()**:

```js
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}
const keys = Object.keys(car)

console.log(keys)
```

El código de arriba imprime un arreglo de _strings_, donde cada _string_ es una
_llave_ (_key_) en el objeto `car` (`['make', 'model', 'year']`).

## El ejercicio:

Crea un archivo llamado `object-keys.js`.

En ese archivo, define una variable llamada `car`:

```js
const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
```

Después define otra variable llamada `keys`:

```js
const keys = Object.keys(car)
```

Usa `console.log()` para imprimir la variable `keys` en la consola.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

```bash
javascripting verify object-keys.js
```
