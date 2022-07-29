// # 과제
// todo : 아래의 first() 함수는 무슨 기능을 하는지 추론해보세요.
// work.1 부족한 기능이 있다면 추가 할 수 있는지 여지를 확보 해보세요.
// work.2 낯설은 작성법이 있다면 '구글링 방법론' 을 설계 해보세요.



function first(tagName, parent, tagContent ="") { //first 함수의 매개변수는 tagName, parent, tagContent
  tagName = typeof tagName === 'string' ? tagName : console.error(`${tagName} parameter must be a string`); //tagName의 타입을 문자열로 선언, 일치하지 않을 경우 경고메시지 출력
  let setElem = document.createElement(tagName);//setElem 변수는 tagName 변수에 의해 요소를 생성
  setElem.innerHTHML = tagContent; //setElem은 tagContent의 HTML 요소를 가져옴
  parent.appendChild(setElem); //setElem을 가져와서 parent의 마지막 부분에 붙임
}



//first: 배열 중 첫번째 원소를 반환
//$: document.getElementById () 함수의 바로 가기