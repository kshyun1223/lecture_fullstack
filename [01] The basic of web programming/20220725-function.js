// `todo` : 아래의 `first()` 함수는 무슨 기능을 하는지 추론해보세요.
// work.1 부족한 기능이 있다면 추가 할 수 있는지 여지를 확보 해보세요.
// work.2 낯설은 작성법이 있다면 '구글링 방법론' 을 설계 해보세요.

function first(tagName, parent, tagContent ="") {
  tagName = typeof tagName === 'string' ? tagName : console.error(`${tagName} parameter must be a string`);
  let setElem = document.createElement(tagName);
  setElem.innerHTHML = tagContent;
  parent.appendChild(setElem);
}