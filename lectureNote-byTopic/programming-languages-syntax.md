# 프로그래밍 일반 - 작성법
## 구성요소
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
- 변수는 선언과 할당을 따로따로 할 수도 있다. 또한 한번 값이 할당된 변수에 새롭게 값을 할당할 수도 있다. 즉, 변수에 값을 저장할 수가 있다
```javascript
let a = 1; 
let b = 2; 

let memory = b; // 2
b = a; // 1
a = memory; // 2

console.log(a); // 2
console.log(b); // 1
```

### 배열
```javascript
let array = ["indexZero", "indexOne", "indexTwo"];
array[0]; // indexZero
```

### 객체
```javascript
let object = {
  "keyOne":"valueOne",
  "keyTwo":"valueTwo",
  "keyThree":"valueThree",
};
object.keyOne; // valueOne
```

### 스코프
- 모든 식별자(변수, 함수 등)는 선언된 위치에 의해 다른 코드가 참조할 수 있는 유효 범위가 결정된다
- 즉, 스코프는 식별자가 유효한 범위라고 할 수 있다

## 제어문
### for문
```javascript
for(let i = 1; i < x; i++) { // x=반복 조건
  /* 반복하여 실행할 내용 */
}
```

```javascript
let colorSet = ["salmon","black","chocolate","cadetblue","cornflowerblue", "pink"]; // 색상 목록

let a = document.getElementById("root"); // 부모 요소를 호출
for(let index = 0; index < colorSet.length; index = index + 1) {
  a.children[index].style.backgroundColor = colorSet[index]; // 자식 요소들에 목록에 따라 색상을 부여
}
```

### if문
```javascript
if(/* 조건식 */) {{ 
  /* 조건식이 true면 실행할 내용 */
} else {
  /* 조건식이 false면 실행할 내용 */
}}
```

### 삼항연산자(ternary operator)
```javascript
let operandOne = 'test';
let operandTwo = 4;
let result = (operandOne.length === operandTwo) ? "hello" : "bye"; 
// 만약 operandOne 값의 길이가 operandTwo와 같으면 "hello"를 출력하고, 그렇지 않을 경우 "bye"를 출력하라
console.log(result); // hello
```
- if-else 구문과 같다
- 객체 이름으로 사용된 operand는 "피연산자"라는 뜻이기도 하다

### while문
```javascript
while(/* 조건식 */) {
  /* 조건식이 true인 동안 실행할 내용 */
}
```

## 함수의 구성요소
### 매개변수(parameter, 인자)
```javascript
function example(parameter) {
  console.log(parameter); // Output = foo
}
const argument = "foo";
example(argument);
```

```javascript
/* 선언 */
function hairService(parameter){
  console.log('어서오세요' + parameter + '고객님');
};

/* 호출 */
hairService('댕댕이'); // 어서오세요 댕댕이 고객님
```
- 함수는 **매개변수를 통해 재료를 받는다** -> 어떤 재료든 들어올 수 있다 -> 결과물이 무엇이 될지 모른다

### return(반환)
```javascript
function minus (a, b) {
  return a - b;
}

function sum (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log(sum(10, minus(20,5))); // 10+20-5=25
```
- 반환(return)을 지정하지 않으면 다른 코드에서 값으로 사용할 수 없다
- 실행만이 목적이라면 반환을 지정하지 않을 수도 있다

### 함수가 제대로 실행되지 않는 경우
- ReferenceError: 존재하지 않는 변수를 참조했을 때 나타나는 에러
- undefined: 정의되지 않았다는 의미의 (엄연한) 데이터타입 -> 작성에는 문제가 없고, 값을 제대로 넣어주지 않은 것 뿐이다

## 함수의 종류
### 익명함수
- 익명함수는 함수명이 없는 함수이다
- 함수 표현식(function literal)은 익명일 수 있지만 함수 선언문에는 반드시 이름이 있어야 한다

### 기명함수
- 기명함수는 함수명이 있는 함수이다 (=== 함수 선언문)

### 중첩함수
- 중첩함수: 함수 내부에 정의된 함수를 중첩(nested)함수 또는 내부(inner)함수라고 한다
  - 중첩함수는 외부함수 안에서만 호출할 수 있다
  - 보통 중첩함수는 자신의 외부함수를 돕는 헬퍼(helper)함수로 사용된다
- 외부함수: 중첩함수를 포함하는 함수는 외부(outer)함수라고 한다.

### 콜백(callback)함수
- 반복하는 일은 변하지 않고 공통적으로 수행하지만, 하는 일의 일부분만이 다른 경우 매번 함수를 새롭게 작성하는 대신 콜백함수를 사용해서 해결할 수 있다
- 변하지 않는 공통 로직은 미리 정의해 두고, 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 함수 내부로 전달하는 것이다
- 중첩함수는 고정되어 있어서 교체하기 곤란하지만 콜백함수는 자유롭게 교체할 수 있다는 장점이 있다

### 재귀함수
```javascript
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n-1); // 재귀호출
}
countdown(10);
```
- 재귀호출(recursive)을 수행하는 함수이다
- 반복문을 대체하는 용도로 사용할 수 있다

### 즉시실행함수
```javascript
(function () {
  let a = 3;
  let b = 5; 
  return a * b;
}());
```
- 브라우저 컴파일러에 함수가 로드된 후 직접 호출되는 함수이다
- 함수 전체를 소괄호로 감싸는 방식으로 작성한다
- 단 한번만 호출되며 다시 호출할 수 없다

