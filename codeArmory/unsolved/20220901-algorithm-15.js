// todo 여러가지 배열메서드를 사용해서 "9월 1일" 부분을 "9월 9일 추석연휴"로 편집한 후 문서에 출력하세요!
let example = `오늘은 9월 1일 입니다.`;

// todo 나눠서 생각하기
// * 9월 1일을 찾는다
// * console.log(example.indexOf("9월 1일")); // 인덱스 4~8인데 첫글자인 4번이 출력된다

// * 위에 꺼는 너무 투박하다. 세련되게 숫자만 찾아볼까...? 
// * ㄴ> number + '일'을 찾을 수 있을까?

// * '1일'의 1을 9로 바꾼다

// * number + '일'의 뒤에 '추석연휴'라는 문구를 추가할 수 있을 것이다


// todo 배운거 적용해서 해보면...
// * '오늘은 무슨 날입니다'라는 문구를 출력해주는 기계를 만들 수 있을 것이다
// * 들어가는 재료
  // * '오늘은'
  // * number + '월' + number + '일'
  // * 특별한 날이면 문구를 추가 (ex: '추석연휴')
  // * '입니다'

// * 졸려서 기계 부품은 생각이 안낭... ㅠㅁㅠ;;