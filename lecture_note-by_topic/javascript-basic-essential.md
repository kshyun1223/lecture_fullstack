# 10 객체 리터럴
## 10.1 객체란?
- 원시 타입은 단 하나의 값만 나타내지만 객체 타입은 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조다.

## 10.2 객체 리터럴에 의한 객체 생성
### 10-01

```javascript
var person = {
  name: 'Lee',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", sayHello: ƒ}
```

### 10-02

```javascript
var empty = {}; // 빈 객체
console.log(typeof empty); // object
```

## 10.3 프로퍼티
### 10-03

```javascript
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: 'Lee',
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20
};
```

### 10-04

```javascript
var person = {
  firstName: 'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
  'last-name': 'Lee'   // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};

console.log(person); // {firstName: "Ung-mo", last-name: "Lee"}
```

### 10-05

```javascript
var person = {
  firstName: 'Ung-mo',
  last-name: 'Lee' // SyntaxError: Unexpected token -
};
```

### 10-06

```javascript
var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };

console.log(obj); // {hello: "world"}
```

### 10-07


```javascript
var foo = {
  '': ''  // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
};

console.log(foo); // {"": ""}
```

### 10-08

```javascript
var foo = {
  0: 1,
  1: 2,
  2: 3
};

console.log(foo); // {0: 1, 1: 2, 2: 3}
```

### 10-09

```javascript
var foo = {
  var: '',
  function: ''
};

console.log(foo); // {var: "", function: ""}
```

### 10-10

```javascript
var foo = {
  name: 'Lee',
  name: 'Kim'
};

console.log(foo); // {name: "Kim"}
```

## 10.4 메서드
### 10-11

```javascript
var circle = {
  radius: 5, // ← 프로퍼티

  // 원의 지름
  getDiameter: function () { // ← 메서드
    return 2 * this.radius; // this는 circle을 가리킨다.
  }
};

console.log(circle.getDiameter()); // 10
```

## 10.5 프로퍼티 접근
### 10-12

```javascript
var person = {
  name: 'Lee'
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Lee

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); // Lee
```

### 10-13

```javascript
var person = {
  name: 'Lee'
};

console.log(person[name]); // ReferenceError: name is not defined
```

### 10-14

```javascript
var person = {
  name: 'Lee'
};

console.log(person.age); // undefined
```

### 10-15

```javascript
var person = {
  'last-name': 'Lee',
  1: 10
};

person.'last-name';  // -> SyntaxError: Unexpected string
person.last-name;    // -> 브라우저 환경: NaN
                     // -> Node.js 환경: ReferenceError: name is not defined
person[last-name];   // -> ReferenceError: last is not defined
person['last-name']; // -> Lee

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
person.1;     // -> SyntaxError: Unexpected number
person.'1';   // -> SyntaxError: Unexpected string
person[1];    // -> 10 : person[1] -> person['1']
person['1'];  // -> 10
```

## 10.6 프로퍼티 값 갱신
### 10-16

```javascript
var person = {
  name: 'Lee'
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.name = 'Kim';

console.log(person);  // {name: "Kim"}
```

## 10.7 프로퍼티 동적 생성
### 10-17

```javascript
var person = {
  name: 'Lee'
};

// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person.age = 20;

console.log(person); // {name: "Lee", age: 20}
```

## 10.8 프로퍼티 삭제
### 10-18

```javascript
var person = {
  name: 'Lee'
};

// 프로퍼티 동적 생성
person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생하지 않는다.
delete person.address;

console.log(person); // {name: "Lee"}
```

## 10.9 ES6에서 추가된 객체 리터럴의 확장 기능
### 10-19

```javascript
// ES5
var x = 1, y = 2;

var obj = {
  x: x,
  y: y
};

console.log(obj); // {x: 1, y: 2}
```

### 10-20

```javascript
// ES6
let x = 1, y = 2;

// 프로퍼티 축약 표현
const obj = { x, y };

console.log(obj); // {x: 1, y: 2}
```

### 10-21

```javascript
// ES5
var prefix = 'prop';
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

### 10-22

```javascript
// ES6
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

### 10-23

```javascript
// ES5
var obj = {
  name: 'Lee',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Lee
```

### 10-24

```javascript
// ES6
const obj = {
  name: 'Lee',
  // 메서드 축약 표현
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Lee
```

# 12 함수
## 12.5.4 반환문
- 반환문은 return 키워드와 표현식(반환값)으로 이루어져 있다. 
  - return 키워드는 함수의 실행을 중단하고 함수를 종료한다. 반환문 이후에 다른 코드가 존재한다면 실행되지 않고 무시된다.
  - 반환문은 return 키워드 뒤에 오는 표현식을 평가해 반환한다. 표현식이 지정되지 않으면 undifined가 반환된다.

### 12-27

```javascript
function multiply(x, y) {
  return x * y; // 반환문
}

// 함수 호출은 반환값으로 평가된다.
var result = multiply(3, 5);
console.log(result); // 15
```

### 12-28

```javascript
function multiply(x, y) {
  return x * y; // 반환문
  // 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
  console.log('실행되지 않는다.');
}

console.log(multiply(3, 5)); // 15
```

