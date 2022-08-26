let numberData = [444,23,2022,8,16,12,22];
// 가장 작은 수는 numberData[3]에 있는 8이다. 이것을 console 에 출력해보기

// 메모: 작은 수가 이기는 토너먼트 방식. 먼저 0번과 1번이 붙음. 승자가 2번과 붙음. 계속 반복. 가장 작은 숫자가 뭔지는 모르고 하는 게 속 편하니까 걍 배열 length만큼 반복. 최종적으로 승자를 출력.

let memory = 1;
for(let i = 0; i < numberData.length; i++) {
  if(numberData[i] < numberData[i+1]) {
    if(memory > numberData[i]) {
      memory = numberData[i];
      console.log(memory);
    }
  }
}
console.log(memory);



// let data = 0;
// for(let i = 0; i < numberData.length; i++) {
//   if(numberData[i] > numberData[i+1]) {
//     if(data < numberData[i]) {
//       data = numberData[i];
//     }  
//   }
// }
// console.log(data);