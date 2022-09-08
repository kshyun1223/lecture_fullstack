# 자바스크립트 - 생성자함수(constructor function)
## 개요 
- 생성자함수란 new 연산자와 함께 호출하여 객체를 생성하는 함수를 말한다. 생성자 함수에 의해 생성된 객체를 인스턴스(instance)라 한다.
- new 연산자와 함께 생성자함수를 호출하면 빈 객체를 생성하여 반환한다. 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.
- 자바스크립트는 객체 생성자 함수 이외에도 문자열, 숫자열, 불리언, 함수, 배열, 날짜, 정규표현식 등의 생성자 함수를 내장하고 있다

### 생성자 함수의 인스턴스 생성 과정
```javascript
// 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
function Circle(radius) {
  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  // 3. 암묵적으로 this를 반환한다.
  return 100;
}
// 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
// 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle = new Circle(1);
console.log(circle); // Circle {radius: 1, getDiameter: ƒ}
```

## 자바스크립트에서 지원하는 내장 생성자함수
### Object 생성자 함수에 의한 객체 생성
```javascript
// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Lee';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
};

console.log(person); // {name: "Lee", sayHello: ƒ}
person.sayHello(); // Hi! My name is Lee
```

### String 생성자 함수에 의한 String 객체 생성
```javascript
const strObj = new String('Lee');
console.log(typeof strObj); // object
console.log(strObj);        // String {"Lee"}
```

### Number 생성자 함수에 의한 Number 객체 생성
```javascript
const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj);        // Number {123}
```

### Boolean 생성자 함수에 의한 Boolean 객체 생성
```javascript
const boolObj= new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj);        // Boolean {true}
```

### Function 생성자 함수에 의한 Function 객체(함수) 생성
```javascript
const func = new Function('x', 'return x * x');
console.log(typeof func); // function
console.dir(func);        // ƒ anonymous(x)
```

### Array 생성자 함수에 의한 Array 객체(배열) 생성
```javascript
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr);        // [1, 2, 3]
```

### RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
```javascript
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp);        // /ab+c/i
```

### Date 생성자 함수에 의한 Date 객체 생성
```javascript
const date = new Date();
console.log(typeof date); // object
console.log(date);        // Mon May 04 2020 08:36:33 GMT+0900 (대한민국 표준시)
```
