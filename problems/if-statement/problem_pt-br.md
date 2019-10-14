Instruções condicionais são usadas para alterar o controle de fluxo de um programa, baseado em uma condição de verdadeiro ou falso.

Uma instrução condicional é mais ou menos assim:

```js
if (n > 1) {
  console.log('the variable n is greater than 1.')
} else {
  console.log('the variable n is less than or equal to 1.')
}
```

Dentro dos parênteses você deve informar uma instrução de lógica, com a idéia de que o resultado seja `true` ou `false`. 

O bloco `else` é opcional e contém o código que será executado caso a instrução resulte em false.

## Desafio:

Crie uma arquivo chamado `if-statement.js`.

No arquivo criado, declare uma variável chamada `fruit`.

Faça a variável `fruit` referenciar a cadeia de caracteres **orange**.

Depois use o `console.log()` para imprimir "**The fruit name has more than five characters."** se o tamanho do valor da variável `fruit` é maior do que cinco.
Caso contrário, imprima "**The fruit name has five characters or less.**"

Verifique se o seu programa está correto executando o comando:

```bash
javascripting verify if-statement.js
```
