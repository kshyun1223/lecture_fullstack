function minus (a, b) {
  if (typeof (a) === "number" && typeof (b) === "number") { 
    // `&&`은 논리곱(and)의 의미
    // 데이터터입을 숫자로 제한
    // typeof() 메서드는 자동으로 리턴이 지정된다
    if(a > b) {
      return a - b; //조건식으로 인해 음수가 나오지 않음
      // 반환(return)을 지정하지 않으면 다른 코드에서 값으로 사용할 수 없다
      // 실행만이 목적이라면 반환을 지정하지 않을 수도 있다
    } else {
      console.error("첫번째 인자가 두번째 인수보다 작습니다."); // 데이터타입 검사
    }
  }
}

function sum (firstNumber, secondNumber) {
  if(typeof (firstNumber) === "number" && typeof (secondNumber) === "number") {
    return firstNumber + secondNumber;
  }
}

console.log(sum(10, minus(20,5)));