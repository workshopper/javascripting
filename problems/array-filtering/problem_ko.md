배열을 조작하는 방법은 여러가지가 있습니다.

대표적인 사용법으로 특정 값만 가진 배열로 필터링하는 것이 있습니다.

이걸 하기 위해 `.filter()` 메소드를 사용할 수 있습니다.

여기에 예제가 있습니다.

```js
const pets = ['cat', 'dog', 'elephant']

const filtered = pets.filter(function (pet) {
  return (pet !== 'elephant')
})
```

`filtered` 변수는 이제 `cat`과 `dog`만 가지고 있습니다.

## 도전 과제

`array-filtering.js`라는 이름의 파일을 만듭니다.

이 파일에 밑의 배열을 참조하는 `numbers`라는 변수를 정의합니다.

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

위에 있는 것처럼, `numbers.filter()`의 결과를 참조하는 `filtered`라는 변수를 선언합니다.

`.filter()` 메소드에 이렇게 생긴 함수를 넘깁니다.

```js
function evenNumbers (number) {
  return number % 2 === 0
}
```

`console.log()`를 사용해 `filtered` 배열을 터미널에 출력합니다.

이 명령어를 실행해 프로그램이 올바른지 확인하세요.

```bash
javascripting verify array-filtering.js
```
