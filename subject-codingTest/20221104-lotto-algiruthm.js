const indexList = (function numberSet() { // 즉시실행함수
  let tempArray = [];
  for (let i = 0; i < 19; i++) {
    tempArray.push(i+1);
  }
  return tempArray;
})();



function getRandomInt(min,max) {
  min = Math.ceil(min); // Math.ceil: 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 것을 반환
  max = Math.floor(max); // Math.floor: 주어진 숫자보다 작거나 같은 숫자 중 가장 큰 것을 반환
  return Math.floor(Math.random() * (max - min)) + min;
} // Math.floor: 0보다 크거나 같고 1보다 작은 부동 소수점 의사 난수를 반환




function afterRandom(arr) { 
  let reOrderArray = [];
  let targetArr = arr.map(e => e); // 깊은복사
  while(reOrderArray.length < arr.length){
    let getRandomIntResult = getRandomInt=(targetArr[0], targetArr[targetArr.length-1]);
    if(reOrderArray.includes(getRandomIntResult) === true) {
      // 결과값이 기존값을 포함하는지를 확인하기 위해 일부러 안티패턴을 사용
    } else {
      reOrderArray.push(targetArr[getRandomIntResult-1]);
      targetArr.splice(getRandomIntResult-1, 1);
    }
  }
  let setIndex = 0;
  reOrderArray.forEach((element, index) => {
    if(element === undefined) {
      reOrderArray[index] = targetArr[setIndex];
      setIndex++;
    }
  });
  return reOrderArray
}
console.log(afterRandom(indexList));