const scopeDebugging = { // 옆 중괄호가 객체의 스코프 시작부분
  whatThis: function(){
    console.log(this);
  },
  //일반 함수 작성 방식으로 whatThis라는 메서드를 만들었다.
  arrowThis : () => {
    console.log(this);
  }
  // 화살표 함수 방식으로 arrowThis라는 메서드를 만들었다.
} // 옆 중괄호가 객체의 스코프 끝부분

console.log(scopeDebugging.whatThis());
console.log(scopeDebugging.arrowThis());
/* 
  작성 방식만 다를 뿐 원하는 것은 this 키워드가 가리키고 있는 것이 무엇인지를 판단해보면, 
  둘다 같은 값이 나와야 출력되는(가리키는) 값은 다르게 나온다.
  
  화살표 함수의 매우 큰 특징 중 하나이다.
*/