### 12-29

```javascript
function foo () {
  return;
}

console.log(foo()); // undefined
```

### 12-30

```javascript
function foo () {
  // 반환문을 생략하면 암묵적으로 undefined가 반환된다.
}

console.log(foo()); // undefined
```

### 12-31

```javascript
function multiply(x, y) {
  // return 키워드와 반환값 사이에 줄바꿈이 있으면
  return // 세미콜론 자동 삽입 기능(ASI)에 의해 세미콜론이 추가된다.
  x * y; // 무시된다.
}

console.log(multiply(3, 5)); // undefined
```

### 12-32

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    return; // SyntaxError: Illegal return statement
  </script>
</body>
</html>
```

## 12.7.4 콜백 함수
- 어떤 함수들은 반복이라는 처리 자체는 변하지 않고 공통적으로 수행하지만, 반복하면서 하는 일의 내용은 다르다. 그 일부 다른 내용 때문에 매번 함수를 새로 작성해야 하는 문제가 발생하는데, 이는 함수를 합성하는 것으로 해결할 수 있다. 공통적인 로직은 미리 정의해두고 매번 변경되는 로직만을 함수 외부에서 내부로 전달하는 것이다. 
- 이처럼 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수라고 하며, 매개변수를 통헤 함수의 외부에서 콜백함수를 전달받은 함수를 고차함수라고 한다.
- 중첩함수가 외부 함수를 돕는 역할을 하는 것처럼 콜백함수도 고차함수를 돕는 역할을 한다. 중첩함수는 고정되어 있어서 교체하기 어렵지만 콜백함수는 외부에 있기 때문에 교체가 용이하다는 장점이 있다

### 12-50

```javascript
// n만큼 어떤 일을 반복한다
function repeat1(n) {
  // i를 출력한다.
  for (var i = 0; i < n; i++) console.log(i);
}

repeat1(5); // 0 1 2 3 4

// n만큼 어떤 일을 반복한다
function repeat2(n) {
  for (var i = 0; i < n; i++) {
    // i가 홀수일 때만 출력한다.
    if (i % 2) console.log(i);
  }
}

repeat2(5); // 1 3
```

### 12-51

```javascript
// 외부에서 전달받은 f를 n만큼 반복 호출한다
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); // i를 전달하면서 f를 호출
  }
}

var logAll = function (i) {
  console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll); // 0 1 2 3 4

var logOdds = function (i) {
  if (i % 2) console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logOdds); // 1 3
```

### 12-52

```javascript
// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat(5, function (i) {
  if (i % 2) console.log(i);
}); // 1 3
```

### 12-53

```javascript
// logOdds 함수는 단 한 번만 생성된다.
var logOdds = function (i) {
  if (i % 2) console.log(i);
};

// 고차 함수에 함수 참조를 전달한다.
repeat(5, logOdds); // 1 3
```

### 12-54

```javascript
// 콜백 함수를 사용한 이벤트 처리
// myButton 버튼을 클릭하면 콜백 함수를 실행한다.
document.getElementById('myButton').addEventListener('click', function () {
  console.log('button clicked!');
});

// 콜백 함수를 사용한 비동기 처리
// 1초 후에 메시지를 출력한다.
setTimeout(function () {
  console.log('1초 경과');
}, 1000);
```

### 12-55

```javascript
// 콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
  return item * 2;
});

console.log(res); // [2, 4, 6]

// 콜백 함수를 사용하는 고차 함수 filter
res = [1, 2, 3].filter(function (item) {
  return item % 2;
});

console.log(res); // [1, 3]

// 콜백 함수를 사용하는 고차 함수 reduce
res = [1, 2, 3].reduce(function (acc, cur) {
  return acc + cur;
}, 0);

console.log(res); // 6
```

### 12-56

```javascript
var count = 0; // 현재 카운트를 나타내는 상태

// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
  return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2
```

### 12-57

```javascript
var count = 0; // 현재 카운트를 나타내는 상태: increase 함수에 의해 변화한다.

// 비순수 함수
function increase() {
  return ++count; // 외부 상태에 의존하며 외부 상태를 변경한다.
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase();
console.log(count); // 1

increase();
console.log(count); // 2
```

# 배열
## 27.4.4 Arry.from
### 27-28

```javascript
// 유사 배열 객체를 변환하여 배열을 생성한다.
Array.from({ length: 2, 0: 'a', 1: 'b' }); // -> ['a', 'b']

// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
Array.from('Hello'); // -> ['H', 'e', 'l', 'l', 'o']
```

### 27-29

```javascript
// Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다.
Array.from({ length: 3 }); // -> [undefined, undefined, undefined]

// Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다.
Array.from({ length: 3 }, (_, i) => i); // -> [0, 1, 2]
```

### 27-30

```javascript
// 유사 배열 객체
const arrayLike = {
  '0': 'apple',
  '1': 'banana',
  '2': 'orange',
  length: 3
};

// 유사 배열 객체는 마치 배열처럼 for 문으로 순회할 수도 있다.
for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]); // apple banana orange
}
```

## 27.8.1 Array.isArray
### 27-42

```javascript
// true
Array.isArray([]);
Array.isArray([1, 2]);
Array.isArray(new Array());

