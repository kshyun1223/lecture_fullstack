//메서드(method) === 함수(function)
let aboutMe = {
  name: "댕댕이",
  age: 8,
  nextYear : function() {
    return aboutMe.age + 1;
  }
}

function nextYear(number) {
  return number + 1; // 함수의 결과가 뭐가 될지는 모르겠지만 +1이 될 것이다
}

console.log(aboutMe.nextYear(aboutMe.age));


