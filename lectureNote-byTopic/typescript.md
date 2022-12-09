# 타입스크립트
### 타입스크립트 특징
- 타입을 지정하여 타입 입력 실수로 인한 버그를 방지한다
- 해당 타입에 관련된 메서드를 자동완성으로 보여준다

### 타입
- 자바스크립트가 지원하는 타입 : Boolean, Null, Undefined, Number, **BigInt**, String, **Symbol**, Object
- 타입스크립트가 지원하는 타입 : Boolean, Null, Undefined, Number, String, Object, **Array, Tuple, Enum, Any, Void, Never**

### 함수
- 타입스크립트로 함수를 작성할 때 타입을 지정할 수 있는 부분
  - 파라미터
  - 리턴
  - 함수의 구조

```typescript
function sum (a: number, b: number): number {
  return a + b;
} 
// 파라미터와 리턴의 타입을 지정했다
// 리턴에 특정 타입을 지정하고 싶지 않더라도 void라도 사용해야 한다
```