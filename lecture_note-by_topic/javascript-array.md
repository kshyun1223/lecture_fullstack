# 자바스크립트 - 배열 관련 메서드
### 의의
- DOM API가 모두 배열 기반이기 때문에 자바스크립트는 배열과 관련된 내장 메소드를 충실하게 지원한다
- 배열 관련 메서드들은 콜백함수의 원리로 작동한다

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
