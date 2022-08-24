let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// 일반 명령 방식
function forEachPolyfill() {
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr)) {
    console.log(i+1);
    }
  }
}

// 배열 메서드 자바스크립트, 익명함수 방식
arr.forEach(function(a, b) {
  console.log(a + "값은 인덱스 : " + b);
})

// 화살표 함수 방식: 축약, 압축
arr.forEach(a=>console.log(a));
