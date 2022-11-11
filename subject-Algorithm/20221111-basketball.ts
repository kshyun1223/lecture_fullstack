/*
* 총 점수 : 84점
* 3점슛을 제외하고 2점슛과 자유투로 득점한 비율은 반반: (84-48)/2=18

* 3점슛 16개 넣음: 3*16=48점

* 2점슛: 총 18점
* 2점슛 횟수: 18점/2점=9개

* 자유투: 총 18점
* 자유투 횟수: 18점/1점=18개 

* 슛 던진 총 횟수: 16+9+18=43

* 3점슛 넣을 확률: (16/43)*100≒37%
* 2점슛 넣을 확률: (9/43)*100≒21%
* 자유투 넣을 확률: (18/43)*100≒42%

* "KDT팀이 이 날 성공한 2점슛은 총 9개 입니다."
* "그리고 상대팀으로부터 자유투를 9번 획득해, 총 18개의 자유투를 성공하였습니다."
* "이 날 KDT팀의 자유투 성공률은 100% 입니다."
*/

const three = 16
const two = 9
const free = 18

const score_analysis = (x:number, y:number, z:number) => {
  
  /* x: 3점슛 */
  const A = x*3

  /* y: 2점슛 */
  const B = y*2

  /* z: 자유투 */
  const C = 1*2*z

  /* 자유투 확률 */
  const D = (z/(x+y+z))*100

  console.log(
    `"KDT팀이 이 날 성공한 2점슛은 총 ${A}회 입니다."`,
    `"그리고 상대팀으로부터 자유투를 ${B}번 획득해, 총 ${C}개의 자유투를 성공하였습니다."`,
    `"이 날 KDT팀의 자유투 성공률은 ${D}% 입니다."`,
  )
}

score_analysis(three, two, free)