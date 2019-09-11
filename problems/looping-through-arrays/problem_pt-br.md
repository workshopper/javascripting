Para este desafio usaremos um **loop for** para acessar e manipular uma lista de valores em um array.

Podemos acessar os valores de um array usando um contador.

Cada item em um array é identificado por um número inteiro, começando do `0`.

Então neste array a string `hi` é identificada pelo número `1`:

```js
const greetings = ['hello', 'hi', 'good morning']
```

Podemos acessá-la dessa forma:

```js
greetings[1]
```

Então dentro de um **loop for** usaríamos a variável `i` dentro dos colchetes ao invés de usar diretamente um inteiro.

## Desafio:

Crie um arquivo chamado `looping-through-arrays.js`.

Neste arquivo, defina uma variável chamada `pets` que referencie este array:

```js
['cat', 'dog', 'rat']
```

Crie um loop for que altera cada string no array para o plural.

Você usará uma instrução como esta dentro do loop:

```js
pets[i] = pets[i] + 's'
```

Depois do loop, use o `console.log()` para imprimir o array `pets` no terminal.

Verifique se o seu programa está correto usando o comando:

```bash
javascripting verify looping-through-arrays.js
```
