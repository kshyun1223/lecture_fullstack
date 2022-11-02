// * setInterval
let num=0;
const a = setInterval(function(){
  num++
  console.log(num);
  // 종료조건 설정
  if(num === 60) {
    clearInterval(a);
  }
},16);

// 무한루프: 종료하고 싶으면 ctrl+C를 누르면 됨
// 타이머, 스탑워치

// * setTimeout
console.log('a');
setTimeout(function(){
  console.log('b');
}, 10);
setTimeout(function(){
  console.log('c');
}, 0);

// 일반적인 코드: 순차적으로 실행된다

// 이벤트루프: 필요하다면 순서를 어긴다 -> setTimeout()
// ㄴ>비동기