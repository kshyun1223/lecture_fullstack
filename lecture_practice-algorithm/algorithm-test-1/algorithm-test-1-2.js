let string = "We will never be able to recognize opportunities if we first don’t recognize all that we have and all that we’ve been given."

let apostrophe = function(){
var count = 0;
  for(let loop = 0; loop < string.length; loop++) {
    if(string[loop] === '’') {
      count++;
    }
  }
  // console.log(count)
  return count
}
apostrophe()


let words = function(){
  let countOfWords = 0;
  let wordsArr = string.trim().split(' '); 
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] !== '') {
      countOfWords++;
    }
  }
  // console.log(countOfWords)
  return countOfWords
}
console.log(apostrophe() + words());