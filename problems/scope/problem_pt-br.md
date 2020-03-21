`Escopo` é o conjunto de variáveis, objetos, e funções dos quais temos acesso.

O JavaScript tem dois escopos: `global` e `local`. Uma variável que é declarada fora da definição de uma função é uma variável `global`, e o seu valor pode ser acessado e modificado á partir de qualquer parte do seu programa. Uma variável que é declarada dentro da definição de uma função é `local`. Ela é criada e destruída toda vez que a função é executada, e não pode ser acessada por qualquer código fora da função.

Funções definidas dentro de outras funções, conhecidas como funções aninhadas, tem acesso ao escopo da função pai.

Preste atenção nos comentários do código abaixo:

```js
const a = 4 // uma variável global, pode ser acessada pelas funções abaixo

function foo () {
  const b = a * 3 // b não pode ser acessada fora da função, mas pode ser acessada pelas funções
  // definidas dentro da função foo
  function bar (c) {
    const b = 2 // uma outra variável `b` é criada dentro do escopo da função bar
    // as mudanças dessa nova variável `b` não afeta a outra variável `b`
    console.log(a, b, c)
  }

  bar(b * 4)
}

foo() // 4, 2, 48
```
IIFE, Immediately Invoked Function Expression (Expressão de Função Executada Imediatamente em tradução livre), é um padrão bastante usado para criar escopos locais.

Exemplo:
```js
(function () { // a expressão da função é cercada por parênteses
  // as variáveis definidas aqui
  // não podem ser acessadas do lado de fora
})() // a função é executada imediatamente
```
## Desafio:

Crie um arquivo chamado `scope.js`.

Nesse arquivo, copie o seguinte código:
```js
const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;

    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8
      })()
    })()
  })()
})()
```

Utilize seus conhecimentos sobre `escopo` de variáveis e posicione o seguinte código dentro de uma das funções no 'scope.js'
fazendo o resultado ser `a: 1, b: 8,c: 6`
```js
console.log(`a: ${a}, b: ${b}, c: ${c}`);
```

Verifique se o seu programa está correto executando o comando:

```bash
javascripting verify scope.js
```
