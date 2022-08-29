// 1. 함수 one을 호출하면 콘솔에 "첫번째 함수"라는 메세지를 출력하게끔 '알고리즘'을 작성하세요.
function one() {
  console.log("첫 번째 함수");
}

one();

// 2. 함수 two를 호출하면 숫자 10 이라는 값이 콘솔에 출력되게끔 '알고리즘'을 작성하세요.
function two() {
  console.log(10);
}

two();
console.log(typeof(10));

// 3. 첫번째 매개변수 parameter에 "KDT"를 입력하면 "KDT"의 데이터 타입이 콘솔에 출력되게끔 알고리즘을 작성하세요. 
function three(parameter) {
  console.log(typeof('kdt'));
}

three("KDT");

// 4. 첫번째 매개변수 param에 "KDT"값이 들어오면 콘솔화면에서 "K-digital training"이라는 문구가 출력되도록 '알고리즘'을 작성하세요.
function four(param) {
  let KDT = param;
  console.log("K-digital training");
}

four("KDT");

function four(param) {
  if(param === "KDT") {
    console.log("K-digital training");
  }
}

four("KDT");

// 4-1. "KDT"가 아니라면, "한컴타자놀이"가 출력되게끔 '알고리즘'을 추가하세요.
function four(param) {
  if(param === "kdt") {
    console.log("K-digital training");
  } else {
    console.log("한컴타자놀이");
  }
}

four("공욱재미남");
four("kdt");

// 5. 함수 a(), b()을 덧셈하여 나온값을 콘솔에 출력되게끔 '알고리즘'을 작성하세요.
function a() {
  return 1;
} // let a = 1; 과 다르지 않다
function b() {
  return 2;
} // let b = 2; 와 다르지 않다

function five(paramOne, paramTwo) {
  return paramOne + paramTwo; // 3 3
}

console.log(a(), b()); // 1 2
console.log(five(a(), b()) + a()); // 4

// 6. console.log(five(/* 매개변수 두개 */) + a()); 
// 덧셈이 실행되어 어떠한 '숫자값' 이 나오도록 작성하세요

function a() {
  return 1;
} // let a = 1; 과 다르지 않다
function b() {
  return 2;
} // let b = 2; 와 다르지 않다

console.log(five(a(), b()) === 3); // true