Existem muitas formas de manipular arrays.

Uma tarefa comum é filtrar um array para que ele tenha somente alguns valores.

Para isso podemos usar o método `.filter()`.

Aqui está um exemplo:

```js
const pets = ['cat', 'dog', 'elephant']

const filtered = pets.filter(function (pet) {
  return (pet !== 'elephant')
})
```

A variável `filtered` irá conter apenas `cat` e `dog`.

## Desafio:

Crie um arquivo chamado `array-filtering.js`.

Neste arquivo, defina uma variável chamada `numbers` que referencia este array:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Como acima, defina uma variavel chamada `filtered` com referência ao resultado de `numbers.filter()`.

A função que você passa para o método `.filter()` será igual essa:

```js
function evenNumbers (number) {
  return number % 2 === 0
}
```

Use o `console.log()` para imprimir o array `filtered` no terminal.

Verifique se o seu programa está correto executando este comando:

```bash
javascripting verify array-filtering.js
```
