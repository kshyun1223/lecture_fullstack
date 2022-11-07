# 타입스크립트
## 개요
### 타입스크립트의 장점
``` typescript
// math.ts
function sum(a: number, b: number) {
  return a + b;
}
sum('10', '20'); // Error: '10'은 number에 할당될 수 없습니다.
```
- 타입을 인식하여 타입 입력 실수로 인한 버그를 방지한다
- 해당 타입에 관련된 메서드를 자동완성으로 보여준다

### 타입
- 자바스크립트가 지원하는 타입 : Boolean, Null, Undefined, Number, BigInt, String, Symbol, Object
- 타입스크립트가 지원하는 타입 : Boolean, Null, Undefined, Number, String, Object, Array, Tuple, Enum, Any, Void, Never