### SCSS -> CSS
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
  - css 파일에 자동으로 생성되는 주석과 map 파일은 실행에 필요한 것이므로 삭제하면 안됨