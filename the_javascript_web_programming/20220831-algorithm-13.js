/* 일단 리터럴부터 */
/* // 세 변수에 각각 값을 할당하고
const x = 5
const y = 19
const z = 7
if(x+y+z%3 < 10){ // 평균을 구해서
  console.log('under') // 10 미만이면 under를 출력하고
} else {
  console.log('over') // 10 이상이면 over를 출력한다
} */ 



/* 1부터 20까지의 범위 중 서로 겹치지 않는 임의 숫자 3개가 inputData에 담기도록 하시오 */
function rand(min, max) { // min 이상 max 미만의 임의의 수를 구하는 rand 함수
  return Math.floor(Math.random() * (max - min + 1)) + min; // 리턴
}
const inputData = [];
const three = function(){
  const first = rand(1, 20) // 변수 first에 호출
  const second = rand(1, 20) // 변수 second에 호출
  if(second === first){ // 만약 second가 first와 같다면
    second(); // second를 한번 더 하고
  } else { // 만약 second가 first와 다르다면
    const third = rand(1, 20) // 변수 third에 rand 함수를 호출
    if(third === first || third === second){ // 만약 third가 first 혹은 second와 같다면
      third() // third를 한번 더 하고
    } else { // 만약 third가 first 혹은 second와 다르다면
      inputData.push(first, second, third); // inputData에 세 변수를 추가
      // console.log(inputData);
    }
  }
}
three();




/* b. 객체 objectData의 property인 key, "first", "second", "third"에 주문 a를 통해 얻은 데이터를 각각의 키(key)의 값으로 삽입(insert)하시오. */

// function value(first, second, third) {
//   this.first = first;
//   this.second = second;
//   this.third = third;
// }

// const objectData = [];
// objectData.push(new value(inputData[0], inputData[1], inputData[2]))
// console.log(objectData);



/* c. objectData에 담긴 세 개의 난수 중 중앙값에 해당하는 값을 출력하시오 */
// 순서대로 정렬했을 때 중앙에 위치하는 값
// 값이 짝수개면 중앙의 두 값의 평균
// const sort = function(){
//   inputData.sort()
  console.log(inputData)
// }

//* 화살표함수 위주로 살펴보기
function median(array) {
  array = array.sort((a, b) => a - b);
  if (array.length %2 != 0) {
    if (array.length > 1) {
      array.pop();
      array.shift();
    }
    return array[0];
  } else {
    if(array.length > 2) {
      array.pop();
      array.shift();
    }
    return (array[0] + array[1]) / 2;
  }
}
median(inputData);
console.log(median(inputData));



 
/* 3개가 아니라 4개라면? */
/* 1에서 20까지가 아니라 1에서 10000까지라면? */
// 자동화는 넘 어렵당 ㅠㅠ 나중에...

