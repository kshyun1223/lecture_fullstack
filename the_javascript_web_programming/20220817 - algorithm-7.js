let numberData = [444,23,2022,8,16,12,22];
// 가장 큰 수는 numberData[2]에 있는 2022이다. 이것을 console 에 출력해보기

// 메모: 토너먼트 방식. 0번과 1번이 맞짱. 승자가 2번과 맞짱. 계속 반복. 가장 큰 숫자가 뭔지는 모르고 하는 게 속 편하니까 걍 배열 length만큼 반복. 최종적으로 승자를 출력.

// 내꺼
// else 가 아니라 if중첩문을 사용해야 했다.
// let winner = 0;
// for(let i = 0; i < numberData.length; i++) {
//   if(numberData[i] > numberData[i+1]) {
//     let winner = numberData[i];
//   } else {
//     let winner = numberData[i+1];
//     console.log(winner)
//   }
// }

// 센세꺼
// pseudo 1. 나 배열에 있는 값을 조회할꺼야 -> 반복문
// pseudo 2. 값을 비교하고싶어 ===, !==
// pseudo 3. 큰놈 >, <
let data = 0;
for(let i = 0; i < numberData.length; i++) {
  if(numberData[i] > numberData[i+1]) {
    if(data < numberData[i]) {
      data = numberData[i];
    }  
  }
}
console.log(data);

// 메소드 사용
// let data = Math.max(...numberData);
// console.log(data);