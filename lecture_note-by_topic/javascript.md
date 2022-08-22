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

### 데이터타입(Data type, 자료형)
- Primitives(원시값): Boolean, Null, Undefined, Number, String, Symbol
  - Symbol: 고유하고 변경 불가능한 원시 값이며 객체의 속성 키로 사용할 수 있다
  - Null: 변수를 선언하고 null이라는 값을 할당했다
  - Undefined: 변수를 선언하고 값을 할당하지 않았다
- Object(객체)

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

### 변수
- 변수에는 값을 저장할 수 있다
```javascript
let a = 1; 
let b = 2; 

let memory = b; 
b = a; 
a = memory;

console.log(a); //2
console.log(b); //1
```

### 배열
```javascript
let array = ["indexZero", "indexOne", "indexTwo"];
array[i];
```

### 객체
```javascript
let object = {
  "keyOne":"valueOne",
  "keyTwo":"valueTwo",
  "keyThree":"valueThree",
}
object.keyOne;
```

### 주요 메서드
- 어떠한 값을 돌려받아 반환하는 종류의 메서드는 이름에 get이 들어가 있다
	- getElementById() : 이미 결정된 값인 '아이디' 데이터를 통해 값(요소)를 돌려받았다

- 값을 '변경'하거나 '설정'하는 종류의 메서드는 이름에 set이 들어가 있다
	- setAttribute() : 속성(attribute)를 특정 값으로 '설정'했다.
	- 초기설정(처음설정)인 경우, initialized 약칭 init으로 부르기도 한다.

### for문
```javascript
for(let i=1; i < x; i++) { // x=반복 조건
  // 반복하여 실행할 내용
}
```

### if문
```javascript
if(/* 조건식 */) {{ 
  // 조건식이 true면 실행할 내용
} else {
  // 조건식이 false면 실행할 내용
}}
```

### while문
```javascript
while(/* 조건식 */) {
  // 조건식이 true인 동안 실행할 내용
}
```

### 함수의 입구 역할을 하는 매개변수(parameter, 인자)
```javascript
/* 선언 */
function hairService(parameter){
  console.log('어서오세요' + parameter + '고객님');
};
/* 호출 */
hairService('댕댕이'); // 어서오세요 댕댕이 고객님
```
- 함수는 매개변수를 통해 재료를 받는다 -> 어떤 재료든 들어올 수 있다 -> 결과물이 무엇이 될지 모른다

### 함수의 출구 역할을 하는 return(반환)
```javascript
function insa(parameter) {
  parameter * 1;
  return "두진";
}
console.log(insa("은호") === "두진");
```
- 함수는 반환을 통해 다른 데이터로 바뀐다: 반환이 없으면 실행만 하고 **종료된다**
  - 반환이 없을 수도 있다: 목적이 실행일 때
  - 반환이 반드시 필요할 때가 있다: 목적이 가공된 값일 때

### 함수가 제대로 실행되지 않는 경우
- ReferenceError: 존재하지 않는 변수를 참조했을 때 나타나는 에러
- undefined: 정의되지 않았다는 의미의 (엄연한) 데이터타입 -> 작성에는 문제가 없고, 값을 제대로 넣어주지 않은 것 뿐이다

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

