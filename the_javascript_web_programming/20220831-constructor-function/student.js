const studentList = ["강예훈","김성현","류주완","마근원","박종인","박재형","송형주","양상희","원두진","유민호","이상호","이소영","이은수","정동욱","정윤환","정정원","지영빈","한용준","황초영","김근수","김승현","전형민","정연주","이아연","최화연"];

function student(id, name) {
  this.id = id;
  this.name = name;
}

const members = [];
/* 명령형 방식 */
// for(let i=0; i<studentList.length; i++) {
//   members.push(new student(i+1, studentList[i]))
//   console.log(members);
// }

/* 선언형은 잘 안되넹 ㅠㅠ -> for in */

/* 홀수만 뽑아내보자 */
// 짝수 구하는 공식: value%2===0
const oddMembers = [];
for(let i=0; i<studentList.length; i++) {
  if(studentList[i]%2!==0){
    oddMembers.push(new student(i+1, studentList[i]))
  }
  console.table(oddMembers);
}


/* 짝수 구하는 함수 */
// function even(num) {
// let even = num % 2; // 나머지
// if(even === 0) {
//   return true;
// } 
// return false;
// }
// console.log(even(124124));// true


