// 1. 트럼프카드 종류 다섯가지임
// 2. spade, heart, diamond, club은 각각 13개로 구성(1~10+J+Q+K)
// 3. joker는 2개로 구성(red+black)
// 4. 리턴되어 만들어진 객체의 키들의 갯수는 다섯개의 모양(shape_array)을 제외하고 13 * 4 + 2 = 54의 길이값을 갖는다는 것을 검사

const shape_array:string[] = ["spade", "heart", "diamond", "club", "joker"];

const trump_deck = (shape_array:string[]) => {
  return
}

// console.log(trump_deck(shapeArray))
/* {
spade : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
heart : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
diamond : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
club : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
joker : { "RED" : 1, "BLACK" : 2 } 
} */

const check = (trump_deck) {
  console.log("해당 리턴된 객체의 카드 갯수에 대한 검사결과, 총 ${변수}개로 ${변수} 구성입니다.")
}

// 총 54개 vs. n개
// 정상적인 vs. m개가 부족한
