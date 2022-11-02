## react.js 정리
### 폴더 트리
```
public
└─index.html
```
- index.html에 `<div id="root"></div>` 컴포넌트가 있다

```
scr
└─ index.js
```
- 컴포넌트는 src 폴더에 넣는다. src는 source의 약자이다.
- src 폴더에 프로젝트의 메인이 되는 index.js 파일이 있다
- index.js에서 `document.getElementById(root)` 구문으로 index.html의 root 컴포넌트를 호출한다

### Component 
- 컴포넌트 원리: 리액트가 갖고 있는 Component라는 클래스를 상속해서 새로운 App 클래스를 만든다. 그리고 그 클래스는 render라는 메서드를 가지고 있다.

- `class Subject extends Component {`
  - Subject라는 컴포넌트를 클래스로 선언했다
  - 클래스 컴포넌트는 반드시 render 함수가 필요하다
  - 클래스 컴포넌트는 포함된 함수의 function 키워드를 생략한다

- 컴포넌트의 모든 요소들은 하나의 부모에 포함되어야 한다 => 컴포넌트를 선언하는 함수는 반드시 하나의 태그만 리턴해야 하기 때문이다

### Props