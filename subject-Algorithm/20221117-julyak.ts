/* 
# 조건
- 기존에 절약한 돈 17400원 // console.log(100000-82600) 
- 추가로 절약해야 하는 돈 17800원 // console.log(64800-17400)
- 절약 가능한 돈 69000원 // console.log(28500+10500+27000+3000) 

# 풀이
- 비싼 순서: 엔시나 > 택시 > 자전거 > 카누
- 최적해를 찾기 위해 탐욕법을 적용

1) 엔시나 세번 안먹으면 13500원 // 미움지수 3 증가

2) 더 절약해야 하는 돈 3900원 // console.log(17400-13500)

3) 엔시나를 더 안먹으면 필요 이상으로 절약해서 억울하니까 택시 한번 안 타고 카누 두개 안 먹으면 `3500+(200*2)=3900원`으로 깔끔함 // 피로도 1, 미움지수 2 증가 

# 출력
- "공미남님은 택시를 1회 안 타면 1만큼 피곤해지고, 엔시나 1회, 카누를 2회 훔쳐먹으면 3만큼 미움받지만 포켓몬스터 게임을 살수있게 됩니다!"
*/

// todo. 고정지출 10만원 중 어떤 것을 몇번 절약해야 게임 살 수 있나? (정보가 주어진 건 82600원)
//* 게임 가격: 64,800원

const spendingItem = { // 항목
  /* 출퇴근 비용 */
  // 30분 더 일찍 일어나면 지출을 안할 수 있음
  // 일찍 일어나면 30분당 1만큼 피로도가 증가
 "출퇴근비용" : {
   "카카오톡자전거" : "1500원",
   "택시" : "3500원",
  },

  /* 커피 */
  // 원장님 카드를 훔쳐서 사면 지출을 안할 수 있음
  // 원장님 카드를 1회 훔쳐 사용하면 미움지수가 1만큼 증가
  "커피" : {
    "엔시나" : "4500원",
    "카누" : "200원",
  },
}

const spendingCount = { // 내역
 "출퇴근비용" : {
   "카카오톡자전거" : "19회",
   "택시" : "3회",
  },
  "커피" : {
    "엔시나" : "6잔",
    "카누" : "15잔",
  },
}

//* 함수명: commingsoon(argument:object)
// 추가 목표: 고정지출의 종류와 갯수, 총 예산과 목표가격(게임)이 변할수도 있음

// const test = spendingItem.출퇴근비용.택시 // 3500원
// console.log(typeof(test)) //string

// const regex = /[^0-9]/g;
// const result = test.replace(regex, "");
// console.log("result: " + result); // 3500

//todo 1. 생성자함수는 나중에 생각하고 우선 리터럴로 하자
//todo 2. 곱셈도 코드 말고 걍 리터럴로 해보자 ㅠㅠ

/* const spendingTotal = {
  "출퇴근비용" : {
    "카카오톡자전거" : 1500*19,
    "택시" : 3500*3,
  },
  "커피" : {
    "엔시나" : 4500*6,
    "카누" : 200*15,
  },
} 
console.log(spendingTotal) */

const spendingTotal = {
  '출퇴근비용':{
    '카카오톡자전거': 28500,
    '택시': 10500
  },
  '커피':{
    '엔시나': 27000,
    '카누': 3000
  },
}


// console.log(100000-82600) // * 기존에 절약한 돈 17400원
// console.log(64800-17400) // * 추가로 절약해야 하는 돈 17800원
// console.log(28500+10500+27000+3000) // * 절약 가능한 돈 69000원

// * 비싼 순서: 엔시나 > 택시 > 자전거 > 카누
// * 최적해를 찾기 위해 탐욕법을 적용
// * 엔시나 세번 안먹으면 13500원
// console.log(17400-13500) // * 더 절약해야 하는 돈 3900원
// 엔시나 또 안먹으면 필요 이상으로 절약해서 억울하니까 택시 한번 안 타고 카누 두개 안 먹으면 3500+(200*2)=3900원 깔끔함


const julyak = [4500, 3500, 1500, 200]
const getsu = [6, 3, 19, 15]
const akkildon=17800
for(let i = 0; i < julyak.length; i++) { // 절약 배열의 i들을
  for(let j = 0; j <= getsu.length; j++) { // 갯수 배열의 j만큼씩 돎
    // 돌때마다 카운트를 해야 됨
    // 돌때마다 절약해야 되는 목표치도 까야 됨
    // j가 다 되면 for문이니까 알아서 빠져나올건데
    if(<akkildon) { // 목표치가 i보다 적어져도 빠져나와야 됨
      /*  */
      break;
    }
  }
}