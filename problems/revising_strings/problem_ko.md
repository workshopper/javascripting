문자열의 내용을 바꿀 경우가 종종 생깁니다.

문자열은 내용을 조작하고 살펴보는 내장 기능을 가지고 있습니다.

`.replace()` 메소드를 사용하는 예제입니다.

```js
let example = 'this example exists'
example = example.replace('exists', 'is awesome')
console.log(example)
```

`example` 변수가 참조하는 값을 바꾸는 것에 주의하세요. 등호를 다시 사용해야 합니다. 이번에는 `example.replace()` 메소드를 등호의 오른편에 두었습니다.

## 도전 과제

`revising-strings.js`라는 파일을 만드세요.

`'pizza is alright'` 문자열을 참조하는 `pizza`라는 변수를 정의합니다.

`.replace()` 메소드를 사용해 `alright`을 `wonderful`로 바꿉니다.

`console.log()`를 사용해 `.replace()` 메소드의 결과를 터미널에 출력합니다.

이 명령어를 실행해 프로그램이 올바른지 확인하세요.

`javascripting verify revising-strings.js`
