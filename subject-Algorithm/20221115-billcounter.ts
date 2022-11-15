/* 거스름돈 계산하기 (그리디 Greedy 알고리즘) */
// 함수 이름 : change_money
// 마트 계산 
// 거스름돈 65200원 
// 천원짜리, 오천원짜리는 없음

/*
출력 = {
  오만원권 : n개
  일만원권 : n개
  오백원동전 : n개
  일백원동전 : n개
  오십원동전 : n개
  일십원동전 : n개
}
*/

// 빼는게 아니라 나누는 방법도 있나보다... 
// 빼는 방법에서는 중첩if문으로 안된다
// 아 빼면 안되겠다 나눠야 된다 ㅠㅠ
// 중첩 if문만 가지고는 다음 if문에 바뀐 변수가 전달이 안되는데 함수로 만들어서 매개변수로 보내야 되나보다
// 아오 배열 순회 했어야 되나... ㅠㅠㅠㅠㅠㅠ

let don:any = {
  "omanwon" : {"gumaek" : 50000, "getsu": 10,},
  "manwon" : {"gumaek" : 10000, "getsu": 10,},
  "obaekwon" : {"gumaek" : 500, "getsu": 10,},
  "baekwon" : {"gumaek" : 100, "getsu": 10,},
  "osipwon" : {"gumaek" : 50, "getsu": 10,},
  "sipwon" : {"gumaek" : 10, "getsu": 10,},
}
// console.log(Object.keys(don)) // [ 'omanwon', 'manwon', 'obaekwon', 'baekwon', 'osipwon', 'sipwon' ]

let chongGumaek = 65200

for (let key in don) {
  if(chongGumaek>=don[key].gumaek && don[key].getsu>=1){
    const asdf=2
    don[key].getsu=don[key].getsu-asdf;
    chongGumaek=chongGumaek-5000
    console.log(don[key], chongGumaek)
  }
}


// const change_money = () => {
//   /* 오만원 */
//   if(chongGumaek>=50000 && don.omanwon.getsu>=1){
//     /* 총금액/오만원 */
//     const nanugi = chongGumaek/50000;
//     /* 몇개 필요한지 */
//     const pilyo = Math.floor(nanugi)
//     /* 금액 차감 */
//     const gumaek = don.omanwon.gumaek
//     chongGumaek - gumaek * pilyo
//     /* 권종 사용 */
//     const sayoung = don.omanwon.getsu - pilyo;
//     console.log (
//       "omanwon",
//       "| nanugi =", nanugi,
//       "| pilyo =", pilyo,
//       "| chongGumaek =", chongGumaek,
//       "| omanwon =", sayoung,
//     )
//   /* } else */ if (chongGumaek>=10000 && don.manwon.getsu>=1){
//     const nanugi = chongGumaek/10000;
//     const pilyo = Math.floor(nanugi)
//     const gumaek = don.manwon.gumaek
//     chongGumaek - gumaek * pilyo
//     const sayoung = don.manwon.getsu - pilyo;
//     console.log (
//       "manwon",
//       "| nanugi =", nanugi,
//       "| pilyo =", pilyo,
//       "| chongGumaek =", chongGumaek,
//       "| manwon =", sayoung,
//     )
//   /* } else */ if (chongGumaek>=500 && don.obaekwon.getsu>=1){
//     const nanugi = chongGumaek/500;
//     const pilyo = Math.floor(nanugi)
//     const gumaek = don.obaekwon.gumaek
//     chongGumaek - gumaek * pilyo
//     const sayoung = don.obaekwon.getsu - pilyo;
//     console.log (
//       "obaekwon",
//       "| nanugi =", nanugi,
//       "| pilyo =", pilyo,
//       "| chongGumaek =", chongGumaek,
//       "| obaekwon =", sayoung,
//     )
//   /* } else */ if (chongGumaek>=100 && don.baekwon.getsu>=1){
//     const nanugi = chongGumaek/100;
//     const pilyo = Math.floor(nanugi)
//     const gumaek = don.baekwon.gumaek
//     chongGumaek - gumaek * pilyo
//     const sayoung = don.baekwon.getsu - pilyo;
//     console.log (
//       "baekwon",
//       "| nanugi =", nanugi,
//       "| pilyo =", pilyo,
//       "| chongGumaek =", chongGumaek,
//       "| baekwon =", sayoung,
//     )
//   /* } else */ if (chongGumaek>=50 && don.osipwon.getsu>=1){
//     const nanugi = chongGumaek/50;
//     const pilyo = Math.floor(nanugi)
//     const gumaek = don.osipwon.gumaek
//     chongGumaek - gumaek * pilyo
//     const sayoung = don.osipwon.getsu - pilyo;
//     console.log (
//       "osipwon",
//       "| nanugi =", nanugi,
//       "| pilyo =", pilyo,
//       "| chongGumaek =", chongGumaek,
//       "| osipwon =", sayoung,
//     )
//   /* } else */ if (chongGumaek>=10 && don.sipwon.getsu>=1){
//     const nanugi = chongGumaek/10;
//     const pilyo = Math.floor(nanugi)
//     const gumaek = don.sipwon.gumaek
//     chongGumaek - gumaek * pilyo
//     const sayoung = don.sipwon.getsu - pilyo;
//     console.log (
//       "sipwon",
//       "| nanugi =", nanugi,
//       "| pilyo =", pilyo,
//       "| chongGumaek =", chongGumaek,
//       "| sipwon =", sayoung,
//     )
// }
// }
// }
// }
// }
// }
// }

// change_money()

