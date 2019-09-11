지정된 조건을 기반으로, 조건문은 프로그램의 흐름 제어에 사용됩니다.

조건문은 이렇습니다.

```js
if (n > 1) {
  console.log('the variable n is greater than 1.')
} else {
  console.log('the variable n is less than or equal to 1.')
}
```

괄호 안에 반드시 논리 구문을 넣어야 합니다. 구문의 결과는 true나 false로 끝나야 합니다.

else 블록은 생략 가능하며 구문이 false일 경우 실행될 코드가 들어갑니다.

## 도전 과제

`if-statement.js`라는 파일을 만듭니다.

이 파일 안에서, `fruit`라는 이름의 변수를 선언합니다.

`fruit` 변수가 문자열 타입의 **orange**라는 값을 참조하도록 하세요.

그리고 `console.log()`로 `fruit`의 값의 길이가 5보다 크면 **"The fruit name has more than five characters."**를 출력하고, 그렇지 않은 경우엔 "**The fruit name has five characters or less.**"를 출력하세요.

이 명령어를 실행해 프로그램이 올바른지 확인하세요.

```bash
javascripting verify if-statement.js
```
