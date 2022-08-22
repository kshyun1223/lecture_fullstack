/* 익명함수는 기본적으로는 재사용이 불가능하다 vs. 기명함수는 재사용이 가능하다 */

/* 익명함수라도 어떻게던 식별만 할 수 있다면 재사용이 가능하다 */
let second = function() { 
  console.log('익명이지롱');
}

/* 직접 addEventListener의 매개변수를 만든 것과 같다 */
function first(text, callbackTest) { // 두번째 매개변수는 콜백함수로 받았다
  if(typeof(text) === 'string') {
  console.log(text + '했지롱');
  callbackTest(); // 고차함수: 함수가 함수를 호출한다
  return "반환했지롱";
  } else {
    console.log('콘솔 확인해');
  }
}
first('식사', second);




