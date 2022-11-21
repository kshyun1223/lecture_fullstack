// 도전과제 : 게임 세계관 속 화폐 단위 정리하기
// 화폐 단위 : copper , silver, gold 
// 함수 이름 : game_money()
// 특수한 화폐단위를 적용하여 환산을 수 있는 알고리즘을 작성하시오.
// { gold = true, silver = false, copper = true } 라는 함수 객체 타입의 매개변수가 셋팅되어있다면 gold와 copper에 대한 계산치만 결과같이 나올 수 있도록 기능을 조성하시오

// todo. 조건
//* 8 copper === 1 silver
//* 4 silver === 1 gold
//* 가죽 1개 가격 = 2silver
//* 시간당 파밍한 가죽 : 45개
//* 총 플레이 시간 8시간

// todo 조건. 시간당 파밍한 가죽 갯수 = 45
// todo1. "이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 00개 입니다."
// todo2. "gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 00개의 copper를 챙겼습니다."
// todo3. "공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 "00gold, 00copper"를 얻었습니다"

// 8코퍼는 1실버
// 4실버는 1골드
// 가죽 1개는 2실버
// 시간당 파밍한 가죽 45개
// 총 플레이 8시간
// 45가죽은 90실버 (개당 2실버)
// 90실버를 골드로 계산하면 22골드 2실버 (1골드당 4실버)

const farming = (leather:number) =>{
  const timeGold = (Math.floor(leather * 2 / 4))
  // const timeSilver = leather*2/4%1*4
  const timeCopper = leather * 2 / 4 % 1 * 4 * 8
  const allGold = timeGold*8
  const allCopper = timeCopper*8
  return `
    "이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 ${timeGold}개 입니다."
    "gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 ${timeCopper}개의 copper를 챙겼습니다."
    "공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 ${allGold}gold, ${allCopper}copper를 얻었습니다"
  `
}
console.log(farming(45))


/* 망한거 ㅠㅠ */
// const exchangeCopper = (silver:number, gold:number, leather:number) => {
  //   silver = silver*8;
  //   leather = leather*16;
  //   gold = gold*32;
  //   return {silver, leather, gold}
  // }
  // console.log(exchangeCopper(1, null, null)) // 에러

/* copper 기준으로 모든 기준 환산 */
// const copper = 1
// const silver = copper*8
// const leather = copper*16
// const gold = copper*32
// console.log(copper, silver, gold, leather) // 1, 8, 32, 16