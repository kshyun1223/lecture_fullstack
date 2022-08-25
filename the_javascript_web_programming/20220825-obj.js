const ho = {
  lecture : {
    name : "KDT",
    place : "305호",
    time : "9시",
  },
  tutor : {
    name : "미남",
    age : 18
  },
  study : ["html", "css", "js", "react"],
  eunsoo : {
    home : '대전',
    address : {
      region : {
        name : "서구",
        dong : '둔산동',
        detail : {
          first : "오라클빌딩",
          second : "그린학원",
          third : "305호"
        }
      }
    }
  }
}

/* 명령으로 배열접근 */
// ho.study[ho.study.length] = "hacker";

/* 선언으로 배열 접근 */
// ho.study.push("cracker");

/* 리터럴로 작업하는 것은 어렵다 */
// ho.study[5] = 'jung won';

/* 테이블 */
// console.table(ho.study);

/* 구조분해할당: 자바스크립트 내장 기능 -> dot location을 다양하게 사용하는 방법 */
// let second = ho.eunsoo.address.region.detail.second
// const {eunsoo:{address:{region:{detail:{second:variable}}}}} = ho;
// console.log(variable);

/* 305호를 306호로 바꾸는 함수 */
// console.log(ho.eunsoo.address.region.detail.third)
// const change = function() {
//   if(ho.eunsoo.address.region.detail.third !== "306호"){
//   ho.eunsoo.address.region.detail.third = "306호"
//   console.log(ho.eunsoo.address.region.detail.third);
//   }
// }
// change();

let {eunsoo:{address:{region:{detail:{third:room}}}}} = ho;
const change = function() {
  if(room !== "306호") {
    room = "306호";
    console.log(room);
  }
}
change();

/* 오라클빌딩을 오라클아파트로 바꾸는 함수 */
let {eunsoo:{address:{region:{detail:{first:building}}}}} = ho;

const changeTwo = function() {
  if(building === "오라클빌딩") {
    building = "오라클아파트";
    console.log(building);
  }
}
changeTwo();

