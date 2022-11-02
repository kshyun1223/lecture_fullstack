/* 숫자로 이루어진 문자열 */
let a = "1";
console.log(typeof a); // string

let b = parseInt(a); // int = integer = 정수
console.log(typeof b); // number

/* 문자로 이루어진 문자열 */
let c = "안녕하지롱";
let d = parseInt(c); // 형변환
console.log(d); // NaN

/* NaN */
// 같은 문자열이지만 숫자가 아닌 문자로 이루어진 문자열을 숫자로 변환하려고 시도하면 NaN이라는 값이 뜬다. 
// 대부분의 언어에서는 이러한 경우 타입을 바꿀 수 없다고 판단하여 에러를 반환하지만, 자바스크립트의 경우 NaN이라는 값을 반환한다. 
// NaN은 Not a number의 준말이다. 
// 자바스크립트의 단점인 '에러로 출력되지 않아서 난처한 경우'의 대표적인 사례이다
