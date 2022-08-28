let textArray = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란", "피존투", "또가스"];

function one(arr) {
  // isArray() 메서드는 인자가 array인지 판별한다
  if(typeof arr === "string" || Array.isArray(arr)) {
    for(let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}
one(textArray); // 기명함수