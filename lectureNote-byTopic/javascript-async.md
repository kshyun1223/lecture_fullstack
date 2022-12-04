# 자바스크립트 - 비동기 처리
## promise
### 개요
- 내용은 실행 되었지만 결과를 아직 반환하지 않은 객체라고 할 수 있다
- 진행 시점에 따라 세가지 상태가 있다
  - Pending (대기): 비동기 처리가 완료되지 않은 상태
  - Fulfilled (이행): 비동기 처리가 완료된 상태
  - Rejected (실패): 비동기 처리가 실패하거나 오류가 발생한 상태

### 예시
```javascript
const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('resolved');
  } else {
    reject('rejected');
  }
});

promise.then((res) => {
  console.log(res);
})
promise.catch((error) => {
  console.error(error);
});
```

## async/await
### 개요
- promise도 복잡해지면 콜백과 마찬가지로 `.then()` 지옥이라고 할만한 코드가 나올 수 있기 때문에 이를 해결하고자 만들어졌다
- await 는 async 함수 안에서만 동작한다
- async/await 은 Promise 와는 다르게 에러를 핸들링 할 수 있는 기능이 없기 때문에 `try-catch()`문을 추가해서 별도로 에러를 핸들링해야 한다

### 예시
```javascript
(async () => {
  const condition = true;
  const promise = new Promise((resolve, reject) => {
    if (condition) {
      resolve('resolved');
    } else {
      reject('rejected');
    }
  });
  try {
    const result = await promise;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();
```