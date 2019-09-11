함수는 몇 개의 인자도 받도록 선언할 수 있습니다. 인자는 어떤 타입도 사용 가능합니다. 인자는 문자열, 숫자, 배열, 객체이거나 심지어 다른 함수일 수도 있습니다.

여기 예제가 있습니다.

```js
function example (firstArg, secondArg) {
  console.log(firstArg, secondArg)
}
```

우리는 두 개의 인자를 가지는 함수를 이렇게 **호출**할 수 있습니다.

```js
example('hello', 'world')
```

위 예제는 터미널에 `hello world`를 출력할 것입니다.

## 도전 과제

`function-arguments.js`라는 이름의 파일을 만듭니다..

이 파일에서는 3개의 인자를 받는 `math`라는 이름의 함수를 선언합니다. 인자 이름은
참조로만 사용한다는 것을 이해하는 것은 중요합니다.

인자들에는 편한 이름을 지으세요.

`math` 함수는 두 번째와 세 번째 인자를 곱하고, 곱한 값에 첫 번째 인자를 더해 얻은 결과를 출력합니다.

그런 이후, `console.log()`의 괄호 안에서 첫 번째 인자로 `53`, 두 번째로 숫자 `61`, 세 번째 인자로 `67`을 받는 `math()`함수를 호출합니다.

이 명령어를 실행해 프로그램이 올바른지 확인하세요.

```bash
javascripting verify function-arguments.js
```
