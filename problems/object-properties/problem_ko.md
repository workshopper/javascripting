배열과 매우 비슷한 방법으로 객체의 속성(객체가 가지고 있는 키와 값)에 접근하고 그를 조작할 수 있습니다.

**대괄호**를 사용하는 예제입니다.

```js
const example = {
  pizza: 'yummy'
}

console.log(example['pizza'])
```

위의 코드는 문자열 `'yummy'`를 터미널에 출력합니다.

아니면, **점(.) 구문**으로 같은 결과를 얻을 수 있습니다.

```js
example.pizza

example['pizza']
```

위에 있는 두 줄의 코드는 양쪽 다 `yummy`를 반환합니다.

## 도전 과제

`object-properties.js`라는 파일을 만듭니다.

파일 안에서 `food`라는 변수를 이렇게 정의합니다.

```js
const food = {
  types: 'only pizza'
}
```

`console.log()`를 사용해 `food` 객체의 `types` 속성을 터미널에 출력합니다.

이 명령어를 실행해 프로그램이 올바른지 확인하세요.

```bash
javascripting verify object-properties.js
```
