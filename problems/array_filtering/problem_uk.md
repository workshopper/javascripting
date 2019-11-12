Є багато способів маніпуляції масивами.

Часто постає потреба відфільтрувати масиви за певною умовою.

Для цього ми можемо використати метод `.filter()`.

Приклад:

```js
const pets = ['cat', 'dog', 'elephant']

const filtered = pets.filter(function (pet) {
  return (pet !== 'elephant')
})
```

Змінна `filtered` буде містили лише елементи `cat` та `dog`.

## Завдання:

Створити файл 'array-filtering.js'.

У цьому файлі, створіть змінну 'numbers', що міститиме такий масив:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Як у прикладі вище, оголосіть змінну `filtered`, що міститиме результат виконання `numbers.filter()`.

Функція, яку ви маєте передати у метод `.filter()` буде виглядати приблизно так:

```js
function evenNumbers (number) {
  return number % 2 === 0
}
```

Скористайтесь `console.log()`, щоб вивести масив `filtered` в термінал.

Перевірте вашу відповідь запустивши команду:

```bash
javascripting verify array-filtering.js
```
