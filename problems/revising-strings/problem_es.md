---

# MODIFICANDO STRINGS

A menudo necesitarás cambiar el contenido de una string.

Las strings tienen una funcionalidad por defecto que te permite reemplazar caracteres.

Por ejemplo a continuación veremos un uso del método `replace`:

```js
var ejemplo = 'este ejemplo es simple';
ejemplo = ejemplo.replace('simple', 'genial');
console.log(ejemplo);
```

Nota que para cambiar el valor que la variable `ejemplo` referencia, 
necesitamos utilizar el signo de igualdad de nuevo, esta vez con el resultado
del método `ejemplo.replace` del lado derecho del signo.

## El ejercicio:

Crea un archivo llamado `modificando-strings.js`.

Define una variable llamada `pizza` que referencie esta string: `la pizza es rica`

Utiliza el método `.replace()` para cambiar `rica` con `exquisita`.

Luego, utiliza `console.log` para imprimir los resultados del método `replace` a la terminal.

Comprueba si tu programa es correcto ejecutando el siguiente comando:

`javascripting verify modificando-strings.js`

---
