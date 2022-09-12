# 자바스크립트 - 배열 관련 메서드
### 의의
- DOM API가 모두 배열 기반이기 때문에 자바스크립트는 배열과 관련된 내장 메소드를 충실하게 지원한다
- 배열 관련 메서드들은 콜백함수의 원리로 작동한다

### from
```javascript
// 유사 배열 객체를 변환하여 배열을 생성한다.
Array.from({ length: 2, 0: 'a', 1: 'b' }); // ['a', 'b']

// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']
```
- 두 번째 인수로 전달한 콜백 함수를 통해 값을 만들면서 요소를 채울 수 있다
- 두 번째 인수로 전달한 콜백 함수에 첫 번째 인수에 의해 생성된 배열의 요소값과 인덱스를 순차적으로 전달하면서 호출하고, 콜백 함수의 반환값으로 구성된 배열을 반환한다

### isArray
- 전달된 인수가 배열이면 true, 배열이 아니면 false를 반환한다

### indexOf
```javascript
const arr = [1, 2, 2, 3];
// 배열 arr에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환한다.
arr.indexOf(2);    // 1
// 배열 arr에 요소 4가 없으므로 -1을 반환한다.
arr.indexOf(4);    // -1
// 두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
arr.indexOf(2, 2); // 2
```

### push
```javascript
const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열 arr의 마지막 요소로 추가하고 변경된 length 값을 반환한다
let result = arr.push(3, 4);
console.log(result); // 4

// push 메서드는 원본 배열을 직접 변경한다
console.log(arr); // [1, 2, 3, 4]
```

### unshift
```javascript
const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 값을 반환한다.
let result = arr.unshift(3, 4);
console.log(result); // 4

// unshift 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [3, 4, 1, 2]
```

### shift
```javascript
const arr = [1, 2];

// 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
let result = arr.shift();
console.log(result); // 1

// shift 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [2]
```

### concat
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

### splice
```javascript
const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입한다.
const result = arr.splice(1, 2, 20, 30);

// 제거한 요소가 배열로 반환된다.
console.log(result); // [2, 3]
// splice 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 20, 30, 4]
```

### slice
```javascript
const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전(arr[1] 미포함)까지 복사하여 반환한다.
arr.slice(0, 1); // -> [1]

// arr[1]부터 arr[2] 이전(arr[2] 미포함)까지 복사하여 반환한다.
arr.slice(1, 2); // -> [2]

// 원본은 변경되지 않는다.
console.log(arr); // [1, 2, 3]
```
- 인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다

### includes
```javascript
const arr = [1, 2, 3];

// 배열에 요소 2가 포함되어 있는지 확인한다.
arr.includes(2); // -> true

// 배열에 요소 100이 포함되어 있는지 확인한다.
arr.includes(100); // -> false
```
- 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환한다

### sort
```javascript
const fruits = ['Banana', 'Orange', 'Apple'];

// 오름차순(ascending) 정렬
fruits.sort();

// sort 메서드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['Apple', 'Banana', 'Orange']
```
- 배열의 요소를 오름차순으로 정렬한다

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
- for문을 추상화한 고차함수로서 자신을 호출한 배열을 순회하면서 수행해야 할 처리를 콜백함수로 전달받아 반복 호출한다

### map
```javascript
console.log(digimon.map(element => {
  return element + "님";
}));
```
- 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백함수를 반복 호출한다
- 그리고 콜백함수의 반환값들로 구성된 새로운 배열을 반환한다
- 원본 배열은 변경되지 않는다

### filter
```javascript
const numbers = [1, 2, 3, 4, 5];

// filter 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
// 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
// 다음의 경우 numbers 배열에서 홀수인 요소만을 필터링한다(1은 true로 평가된다).
const odds = numbers.filter(item => item % 2);
console.log(odds); // [1, 3, 5]
```

### reduce
```javascript
// [1, 2, 3, 4]의 모든 요소의 누적을 구한다.
const sum = [1, 2, 3, 4].reduce((accumulator, currentValue, index, array) => accumulator + currentValue, 0);

console.log(sum); // 10
```
- 자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백함수를 반복 호출한다
- 콜백함수의 반환값을 다음 순회 시에 콜백함수의 첫 번째 인수로 전달하면서 콜백함수를 호출하여 하나의 결과값을 만들어 반환한다

### findIndex
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
- 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백함수를 호출하여 반환값이 true인 첫 번째 요소의 인덱스를 반환한다
