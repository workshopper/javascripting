Uma função basicamente recebe uma entrada, processa a entrada, e então produz uma saída.

Aqui está um exemplo:

```js
function example (x) {
  return x * 2
}
```

Podemos **chamar** a função `example` dessa forma para conseguir o número 10:

```js
example(5)
```

O exemplo acima assume que a função `example` irá receber um número como um argumento/parâmetro –– ou seja, como entrada –– e irá retornar este número multiplicado por 2.

## Desafio:

Crie um arquivo chamado `functions.js`.

Neste arquivo, defina uma função chamada `eat` que recebe um argumento chamado `food`
que deverá ser uma string.

De dentro da função retorne o argumento `food` dessa maneira:

```js
return food + ' tasted really good.'
```

Dentro do parênteses do `console.log()`, chame a função `eat()` com a string `bananas` como argumento.

Verifique se o seu programa está correto executando este comando:

```bash
javascripting verify functions.js
```
