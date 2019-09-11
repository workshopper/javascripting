
`스코프`는 접근할 수 있는 변수, 객체, 함수의 집합입니다.

JavaScript에는 `전역`과 `지역` 두 개의 스코프가 있습니다. 함수 선언 밖에 선언된 변수는 `전역` 변수이고, 그 값은 프로그램 전체에서 접근하고 수정할 수 있습니다. 함수 선언 안에 선언된 변수는 `지역` 변수입니다. 지역 변수는 함수가 실행 될 때마다 만들어지고 파괴되고, 함수 밖의 코드에서 접근할 수 없습니다.

다른 함수 안에 선언된 함수(중첩 함수)는 부모 함수의 스코프에 접근 할 수 있습니다.

아래 코드의 주석을 잘 읽어보세요.

```js
const a = 4 // 전연 변수 아래에 있는 함수에서 접근 가능

function foo () {
  const b = a * 3 // b는 foo 함수 밖에서 접근할 수 없지만, foo 함수 안에서

  function bar (c) {
    const b = 2 // bar 함수 스코프 안에서 생성한 다른 `b` 변수
    // 새로 만든 `b` 변수를 변경해도 오래된 `b` 변수에는 영향이 없음
    console.log(a, b, c)
  }

  bar(b * 4)
}

foo() // 4, 2, 48
```
즉시 실행하는 함수식(IIFE, Immediately Invoked Function Expression)은 지역 스코프를 만드는 일반적인 패턴입니다.
예제:
```js
(function () { // 함수식은 괄호로 둘러 쌈
  // 변수 선언은 여기서
  // 밖에서 접근할 수 없음
})() // 함수는 즉시 실행됨
```
## 도전 과제:

`scope.js`라는 파일을 만듭니다.

이 파일에 다음 코드를 복사합니다.
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

변수의 `스코프`에 관한 지식을 활용해 다음 코드를 `scope.js` 안의 함수 안에 넣어 `a: 1, b: 8,c: 6`를 출력하게 하세요.
```js
console.log(`a: ${a}, b: ${b}, c: ${c}`)
```

이 명령어를 실행해 프로그램이 올바른지 확인하세요.

```bash
javascripting verify scope.js
```
