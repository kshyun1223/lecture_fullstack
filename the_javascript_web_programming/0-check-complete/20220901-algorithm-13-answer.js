// 난수 생성
function randomData(minInt, maxInt) {
  //Math.random(): 0에서 1 사이의 난수를 생성한다
  const getRandomValue = Math.random() * (maxInt - minInt + 1) + minInt; // 이렇게 하면 된다고 MDN에도 써있음 ㅇㅇ 수학시러 ㅠㅠ
    return Math.floor(getRandomValue); // 소수점 이하 버림
}
console.log(randomData(10, 100));

function getRandomIntArray(count, minInt, maxInt) { // count: 원하는 갯수...?
  const setArray = []; 
  let handle = 0; 
  while (handle < count) {
    let randomValue = randomData(minInt, maxInt); // 위에서 만든 함수 소환
    if(setArray.includes(randomValue) === false) { // 없으면
      setArray.push(randomValue); // 하나 넣어줌 ㅇ
      handle++;
    }
  }
  setArray.sort((a, b) => a - b); // 정렬
  // console.log(setArray);
  return setArray;
}

const setData = getRandomIntArray(3, 1, 20); // 호출

console.log(setData);