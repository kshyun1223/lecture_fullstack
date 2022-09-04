# 자바스크립트 
## 구성요소
### 자바스크립트
- 자바스크립트 = ECMAScript + DOM + BOM
    - 자바스크립트에 내장되어 있지만 서로 별개의 개념이므로 혼동하면 안된다
- BOM과 DOM도 API다
    - HTML과 CSS는 문서와 스타일링에 관한 API이다

### window 객체
- 브라우저의 최상위 디렉토리에 있는 객체이다
- BOM과 DOM은 window의 하위 객체이다
    - 브라우저 객체(BOM; Browser Object Model)
    - 문서 객체(DOM; Document Object Model)
    - 사실은 window.document 와 같은 형태여야 하지만 적을 때는 생략할 수 있게 기능이 지원되는 것이다
- window와 document라는 개념만 알면 나머지는 검색하는 것이 합리적이다
- 자바스크립트 학습이라는 관점에서는 BOM이나 DOM을 능숙하게 제어할 수 있다면 원하는만큼 커스텀할 수 있다

### 식별자(identifier)
- 어떠한 값을 돌려받아 반환하는 종류의 메서드는 이름에 get이나 select가 들어가 있다
  ``` javascript
  /* getElementById: ID를 기준으로 접근 */
  document.getElementById("root");

  /* getElementsByTagName: 태그명을 기준으로 모두 수집하여 배열로 반환 */
  document.getElementsByTagName("li");

  /* querySelector: 선택자를 query한다 -> CSS 선택자로 노드에 접근 */
  document.querySelector("#root > section");

  /* querySelectorAll: CSS 선택자로 노드에 접근하여 조건에 부합하는 모든 노드를 반환 */
  document.querySelectorAll("#root > ul > li");

  /* getElementsByClassName: 클래스를 기준으로 모두 수집하여 배열로 반환 */
  document.getElementsByClassName("class-attribute");
  ```

### 속성(property)
- 특정 노드의 내용에 접근하려면 `textContent` 속성으로 들어가야 한다
  - for + textContent
  ```javascript
  for(let i = 1; i <= 200; i++) {
      let doojin = document.createElement("li"); // 선언
      doojin.textContent = "li items" + i; // index
      root.appendChild(doojin); // 할당
    }
  ```
- `length`: 배열이나 문자열의 길이에 접근하려면 `length` 속성으로 들어가야 한다

- `innerHTML`: HTML 마크업 문자열로 간단히 DOM 조작이 가능하다
  - 엘리먼트 노드의 innerHTML 프로퍼티를 참조하면 엘리먼트 노드의 콘텐츠 영역(시작 태그와 종료 태그 사이)에 포함된 모든 HTML 마크업을 문자열로 반환한다
  - 여기에 문자열을 할당하면 문자열에 포함된 HTML 마크업이 파싱되어 엘리먼트 노드의 자식 노드로 DOM에 반영된다
    - 

## 내장(built-in) 메서드
### 값을 '변경'하거나 '설정'하는 종류의 메서드는 이름에 set이 들어가 있다

### addEventListener + 클릭 이벤트
```javascript
button.addEventListener('click', function() {
  /* 처리할 내용 */
});
```
### parstInt: 형변환
```javascript
/* 숫자로 이루어진 문자열 */
let a = "1";
console.log(typeof a); // string
let b = parseInt(a); // int = integer = 정수
console.log(typeof b); // number
/* 문자로 이루어진 문자열 */
let c = "안녕하지롱";
let d = parseInt(c); // 형변환
console.log(d); // NaN
```
- 숫자가 아닌 문자로 이루어진 문자열을 숫자로 변환하려고 시도하면 NaN이라는 값이 뜬다. 
- 대부분의 언어에서는 이러한 경우 타입을 바꿀 수 없다고 판단하여 에러를 반환하지만, 자바스크립트의 경우 NaN(Not a Number)이라는 값을 반환한다. 
- 자바스크립트의 단점인 '에러로 출력되지 않아서 난처한 경우'의 대표적인 사례이다

