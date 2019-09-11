Você pode acessar e manipular propriedades de objetos –– as chaves e valores de um objeto –– de uma maneira bem similar como fazemos com arrays.

Aqui está um exemplo usando **colchetes**:

```js
const example = {
  pizza: 'yummy'
}

console.log(example['pizza'])
```

O código acima vai imprimir no terminal a string `'yummy'`.

Como alternativa você pode utilizar **ponto** para obter o mesmo resultado:

```js
example.pizza

example['pizza']
```

As duas linhas de código acima retornarão `yummy`.

## Desafio:

Crie um arquivo chamado `object-properties.js`.

Neste arquivo, defina uma variável chamada `food` desta maneira:

```js
const food = {
  types: 'only pizza'
}
```

Use o `console.log()` para imprimir a propriedade `types` do objeto `food` no terminal.

Verifique se o seu programa está correto usando o comando:

```bash
javascripting verify object-properties.js
```
