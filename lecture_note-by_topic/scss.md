# SCSS
### SCSS와 CSS의 관계
- 선언
  ```scss
  @mixin flex-setting() {
    display:flex;
    justify-content:center;
    align-items: center;
  }
  ```
- 호출
  ```scss
  #root {
    width:100vw;
    height:100vh;
    background-color: grey;
    @include: flex-setting;
  }
  ```

- 컴파일
  ```css
  #root {
    width: 100vw;
    height: 100vh;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
  } /*# sourceMappingURL=mixin.css.map */
  ```
  - css 파일에 자동으로 생성되는 주석과 `.map` 파일은 실행에 필요한 것이므로 삭제하면 안됨

### 변수
- SCSS에서 변수는 `$`라는 표시를 앞에 붙여서 선언하거나 할당한다 

### 중첩(nesting)
-  SCSS는 CSS와 달리, 상위 선택자의 반복을 생략하고 마치 HTML처럼 구조화된 코드를 작성할 수 있다

### 함수
- SCSS에서 함수는 `@mixin`으로 선언하고 `@include`로 할당한다

### 반복문 
- SCSS에서 반복문은 `@each ~ in` 과 같은 형태로 사용하는데, 자바스크립트나 파이썬의 `for ~ in` 과 용법이 같다