## 편의 기능
### 이벤트 객체(event object)
- 이벤트는 상당히 빈번하게 만들기 때문에 자바스크립트에 자동화 기능이 내장되어 있다
- 자동화된 기능을 사용할 때는 예상치 못한 버그가 발생할 수 있기 때문에 반드시 검증이 필요하다
- 이를테면 **조건문으로 데이터타입**을 제한할 수 있다
  - 조건문에서는 `&&`(and)와 `||`(or) 연산자를 사용하면 코드량을 상당히 줄일 수 있다
```javascript
function style(containerElement, operateColor, eventType){
  if(typeof(containerElement) === "object" && 
     typeof (operateColor) === "string" &&
     typeof (eventType) === "string"
    ){
    let colorData = operateColor;
    containerElement.addEventListener(eventType, function(event){
      event.target.style.backgoundColor = colorData;
    });
  } else {
    console.log("첫번째 매개변수 타입이 객체여야 합니다");
  }
}
```

### 함수로 스타일링(styleProps)
```javascript
function elementStyling(element, styleProps, textContent = "") {
  for (const key in styleProps) { 
    element.style[key] = styleProps [key]; 
  } 
  element.textContent = textContent;
}

elementStyling (another, { 
  backgroundColor : "salmon", 
  width: "100vw", 
  height: "200px", 
  color: "#ccc" 
}, "wow textContent!")
```

### 구조분해할당(Destructuring assignment)
- 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식
  - `let second = ho.eunsoo.address.region.detail.second`
  - `const {eunsoo:{address:{region:{detail:{second:variable}}}}} = ho;`

### this 키워드
```javascript
    element.addEventListener('click', function() {
      this.style.backgroundColor = "pink";
    });
```
- 매번 반복설명하는 것을 편리하게 지정할 수 있게 해줌
- 콘솔에 출력해서 무슨 값이 나오는지만 확인하면 간단하게 해결된다

### 화살표함수(arrow function)
- 화살표함수는 콜백함수 내부에서 this가 전역객체를 가리키는 문제를 해결하는 대안으로 유용하다
- 화살표함수는 함수선언문으로 정의할 수 없고 함수표현식으로 정의해야 한다
- 매개변수가 한개인 경우 소괄호를 생략할 수 있다
- 표현식 하나로만 구성된 경우에는 중괄호를 생략할 수 있다
  - 표현식: 값으로 평가될 수 있는 구문


### 템플릿 리터럴 - 표현식 삽입(expression interpolation)
- 문자열 안에 표현식을 삽입하여 연산자보다 효율적으로 문자열을 조합할 수 있다
- 방법: `${}`으로 표현식을 감싼다

### 모듈
- 스크립트 태그로 모듈 호출: `<script src="./index.js" type=”module” defer></script>`
- 외부 스크립트 파일이 하나가 아니라 여러개인 경우 반드시 모듈이라고 선언해야 사용이 가능하다
- npm init으로 생성된 package.json 파일에도 “type”:”module”이라고 추가해야 한다
- 스크립트에 defer 어트리뷰트를 적용하면 HTML 파싱(DOM 생성)이 완료된 이후에 DOMContentLoaded 이벤트의 발생과 함께 스크립트가 실행된다

### 생성자함수(constructor function)에 의한 객체 생성
- 객체 리터럴은 한번에 하나의 객체만 생성한다. 따라서 동일한 프로퍼티를 갖는 객체를 여러개 생성해야 하려면 각각 새로 작성해야 하기 때문에 비효율적이다.
- 생성자함수에 의한 객체 생성은 마치 객체를 생성하기 위한 템플릿처럼 생성자함수를 사용하여 동일한 프로퍼티를 갖는 객체들을 간편하게 생성할 수 있다


## 배열 관련 메서드
### 의의
- DOM API가 모두 배열 기반이기 때문에 자바스크립트는 배열 전용 메소드를 충실하게 지원한다
- 배열 전용 메서드들은 콜백함수의 원리로 작동한다

### forEach
```javascript
function forEachPolyfill() { // 원형(Polyfill)
  for (let i = 0; i < arr.length; i++) {
    console.log(i+1);
    }
  }

arr.forEach(function(a, b) { // 메서드
  console.log(a + "값은 인덱스 : " + b);
})

arr.forEach(a=>console.log(a)); // 화살표함수
```

### map
```javascript
console.log(digimon.map(element => {
  return element + "님";
}));
```
