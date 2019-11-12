JavaScript nos fornece uma maneira nativa de listar todas as _chaves_ (_keys_) disponiveis de um objeto. Isso pode ser util para iterar em todas as propriedades de um objeto e manipular seus valores.

Vejamos um exemplo de como podemos listar todas as chaves de um objeto utilizando o método Object.keys():

```js
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}
const keys = Object.keys(car)

console.log(keys)
```

O código acima imprime um array de _strings_, onde cada _string_ é uma _chave_ (_key_) do objeto `car`.  `['make', 'model', 'year']`

## Desafio:

Crie um arquivo chamado `object-keys.js`.

Dentro desse arquivo, defina uma variavel chamada `car`:

```js
const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
```

Então defina outra variavel chamada `keys`:
```js
const keys = Object.keys(car)
```

Utilize `console.log()` para imprimir a variavel `keys`  no terminal.

Verifique se seu programa está correto executando este comando:

```bash
javascripting verify object-keys.js
```
