### window 객체
- 브라우저의 최상위 디렉토리에 있는 객체이다
- BOM과 DOM은 window의 하위 객체이다
    - 브라우저 객체(BOM; Browser Object Model)
    - 문서 객체(DOM; Document Object Model)
    - 사실은 window.document 와 같은 형태여야 하지만 적을 때는 생략할 수 있게 기능이 지원되는 것이다
- window와 document라는 개념만 알면 나머지는 검색하는 것이 합리적이다
- 자바스크립트 학습이라는 관점에서는 BOM이나 DOM을 능숙하게 제어할 수 있다면 원하는만큼 커스텀할 수 있다

### 자바스크립트
- 자바스크립트 = ECMAScript + DOM + BOM
    - 자바스크립트에 내장되어 있지만 서로 별개의 개념이므로 혼동하면 안된다
- BOM과 DOM도 API다
    - HTML과 CSS는 문서와 스타일링에 관한 API이다

### 식별자
- 식별자의 종류는 상당히 많기 때문에 일일히 외우기보다는 그때그때 확인하는 편이 합리적이다
- `console.dir()`: 요소를 JSON과 같은 트리 구조로 출력 하고, DOM 객체의 전체 표현을 보려고 할 때 유용.
- `console.log()`: 요소를 HTML과 같은 트리 구조로 출력 하고, DOM 요소에 대해 특별한 처리를 제공.

```javascript
document.getElementById('root');
document.getElementsByTagName("li"); //태그명을 기준으로 모두 수집하여 배열로 반환
document.querySelector('#root > section'); //선택자를 query한다 -> CSS 선택자로 노드에 접근
document.querySelectorAll('#root > ul > li'); //CSS 선택자로 노드에 접근하여 조건에 부합하는 모든 노드를 반환
document.getElementsByClassName('class-attribute'); //클래스를 기준으로 모두 수집하여 배열로 반환
```

### 연산자
- 프로그래밍 언어는 true, false 값을 출력하는데, 이것은 불리언 타입의 장점이다
  - 사람이 예상할 수 있는 경우의 수를 만들어준다
  - 분기 처리 : 두가지 혹은 그 이상의 상황, 데이터를 처리
- 비교연산자
  - `=` : 대입연산자
  - `===` : 비교(일치)연산자 -> 일치하면 true
  - `!==` : 부정연산자 -> 일치하지 않으면 true
  - `>`, `<` : 큰지 작은지 비교
  - `>=` : 크거나 같으면 참
  - `<=` : 작거나 같으면 참
- `&` (앰퍼샌드)
  - `&&`: 그리고, and, 논리곱이라는 의미를 가진 연산자
  - 조건 1과 조건 2가 모두 참이어야 참
- `|` (버티컬바)
  - `||` : 혹은, for, 논리합 이라는 의미를 가진 연산자
  - 조건 1과 조건 2가 둘중 하나라도 참이면 참

### 함수
- 입구 역할을 하는 매개변수(parameter; 인자)
  ```javascript
  function developer(who) { // 선언, 매개변수 who
    console.log(who + "머리가 좀 아픔");
    return "job";
  }
  developer("내"); // 호출
  ```
  - 함수는 매개변수를 통해 재료를 받는다 -> 재료를 무언가 가공한다 -> 결과물이 무엇이 될지 모른다

- 기계 역할을 하는 실행부(execution; 인수; argument ; args)
  - 함수는 반환을 통해 다른 데이터로 바뀐다: 반환이 없으면 실행만 하고 종료된다

- 출구 역할을 하는 반환(return)
  - 함수는 리턴이 없을 때가 있다: 목적이 실행일 때
  - 함수는 리턴이 필요할 때가 있다: 목적이 가공된 값일 때

- ReferenceError: 존재하지 않는 변수를 참조했을 때 나타나는 에러
- undefined: 정의되지 않았다는 의미의 (엄연한) 데이터타입 -> 작성에는 문제가 없고, 값을 제대로 넣어주지 않은 것 뿐이다

### event object
- 이벤트는 상당히 빈번하게 만들기 때문에 자바스크립트 내장 기능으로 자동화를 지원한다
  - 조건문은 `&&`(and)와 `||`(or) 연산자를 사용하면 코드량을 상당히 줄일 수 있다
```javascript
function jongin(containerElement, operateColor, eventType) {
    if(typeof(containerElement) === "object" && 
        typeof (operateColor) === "string" &&
        typeof (eventType) === "string"
        ) {
    let colorData = operateColor;
    containerElement.addEventListener(eventType, function(event) {
        event.target.style.backgoundColor = colorData;
    });
    } else {}
    console.log("첫번째 매개변수 타입이 객체여야 합니다");
}
jongin(container, "cadetblue", "click");
```

### 변수
- 변수에는 값을 저장할 수 **있다**
```javascript
let a = 1; 
let b = 2; 

let memory = b; 
b = a; 
a = memory;

console.log(a); //2
console.log(b); //1
```

### 반복문
```javascript
document.body.addEventListener('click',function(){
  for(let i=0; i < liItems.length; i++) {
    liItems[i].style.backgroundColor = 'pink';
  }
});
```





