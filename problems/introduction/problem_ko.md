정돈을 위해 이 워크숍을 위한 폴더를 만듭시다.

```bash
mkdir javascripting
```

위 명령어를 실행해 `javascripting`이라는 디렉터리(다른 이름이어도 됩니다)를 만드세요.

```bash
cd javascripting
```

을 통해 `javascripting` 폴더 안으로 디렉터리를 변경하세요.

```bash
touch introduction.js
```

를 입력해 `introduction.js`이라는 파일을 만드세요.

윈도우라면

```bash
type NUL > introduction.js
```

(`type`도 명령어의 일부입니다!)로 만들 수 있습니다.

좋아하는 편집기에서 파일을 열고 다음 내용을 넣으세요.

```js
console.log('hello')
```

파일을 저장하고 프로그램이 올바른지 다음 명령어를 실행해 확인하세요.

```bash
javascripting verify introduction.js
```

하지만 튜토리얼 내내 편한 이름을 사용하셔도 됩니다. 모든 연습 문제에 `catsAreAwesome.js` 같은 이름을 사용하시고 싶다면, 그럴 수 있습니다. 그냥 다음 명령어를 실행해 확인하세요.

```bash
javascripting verify catsAreAwesome.js
```
