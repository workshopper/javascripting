함수는 입력을 받는 코드의 블록입니다. 그 입력을 처리해서 출력을 만듭니다.

여기에 예제가 있습니다.

```js
function example (x) {
  return x * 2
}
```

이렇게 함수를 **호출**하면 숫자 10을 얻을 수 있습니다.

```js
example(5)
```

위의 예제는 `example` 함수가 숫자를 인자(입력)로 받아 그 숫자에 2를 곱한 값을 반환합니다.

## 도전 과제

`functions.js`라는 파일을 만듭니다.

그 파일에서 `food`를 인자로 받는 `eat` 함수를 선언합니다. `food`는 문자열이어야 합니다.

함수 안에서 `food` 인자를 이렇게 반환합니다.

```js
return food + ' tasted really good.'
```

`console.log()`의 괄호 안에서 문자열 `bananas`를 인자로 하는 `eat()` 함수를 호출합니다.

이 명령어를 실행해 프로그램이 올바른지 확인하세요.

```bash
javascripting verify functions.js
```
