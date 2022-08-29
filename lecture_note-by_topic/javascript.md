# 자바스크립트 
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

### 식별자(identifier) 관련 메소드
- 어떠한 값을 돌려받아 반환하는 종류의 메서드는 이름에 get이나 select가 들어가 있다
- getElementById: ID를 기준으로 접근
  - `document.getElementById("root");`
- getElementsByTagName: 태그명을 기준으로 모두 수집하여 배열로 반환
  - `document.getElementsByTagName("li");`
- querySelector: 선택자를 query한다 -> CSS 선택자로 노드에 접근
  - `document.querySelector("#root > section");`
- querySelectorAll: CSS 선택자로 노드에 접근하여 조건에 부합하는 모든 노드를 반환
  - `document.querySelectorAll("#root > ul > li");`
- getElementsByClassName: 클래스를 기준으로 모두 수집하여 배열로 반환
  - `document.getElementsByClassName("class-attribute");`

### createElement / appendChild
```javascript
const merong = document.createElement("div"); //선언
const body = document.querySelector('body'); //부모 요소를 호출 
body.appendChild(merong); //할당
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
- 배열이나 문자열의 길이에 접근하려면 length 속성으로 들어가야 한다

### 내장 메서드
- 값을 '변경'하거나 '설정'하는 종류의 메서드는 이름에 set이 들어가 있다
- addEventListener + 클릭 이벤트
```javascript
button.addEventListener('click', function() {
  /* 처리할 내용 */
});
```

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

### 배열 관련 메서드
- DOM API가 모두 배열 기반이기 때문에 자바스크립트는 배열 전용 메소드를 충실하게 지원한다
- 배열 전용 메서드들은 콜백함수의 원리로 작동한다
그 외 키워드: 객체의 구조, 콜백함수, 리턴, 

### 원형(polyfill)

함수 종류
작성법으로 구분
이름이 있는 기명함수
이름이 없는 익명함수
화살표(=>)로 선언하는 화살표함수
함수 리터럴(함수 표현식; function expression)
형태: let a = function() {};
익명함수(anonymous function)인데 마치 기명함수처럼 사용할 수 있다
작성 위치로 구분
매개변수 자리에 함수가 있다면 콜백함수라고 부른다
함수 안에 다른 함수가 호출되는 경우 고차함수라고 부른다
콜백함수
형태: addElementListner(“문자열”, 함수)
함수의 매개변수에 함수가 들어가는 경우 콜백함수라고 일컫는다
함수의 매개변수 자리에는 무엇이든 들어올 수 있다
객체지향 프로그래밍
객체로 모든 것을 묶어서 관리하는 방식(wrapping)
자바는 이 방식만을 지원하기 때문에 자바의 영향으로 한국에서 압도적으로 많이 사용된다
코딩 잘 하는 사람, 클린코드를 잘 하는 사람은 객체를 잘 사용한다
물론 함수로도 얼마든지 할 수 있다. 그러면 함수지향 프로그래밍이 된다.
분류 형식의 객체는 이름이 다소 길더라도 의미를 명확하게 나타내는 것이 중요하다
객체 === 배열
객체: 이름이 있는 목록
배열: 순서가 있는 목록
배열은 객체의 ‘하위 타입’이라고 한다.
실무에서 서비스를 만들 때는 A to Z가 아니라 H to Z 정도를 하게 된다
A부터 H까지는 이미 다 만들어진 상태
this키워드
매번 반복설명하는 것을 편리하게 지정할 수 있게 해줌
콘솔에 출력해서 무슨 값이 나오는지만 확인하면 간단하게 해결된다
객체와 this를 함께 사용했을 때의 시너지 효과를 생각해보자
객체
C에서 C++이 파생된 이유가 객체를 추가하기 위해서였다
객체의 키와 값을 직접 작성하는 것을 객체 리터럴 정적 할당(object literal static assignment) 방식이라고 한다
구조화 할당(structuring assignment): 건물을 짓듯이 먼저 설계를 해놓고 시공하겠다
비구조화 할당(destructuring assignment)
다양한 객체 리터럴을 접해보면 다른 사람이 작성한 코드도 잘 읽을 수 있다
변수
변수는 수명(lifecycle)이 있다: 임의로 바꿀 수도 있을 것이다
전역변수(const): 어디서든지 사용할 것들은 전역변수로 작성한다
수명이 무한대이다
식별자는 전역변수다
지역변수(let): 변해야 하는 것들은 지역변수로 작성한다
필요할때만 작동하는 변수를 만들고싶다면 중괄호 사이에 있어야 한다
반복문의 i는 지역변수다, 매개변수도 지역변수다
var: 재선언은 나쁜 것이다. var의 유일한 존재 의의는 레거시코드의 유지보수 뿐이다.
자바스크립트의 단점: 선언이 많다
const 사용 권장 -> 강력하게 사고 예방 가능
referenceError
typeError
syntaxError
불변성(immutable): const 상수 선언은 불변하기 때문에 안정적이다 (vs. 가변성; immutable)
불변성 때문에 개발자들은 주로 함수형을 선호한다: 리액트가 객체에서 함수방식으로 전환했다 Const
값은 변할 수 있어도 타입은 변하지 않는다: 애플리케이션 안정성 도모
객체
자료구조에서 객체는 언제든지 접근할 수 있는 경로(path)를 제공해준다
ho.study[어쩌고]: 접근법; access; 접속
ho라는 객체를 만들 때 정적으로 값을 작성했다
ho라는 객체의 어떤 값을 동적으로 처리했다
API
https://developers.naver.com/main/
API는 다른 사람이 만들어 놓은 객체이다
공식 문서를 통해 원하는 정보를 빠르게 습득하는 능력이 중요하다
배열 메서드가 가장 중요함: ‘문자열 === 배열’이기 때문이다
거기에 더해서 반복문, 조건문
API를 사용해서 표현하면 프론트, 저장하면 백엔드
형태
HTML: XML 스타일로 데이터를 제공: container + item
JSON: js 객체 스타일로 데이터를 제공: 부모스코프 + 자식스코프




