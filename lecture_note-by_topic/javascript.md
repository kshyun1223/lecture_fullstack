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

### 주요 메서드
- 어떠한 값을 돌려받아 반환하는 종류의 메서드는 이름에 get이 들어가 있다
	- getElementById() : 이미 결정된 값인 '아이디' 데이터를 통해 값(요소)를 돌려받았다

- 값을 '변경'하거나 '설정'하는 종류의 메서드는 이름에 set이 들어가 있다
	- setAttribute() : 속성(attribute)를 특정 값으로 '설정'했다.
	- 초기설정(처음설정)인 경우, initialized 약칭 init으로 부르기도 한다.

### event object
- 이벤트는 상당히 빈번하게 만들기 때문에 자바스크립트에 자동화 기능이 내장되어 있다
- 자동화된 기능을 사용할 때는 예상치 못한 버그가 발생할 수 있기 때문에 반드시 검증이 필요하다
- 이를테면 조건문으로 데이터타입을 제한할 수 있다
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

