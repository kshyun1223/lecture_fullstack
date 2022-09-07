/* a = "hello"와 동일한 기능을 하는 함수 */
function a() {
  return "hello"; 
}

// console.log(a());

/* 매개변수의 타입을 검사하는 함수 */
function b(text, callback) {
  if(typeof text === "string" && typeof callback === "function") {
  // 두 조건이 모두 충족되면 실행된다
  // if중첩 대신 and 연산자로 한번에 처리했다
    console.log(typeof callback);
    return text + callback(); 
    // 매개변수 자리이기 때문에 호출할 함수인 a가 아니라 매개변수인 callback의 이름이 들어왔다. 하지만 함수이기 때문에 다른 매개변수와 달리 소괄호가 포함되어 있다.
  }
}

console.log(b('yeho', a))