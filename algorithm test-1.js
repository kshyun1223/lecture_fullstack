const string = "We will never be able to recognize opportunities if we first don’t recognize all that we have and all that we’ve been given."

let countOfWords = 0;

let wordsArr = string.trim().split(' '); 

for (let i = 0; i < wordsArr.length; i++) {
  if (wordsArr[i] !== '') {
    countOfWords++;
  }
}

let backtick = string.indexOf(``)

countOfWords = countOfWords + backtick

console.log(countOfWords);