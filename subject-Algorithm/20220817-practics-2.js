var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//배열의 마지막 원소가 10이면 반복문으로 0번부터 마지막 원소까지 console.log 출력 

// 내꺼
// if (arr.length === 10) {
//   for(i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     }
//   } else {
//     console.log('반복문을 실행하지 못했습니다');
//   }

// 센세꺼
console.log(arr[9]);

if(arr[arr.length-1] === 10) {
  console.log('맞거등요!!!');
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i] + '값');
  }
} else {
  console.log('틀렸당 ㅠㅠ');
}