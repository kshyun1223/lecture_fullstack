/* 조건 */
// 1. 트럼프카드 종류 다섯가지임
// 2. spade, heart, diamond, club은 각각 13개로 구성(1~10+J+Q+K)
// 3. joker는 2개로 구성(red+black)
// 4. 리턴되어 만들어진 객체의 키들의 갯수는 다섯개의 모양(shape_array)을 제외하고 13 * 4 + 2 = 54의 길이값을 갖는다는 것을 검사

/* 메모 */
// 1. 생성자함수를 써야 할 것 같다 
  // 0. 그런데 객체가 중첩객체다 
  // => 생성자함수는 뭔가 안 맞는 거 같다;;; => 아닌가 괜찮나...?
  // => 객체 안에 객체 형태고 바깥 객체는 무기명(?)임
  // => 바깥 객체는 리터럴로 하고 안쪽 객체는 생성자로 할 수 있겠다
  // 1) 처음에 카드 종류 5개를 생성하고 (=> 이건 입력 배열에 해당한다)
  // 2) 각 카드별로 13개, 혹은 2개의 구성을 생성해야 한다
  // 3) 대충 5*13라고 치면 65개가 나오는데 노가다는 의미가 없고 반복문? map()메서드? 전개연산자? 뭔가 써야 할 것 같다
// 2. 콘솔로그가 아니라 리턴으로 끝내보자
// 3. 별도의 함수에서 콜백으로 불러서 검사를 해보자

const shape_array:string[] = ["spade", "heart", "diamond", "club", "joker"];

const trump_deck = (shape_array:string[]) => {
  const general_card:string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const joker:string[] = ["red", "black"]
  return shape_array
}

const check = (check:any) => {
  console.log("이게모얌", check)
}

check(trump_deck(shape_array))

// 총 54개 vs. n개
// 정상적인 vs. m개가 부족한