// false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ 0: 1, length: 1 })
```

## 27.8.2 Array.prototype.indexOf
### 27-43

```javascript
const arr = [1, 2, 2, 3];

// 배열 arr에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환한다.
arr.indexOf(2);    // -> 1
// 배열 arr에 요소 4가 없으므로 -1을 반환한다.
arr.indexOf(4);    // -> -1
// 두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
arr.indexOf(2, 2); // -> 2
```

### 27-44

```javascript
const foods = ['apple', 'banana', 'orange'];

// foods 배열에 'orange' 요소가 존재하는지 확인한다.
if (foods.indexOf('orange') === -1) {
  // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다.
  foods.push('orange');
}

console.log(foods); // ["apple", "banana", "orange"]
```

### 27-45

```javascript
const foods = ['apple', 'banana'];

// foods 배열에 'orange' 요소가 존재하는지 확인한다.
if (!foods.includes('orange')) {
  // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다.
  foods.push('orange');
}

console.log(foods); // ["apple", "banana", "orange"]
```

## 27.8.3 Array.prototype.push
### 27-46

```javascript
const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열 arr의 마지막 요소로 추가하고 변경된 length 값을 반환한다.
let result = arr.push(3, 4);
console.log(result); // 4

// push 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 2, 3, 4]
```

### 27-47

```javascript
const arr = [1, 2];

// arr.push(3)과 동일한 처리를 한다. 이 방법이 push 메서드보다 빠르다.
arr[arr.length] = 3;
console.log(arr); // [1, 2, 3]
```

### 27-48

```javascript
const arr = [1, 2];

// ES6 스프레드 문법
const newArr = [...arr, 3];
console.log(newArr); // [1, 2, 3]
```

### 27-49

```javascript
const arr = [1, 2];

// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
let result = arr.pop();
console.log(result); // 2

