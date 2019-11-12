Podemos acessar elementos de um array através de um número que representa sua posição, conhecido como índice.

O valor do índice inicia com 0 e vai até o valor que representa o tamanho do array menos 1.

Aqui está um exemplo:


```js
const pets = ['cat', 'dog', 'rat']

console.log(pets[0])
```

O código acima imprime o primeiro elemento do array `pets` - a string `cat`.

Os elementos do array devem ser acessados através do uso do valor do índice entre colchetes.

Utilizar ponto para acessar o elemento não é válido.

Uso válido:

```js
console.log(pets[0])
```

Uso invalido:
```
console.log(pets.1);
```

## Desafio:

Crie um arquivo chamado `accessing-array-values.js`.

Neste arquivo, defina o array `food` :
```js
const food = ['apple', 'pizza', 'pear']
```


Use o `console.log()` para imprimir o segundo valor do array no terminal.

Verifique se o seu programa está correto executando este comando:

```bash
javascripting verify accessing-array-values.js
```
