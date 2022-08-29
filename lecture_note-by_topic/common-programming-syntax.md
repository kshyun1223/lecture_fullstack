# 작성법 - 프로그래밍 일반
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

### for문
```javascript
for(let i = 1; i < x; i++) { // x=반복 조건
  /* 반복하여 실행할 내용 */
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

### while문
```javascript
while(/* 조건식 */) {
  /* 조건식이 true인 동안 실행할 내용 */
}
```

### 배열과 반복문
```javascript
let colorSet = ["salmon","black","chocolate","cadetblue","cornflowerblue", "pink"]; // 색상 목록

let a = document.getElementById("root"); // 부모 요소를 호출
for(let index = 0; index < colorSet.length; index = index + 1) {
  a.children[index].style.backgroundColor = colorSet[index]; // 자식 요소들에 목록에 따라 색상을 부여
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
- 함수는 **매개변수를 통해 재료를 받는다** -> 어떤 재료든 들어올 수 있다 -> 결과물이 무엇이 될지 모른다

### 함수의 출구 역할을 하는 return(반환)
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

