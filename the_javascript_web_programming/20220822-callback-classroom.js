/* a = "hello"와 동일한 기능을 하는 함수 */
function a() {
  return "hello"; 
}

/* 매개변수의 타입을 검사하는 함수 */
function b(text, callback) {
  if(typeof text === "string" && typeof callback === "function") {
  // 두 조건이 모두 충족되면 실행된다
  // if중첩 대신 and 연산자로 한번에 처리했다
    console.log(typeof callback);
    return text + callback(); // 부모함수 안에서 자식함수를 호출했다
  }
}

console.log(b('yeho', a))