// pop 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1]
```

### 27-50

```javascript
const Stack = (function () {
  function Stack(array = []) {
    if (!Array.isArray(array)) {
      // "47. 에러 처리" 참고
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }

  Stack.prototype = {
    // "19.10.1. 생성자 함수에 의한 프로토타입의 교체" 참고
    constructor: Stack,
    // 스택의 가장 마지막에 데이터를 밀어 넣는다.
    push(value) {
      return this.array.push(value);
    },
    // 스택의 가장 마지막 데이터, 즉 가장 나중에 밀어 넣은 최신 데이터를 꺼낸다.
    pop() {
      return this.array.pop();
    },
    // 스택의 복사본 배열을 반환한다.
    entries() {
      return [...this.array];
    }
  };

  return Stack;
}());

const stack = new Stack([1, 2]);
console.log(stack.entries()); // [1, 2]

stack.push(3);
console.log(stack.entries()); // [1, 2, 3]

stack.pop();
console.log(stack.entries()); // [1, 2]
```

### 27-51

```javascript
class Stack {
  ###array; // private class member

  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.###array = array;
  }

  // 스택의 가장 마지막에 데이터를 밀어 넣는다.
  push(value) {
    return this.###array.push(value);
  }

  // 스택의 가장 마지막 데이터, 즉 가장 나중에 밀어 넣은 최신 데이터를 꺼낸다.
  pop() {
    return this.###array.pop();
  }

  // 스택의 복사본 배열을 반환한다.
  entries() {
    return [...this.###array];
  }
}

const stack = new Stack([1, 2]);
console.log(stack.entries()); // [1, 2]

stack.push(3);
console.log(stack.entries()); // [1, 2, 3]

stack.pop();
console.log(stack.entries()); // [1, 2]
```

### 27-52

```javascript
const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 값을 반환한다.
let result = arr.unshift(3, 4);
console.log(result); // 4

// unshift 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [3, 4, 1, 2]
```

### 27-53

```javascript
const arr = [1, 2];

// ES6 스프레드 문법
const newArr = [3, ...arr];
console.log(newArr); // [3, 1, 2]
```

### 27-54

```javascript
const arr = [1, 2];

// 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
let result = arr.shift();
console.log(result); // 1

// shift 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [2]
```

### 27-55

```javascript
const Queue = (function () {
  function Queue(array = []) {
    if (!Array.isArray(array)) {
      // "47. 에러 처리" 참고
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }

  Queue.prototype = {
    // "19.10.1. 생성자 함수에 의한 프로토타입의 교체" 참고
    constructor: Queue,
    // 큐의 가장 마지막에 데이터를 밀어 넣는다.
    enqueue(value) {
      return this.array.push(value);
    },
    // 큐의 가장 처음 데이터, 즉 가장 먼저 밀어 넣은 데이터를 꺼낸다.
    dequeue() {
      return this.array.shift();
    },
    // 큐의 복사본 배열을 반환한다.
    entries() {
      return [...this.array];
    }
  };

  return Queue;
}());

const queue = new Queue([1, 2]);
console.log(queue.entries()); // [1, 2]

queue.enqueue(3);
console.log(queue.entries()); // [1, 2, 3]

queue.dequeue();
console.log(queue.entries()); // [2, 3]
```

### 27-56

```javascript
class Queue {
  ###array; // private class member

  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.###array = array;
  }

  // 큐의 가장 마지막에 데이터를 밀어 넣는다.
  enqueue(value) {
    return this.###array.push(value);
  }

  // 큐의 가장 처음 데이터, 즉 가장 먼저 밀어 넣은 데이터를 꺼낸다.
  dequeue() {
    return this.###array.shift();
  }

  // 큐의 복사본 배열을 반환한다.
  entries() {
    return [...this.###array];
  }
}

const queue = new Queue([1, 2]);
console.log(queue.entries()); // [1, 2]

queue.enqueue(3);
console.log(queue.entries()); // [1, 2, 3]

queue.dequeue();
console.log(queue.entries()); // [2, 3]
```

### 27-57

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

// 배열 arr2를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
// 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.
let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]

// 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
result = arr1.concat(3);
console.log(result); // [1, 2, 3]

// 배열 arr2와 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
result = arr1.concat(arr2, 5);
console.log(result); // [1, 2, 3, 4, 5]

// 원본 배열은 변경되지 않는다.
console.log(arr1); // [1, 2]
```

### 27-58

```javascript
const arr1 = [3, 4];

// unshift 메서드는 원본 배열을 직접 변경한다.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없다.
arr1.unshift(1, 2);
// unshift 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있다.
console.log(arr1); // [1, 2, 3, 4]

// push 메서드는 원본 배열을 직접 변경한다.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없다.
arr1.push(5, 6);
// push 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있다.
console.log(arr1); // [1, 2, 3, 4, 5, 6]

// unshift와 push 메서드는 concat 메서드로 대체할 수 있다.
const arr2 = [3, 4];

// concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
// arr1.unshift(1, 2)를 다음과 같이 대체할 수 있다.
let result = [1, 2].concat(arr2);
console.log(result); // [1, 2, 3, 4]

// arr1.push(5, 6)를 다음과 같이 대체할 수 있다.
result = result.concat(5, 6);
console.log(result); // [1, 2, 3, 4, 5, 6]
```

### 27-59

```javascript
const arr = [3, 4];

// unshift와 push 메서드는 인수로 전달받은 배열을 그대로 원본 배열의 요소로 추가한다
arr.unshift([1, 2]);
arr.push([5, 6]);
console.log(arr); // [[1, 2], 3, 4,[5, 6]]

// concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 요소로 추가한다
let result = [1, 2].concat([3, 4]);
result = result.concat([5, 6]);

console.log(result); // [1, 2, 3, 4, 5, 6]
```

### 27-60

```javascript
let result = [1, 2].concat([3, 4]);
console.log(result); // [1, 2, 3, 4]

// concat 메서드는 ES6의 스프레드 문법으로 대체할 수 있다.
result = [...[1, 2], ...[3, 4]];
console.log(result); // [1, 2, 3, 4]
```

### 27-61

```javascript
const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입한다.
const result = arr.splice(1, 2, 20, 30);

// 제거한 요소가 배열로 반환된다.
console.log(result); // [2, 3]
// splice 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 20, 30, 4]
```

### 27-62

```javascript
const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 0개의 요소를 제거하고 그 자리에 새로운 요소 100을 삽입한다.
const result = arr.splice(1, 0, 100);

// 원본 배열이 변경된다.
console.log(arr); // [1, 100, 2, 3, 4]
// 제거한 요소가 배열로 반환된다.
console.log(result); // []
```

### 27-63

```javascript
const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거한다.
const result = arr.splice(1, 2);

// 원본 배열이 변경된다.
console.log(arr); // [1, 4]
// 제거한 요소가 배열로 반환된다.
console.log(result); // [2, 3]
```

### 27-64

```javascript
const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 모든 요소를 제거한다.
const result = arr.splice(1);

// 원본 배열이 변경된다.
console.log(arr); // [1]
// 제거한 요소가 배열로 반환된다.
console.log(result); // [2, 3, 4]
```

### 27-65

```javascript
const arr = [1, 2, 3, 1, 2];

// 배열 array에서 item 요소를 제거한다. item 요소가 여러 개 존재하면 첫 번째 요소만 제거한다.
function remove(array, item) {
  // 제거할 item 요소의 인덱스를 취득한다.
  const index = array.indexOf(item);

  // 제거할 item 요소가 있다면 제거한다.
  if (index !== -1) array.splice(index, 1);

  return array;
}

console.log(remove(arr, 2)); // [1, 3, 1, 2]
console.log(remove(arr, 10)); // [1, 3, 1, 2]
```

### 27-66

```javascript
const arr = [1, 2, 3, 1, 2];

// 배열 array에서 모든 item 요소를 제거한다.
function removeAll(array, item) {
  return array.filter(v => v !== item);
}

console.log(removeAll(arr, 2)); // [1, 3, 1]
```

### 27-67

```javascript
const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전(arr[1] 미포함)까지 복사하여 반환한다.
arr.slice(0, 1); // -> [1]

// arr[1]부터 arr[2] 이전(arr[2] 미포함)까지 복사하여 반환한다.
arr.slice(1, 2); // -> [2]

// 원본은 변경되지 않는다.
console.log(arr); // [1, 2, 3]
```

### 27-68

```javascript
const arr = [1, 2, 3];

// arr[1]부터 이후의 모든 요소를 복사하여 반환한다.
arr.slice(1); // -> [2, 3]
```

### 27-69

```javascript
const arr = [1, 2, 3];

// 배열의 끝에서부터 요소를 한 개 복사하여 반환한다.
arr.slice(-1); // -> [3]

// 배열의 끝에서부터 요소를 두 개 복사하여 반환한다.
arr.slice(-2); // -> [2, 3]
```

### 27-70

```javascript
const arr = [1, 2, 3];

// 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환한다.
const copy = arr.slice();
console.log(copy); // [1, 2, 3]
console.log(copy === arr); // false
```

### 27-71

```javascript
const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

// 얕은 복사(shallow copy)
const _todos = todos.slice();
// const _todos = [...todos];

// _todos와 todos는 참조값이 다른 별개의 객체다.
console.log(_todos === todos); // false

// 배열 요소의 참조값이 같다. 즉, 얕은 복사되었다.
console.log(_todos[0] === todos[0]); // true
```

### 27-72

```javascript
function sum() {
  // 유사 배열 객체를 배열로 변환(ES5)
  var arr = Array.prototype.slice.call(arguments);
  console.log(arr); // [1, 2, 3]

  return arr.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2, 3)); // 6
```

### 27-73

```javascript
function sum() {
  const arr = Array.from(arguments);
  console.log(arr); // [1, 2, 3]

  return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)); // 6
```

### 27-74

```javascript
function sum() {
  // 이터러블을 배열로 변환(ES6 스프레드 문법)
  const arr = [...arguments ];
  console.log(arr); // [1, 2, 3]

  return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)); // 6
```

### 27-82

```javascript
const arr = [1, 2, 3];

// 배열에 요소 2가 포함되어 있는지 확인한다.
arr.includes(2); // -> true

// 배열에 요소 100이 포함되어 있는지 확인한다.
arr.includes(100); // -> false
```

### 27-83

```javascript
const arr = [1, 2, 3];

// 배열에 요소 1이 포함되어 있는지 인덱스 1부터 확인한다.
arr.includes(1, 1); // -> false

// 배열에 요소 3이 포함되어 있는지 인덱스 2(arr.length - 1)부터 확인한다.
arr.includes(3, -1); // -> true
```

### 27-84

```javascript
[NaN].indexOf(NaN) !== -1; // -> false
[NaN].includes(NaN);       // -> true
```

### 27-87

```javascript
const fruits = ['Banana', 'Orange', 'Apple'];

// 오름차순(ascending) 정렬
fruits.sort();

// sort 메서드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['Apple', 'Banana', 'Orange']
```

### 27-88

```javascript
const fruits = ['바나나', '오렌지', '사과'];

// 오름차순(ascending) 정렬
fruits.sort();

// sort 메서드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['바나나', '사과', '오렌지']
```

### 27-89

```javascript
const fruits = ['Banana', 'Orange', 'Apple'];

// 오름차순(ascending) 정렬
fruits.sort();

// sort 메서드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['Apple', 'Banana', 'Orange']

// 내림차순(descending) 정렬
fruits.reverse();

// reverse 메서드도 원본 배열을 직접 변경한다.
console.log(fruits); // ['Orange', 'Banana', 'Apple']
```

### 27-90

```javascript
const points = [40, 100, 1, 5, 2, 25, 10];

points.sort();

// 숫자 요소들로 이루어진 배열은 의도한 대로 정렬되지 않는다.
console.log(points); // [1, 10, 100, 2, 25, 40, 5]
```

### 27-91

```javascript
['2', '1'].sort(); // -> ["1", "2"]
[2, 1].sort();     // -> [1, 2]
```

### 27-92

```javascript
['2', '10'].sort(); // -> ["10", "2"]
[2, 10].sort();     // -> [10, 2]
```

### 27-93

```javascript
const points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열의 오름차순 정렬. 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬한다.
points.sort((a, b) => a - b);
console.log(points); // [1, 2, 5, 10, 25, 40, 100]

// 숫자 배열에서 최소/최대값 취득
console.log(points[0], points[points.length]); // 1

// 숫자 배열의 내림차순 정렬. 비교 함수의 반환값이 0보다 작으면 b를 우선하여 정렬한다.
points.sort((a, b) => b - a);
console.log(points); // [100, 40, 25, 10, 5, 2, 1]

// 숫자 배열에서 최대값 취득
console.log(points[0]); // 100
```

### 27-94

```javascript
const todos = [
  { id: 4, content: 'JavaScript' },
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' }
];

// 비교 함수. 매개변수 key는 프로퍼티 키다.
function compare(key) {
  // 프로퍼티 값이 문자열인 경우 - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
  // 비교 함수는 양수/음수/0을 반환하면 되므로 - 산술 연산 대신 비교 연산을 사용할 수 있다.
  return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

// id를 기준으로 오름차순 정렬
todos.sort(compare('id'));
console.log(todos);
/*
[
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' },
  { id: 4, content: 'JavaScript' }
]
*/

// content를 기준으로 오름차순 정렬
todos.sort(compare('content'));
console.log(todos);
/*
[
  { id: 2, content: 'CSS' },
  { id: 1, content: 'HTML' },
  { id: 4, content: 'JavaScript' }
]
*/
```

### 27-95

```javascript
const numbers = [1, 2, 3];
let pows = [];

// for 문으로 배열 순회
for (let i = 0; i < numbers.length; i++) {
  pows.push(numbers[i] ** 2);
}
console.log(pows); // [1, 4, 9]
```

### 27-96

```javascript
const numbers = [1, 2, 3];
let pows = [];

// forEach 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
numbers.forEach(item => pows.push(item ** 2));
console.log(pows); // [1, 4, 9]
```

### 27-97

```javascript
// forEach 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/
```

### 27-98

```javascript
const numbers = [1, 2, 3];

// forEach 메서드는 원본 배열을 변경하지 않지만 콜백 함수를 통해 원본 배열을 변경할 수는 있다.
// 콜백 함수의 세 번째 매개변수 arr은 원본 배열 numbers를 가리킨다.
// 따라서 콜백 함수의 세 번째 매개변수 arr을 직접 변경하면 원본 배열 numbers가 변경된다.
numbers.forEach((item, index, arr) => { arr[index] = item ** 2; });
console.log(numbers); // [1, 4, 9]
```

### 27-99

```javascript
const result = [1, 2, 3].forEach(console.log);
console.log(result); // undefined
```

### 27-100

```javascript
class Numbers {
  numberArray = [];

  multiply(arr) {
    arr.forEach(function (item) {
      // TypeError: Cannot read property 'numberArray' of undefined
      this.numberArray.push(item * item);
    });
  }
}

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
```

### 27-101

```javascript
class Numbers {
  numberArray = [];

  multiply(arr) {
    arr.forEach(function (item) {
      this.numberArray.push(item * item);
    }, this); // forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달
  }
}

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray); // [1, 4, 9]
```

### 27-102

```javascript
class Numbers {
  numberArray = [];

  multiply(arr) {
    // 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.
    arr.forEach(item => this.numberArray.push(item * item));
  }
}

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray); // [1, 4, 9]
```

### 27-103

```javascript
// 만약 Array.prototype에 forEach 메서드가 존재하지 않으면 폴리필을 추가한다.
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    // 첫 번째 인수가 함수가 아니면 TypeError를 발생시킨다.
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // this로 사용할 두 번째 인수를 전달받지 못하면 전역 객체를 this로 사용한다.
    thisArg = thisArg || window;

    // for 문으로 배열을 순회하면서 콜백 함수를 호출한다.
    for (var i = 0; i < this.length; i++) {
      // call 메서드를 통해 thisArg를 전달하면서 콜백 함수를 호출한다.
      // 이때 콜백 함수의 인수로 배열 요소, 인덱스, 배열 자신을 전달한다.
      callback.call(thisArg, this[i], i, this);
    }
  };
}
```

### 27-104

```javascript
[1, 2, 3].forEach(item => {
  console.log(item);
  if (item > 1) break; // SyntaxError: Illegal break statement
});

[1, 2, 3].forEach(item => {
  console.log(item);
  if (item > 1) continue;
  // SyntaxError: Illegal continue statement: no surrounding iteration statement
});
```

### 27-105

```javascript
// 희소 배열
const arr = [1, , 3];

// for 문으로 희소 배열을 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1, undefined, 3
}

// forEach 메서드는 희소 배열의 존재하지 않는 요소를 순회 대상에서 제외한다.
arr.forEach(v => console.log(v)); // 1, 3
```

### 27-106

```javascript
const numbers = [1, 4, 9];

// map 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
// 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.
const roots = numbers.map(item => Math.sqrt(item));

// 위 코드는 다음과 같다.
// const roots = numbers.map(Math.sqrt);

// map 메서드는 새로운 배열을 반환한다
console.log(roots);   // [ 1, 2, 3 ]
// map 메서드는 원본 배열을 변경하지 않는다
console.log(numbers); // [ 1, 4, 9 ]
```

### 27-107

```javascript
// map 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].map((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
  return item;
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/
```

### 27-108

```javascript
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map(function (item) {
      // 외부에서 this를 전달하지 않으면 this는 undefined를 가리킨다.
      return this.prefix + item;
    }, this); // map 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));
// ['-webkit-transition', '-webkit-user-select']
```

### 27-109

```javascript
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    // 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.
    return arr.map(item => this.prefix + item);
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));
// ['-webkit-transition', '-webkit-user-select']
```

### 27-110

```javascript
const numbers = [1, 2, 3, 4, 5];

// filter 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
// 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
// 다음의 경우 numbers 배열에서 홀수인 요소만을 필터링한다(1은 true로 평가된다).
const odds = numbers.filter(item => item % 2);
console.log(odds); // [1, 3, 5]
```

### 27-111

```javascript
// filter 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].filter((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
  return item % 2;
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/
```

### 27-112

```javascript
class Users {
  constructor() {
    this.users = [
      { id: 1, name: 'Lee' },
      { id: 2, name: 'Kim' }
    ];
  }

  // 요소 추출
  findById(id) {
    // id가 일치하는 사용자만 반환한다.
    return this.users.filter(user => user.id === id);
  }

  // 요소 제거
  remove(id) {
    // id가 일치하지 않는 사용자를 제거한다.
    this.users = this.users.filter(user => user.id !== id);
  }
}

const users = new Users();

let user = users.findById(1);
console.log(user); // [{ id: 1, name: 'Lee' }]

// id가 1인 사용자를 제거한다.
users.remove(1);

user = users.findById(1);
console.log(user); // []
```

### 27-113

```javascript
// [1, 2, 3, 4]의 모든 요소의 누적을 구한다.
const sum = [1, 2, 3, 4].reduce((accumulator, currentValue, index, array) => accumulator + currentValue, 0);

console.log(sum); // 10
```

### 27-114

```javascript
const values = [1, 2, 3, 4, 5, 6];

const average = values.reduce((acc, cur, i, { length }) => {
  // 마지막 순회가 아니면 누적값을 반환하고 마지막 순회면 누적값으로 평균을 구해 반환한다.
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average); // 3.5
```

### 27-115

```javascript
const values = [1, 2, 3, 4, 5];

const max = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max); // 5
```

### 27-116

```javascript
const values = [1, 2, 3, 4, 5];

const max = Math.max(...values);
// var max = Math.max.apply(null, values);
console.log(max); // 5
```

### 27-117

```javascript
const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((acc, cur) => {
  // 첫 번째 순회 시 acc는 초기값인 {}이고 cur은 첫 번째 요소인 'banana'다.
  // 초기값으로 전달받은 빈 객체에 요소값인 cur을 프로퍼티 키로, 요소의 개수를 프로퍼티 값으로
  // 할당한다. 만약 프로퍼티 값이 undefined(처음 등장하는 요소)이면 프로퍼티 값을 1로 초기화한다.
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

// 콜백 함수는 총 5번 호출되고 다음과 같이 결과값을 반환한다.
/*
{banana: 1} => {banana: 1, apple: 1} => {banana: 1, apple: 1, orange: 1}
=> {banana: 1, apple: 1, orange: 2} => {banana: 1, apple: 2, orange: 2}
*/

console.log(count); // { banana: 1, apple: 2, orange: 2 }
```

### 27-118

```javascript
const values = [1, [2, 3], 4, [5, 6]];

const flatten = values.reduce((acc, cur) => acc.concat(cur), []);
// [1] => [1, 2, 3] => [1, 2, 3, 4] => [1, 2, 3, 4, 5, 6]

console.log(flatten); // [1, 2, 3, 4, 5, 6]
```

### 27-119

```javascript
[1, [2, 3, 4, 5]].flat(); // -> [1, 2, 3, 4, 5]

// 인수 2는 중첩 배열을 평탄화하기 위한 깊이 값이다.
[1, [2, 3, [4, 5]]].flat(2); // -> [1, 2, 3, 4, 5]
```

### 27-120

```javascript
const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const result = values.reduce(
  (unique, val, i, _values) =>
    // 현재 순회 중인 요소의 인덱스 i가 val의 인덱스와 같다면 val은 처음 순회하는 요소다.
    // 현재 순회 중인 요소의 인덱스 i가 val의 인덱스와 다르다면 val은 중복된 요소다.
    // 처음 순회하는 요소만 초기값 []가 전달된 unique 배열에 담아 반환하면 중복된 요소는 제거된다.
    _values.indexOf(val) === i ? [...unique, val] : unique,
  []
);

console.log(result); // [1, 2, 3, 5, 4]
```

### 27-121

```javascript
const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

// 현재 순회 중인 요소의 인덱스 i가 val의 인덱스와 같다면 val은 처음 순회하는 요소다. 이 요소만 필터링한다.
const result = values.filter((val, i, _values) => _values.indexOf(val) === i);
console.log(result); // [1, 2, 3, 5, 4]
```

### 27-122

```javascript
const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

// 중복을 허용하지 않는 Set 객체의 특성을 활용하여 배열에서 중복된 요소를 제거할 수 있다.
const result = [...new Set(values)];
console.log(result); // [1, 2, 3, 5, 4]
```

### 27-123

```javascript
// reduce 메서드의 두 번째 인수, 즉 초기값을 생략했다.
const sum = [1, 2, 3, 4].reduce((acc, cur) => acc + cur);
console.log(sum); // 10
```

### 27-124

```javascript
const sum = [].reduce((acc, cur) => acc + cur);
// TypeError: Reduce of empty array with no initial value
```

### 27-125

```javascript
const sum = [].reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 0
```

### 27-126

```javascript
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 }
];

// 1번째 순회 시 acc는 { id: 1, price: 100 }, cur은 { id: 2, price: 200 }이고
// 2번째 순회 시 acc는 300, cur은 { id: 3, price: 300 }이다.
// 2번째 순회 시 acc에 함수에 객체가 아닌 숫자값이 전달된다. 이때 acc.price는 undefined다.
const priceSum = products.reduce((acc, cur) => acc.price + cur.price);

console.log(priceSum); // NaN
```

### 27-127

```javascript
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 }
];

/*
1번째 순회 : acc => 0,   cur => { id: 1, price: 100 }
2번째 순회 : acc => 100, cur => { id: 2, price: 200 }
3번째 순회 : acc => 300, cur => { id: 3, price: 300 }
*/
const priceSum = products.reduce((acc, cur) => acc + cur.price, 0);

console.log(priceSum); // 600
```

### 27-132

```javascript
const users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

// id가 2인 요소의 인덱스를 구한다.
users.findIndex(user => user.id === 2); // -> 1

// name이 'Park'인 요소의 인덱스를 구한다.
users.findIndex(user => user.name === 'Park'); // -> 3

// 위와 같이 프로퍼티 키와 프로퍼티 값으로 요소의 인덱스를 구하는 경우
// 다음과 같이 콜백 함수를 추상화할 수 있다.
function predicate(key, value) {
  // key와 value를 기억하는 클로저를 반환
  return item => item[key] === value;
}

// id가 2인 요소의 인덱스를 구한다.
users.findIndex(predicate('id', 2)); // -> 1

// name이 'Park'인 요소의 인덱스를 구한다.
users.findIndex(predicate('name', 'Park')); // -> 3
```

# 36 디스트럭처링 할당
## 36.2 객체 디스트럭처링 할당
### 36-10

```javascript
// ES5
var user = { firstName: 'Ungmo', lastName: 'Lee' };

var firstName = user.firstName;
var lastName  = user.lastName;

console.log(firstName, lastName); // Ungmo Lee
```

### 36-11

```javascript
const user = { firstName: 'Ungmo', lastName: 'Lee' };

// ES6 객체 디스트럭처링 할당
// 변수 lastName, firstName을 선언하고 user 객체를 디스트럭처링하여 할당한다.
// 이때 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
const { lastName, firstName } = user;

console.log(firstName, lastName); // Ungmo Lee
```

### 36-12

```javascript
const { lastName, firstName } = { firstName: 'Ungmo', lastName: 'Lee' };
```

### 36-13

```javascript
const { lastName, firstName };
// SyntaxError: Missing initializer in destructuring declaration

const { lastName, firstName } = null;
// TypeError: Cannot destructure property 'lastName' of 'null' as it is null.
```

### 36-14

```javascript
const { lastName, firstName } = user;
// 위와 아래는 동치다.
const { lastName: lastName, firstName: firstName } = user;
```

### 36-15

```javascript
const user = { firstName: 'Ungmo', lastName: 'Lee' };

// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다.
// 프로퍼티 키가 lastName인 프로퍼티 값을 ln에 할당하고,
// 프로퍼티 키가 firstName인 프로퍼티 값을 fn에 할당한다.
const { lastName: ln, firstName: fn } = user;

console.log(fn, ln); // Ungmo Lee
```

### 36-16

```javascript
const { firstName = 'Ungmo', lastName } = { lastName: 'Lee' };
console.log(firstName, lastName); // Ungmo Lee

const { firstName: fn = 'Ungmo', lastName: ln } = { lastName: 'Lee' };
console.log(fn, ln); // Ungmo Lee
```

### 36-17

```javascript
const str = 'Hello';
// String 래퍼 객체로부터 length 프로퍼티만 추출한다.
const { length } = str;
console.log(length); // 5

const todo = { id: 1, content: 'HTML', completed: true };
// todo 객체로부터 id 프로퍼티만 추출한다.
const { id } = todo;
console.log(id); // 1
```

### 36-18

```javascript
function printTodo(todo) {
  console.log(`할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료'} 상태입니다.`);
}

printTodo({ id: 1, content: 'HTML', completed: true });
// 할일 HTML은 완료 상태입니다.
```

### 36-19

```javascript
function printTodo({ content, completed }) {
  console.log(`할일 ${content}은 ${completed ? '완료' : '비완료'} 상태입니다.`);
}

printTodo({ id: 1, content: 'HTML', completed: true });
// 할일 HTML은 완료 상태입니다.
```

### 36-20

```javascript
const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false }
];

// todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출한다.
const [, { id }] = todos;
console.log(id); // 2
```

### 36-21

```javascript
const user = {
  name: 'Lee',
  address: {
    zipCode: '03068',
    city: 'Seoul'
  }
};

// address 프로퍼티 키로 객체를 추출하고 이 객체의 city 프로퍼티 키로 값을 추출한다.
const { address: { city } } = user;
console.log(city); // 'Seoul'
```

### 36-22

```javascript
// Rest 프로퍼티
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(x, rest); // 1 { y: 2, z: 3 }
```
