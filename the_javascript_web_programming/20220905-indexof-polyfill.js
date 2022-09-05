let example = [1,2,3,4,5,7,8,9];
// 배열의 원소 중 인수(argument)에 숫자 6이 없다. 
function indexOfPolyfill(arr,target) {
  for(let i = 0; i < arr.length; i++) { 
    if(arr[i] === target) { return i;
    } 
  } 
  return -1;
} 
console.log(indexOfPolyfill(example, 6));

