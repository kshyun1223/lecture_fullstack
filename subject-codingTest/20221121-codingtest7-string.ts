/* 조건 */
// 1. 알파벳이 무엇이 몇개가 사용됐는지 객체(object, dictionary) 타입으로 출력
// 2. 영어가 아니라도 동작해야 한다
// 3. 가장 많이 사용된 철자만큼 가장 적게 사용된 철자를 생성하여 문장 사이에 무작위로 배치
// 예) 가장 많이 쓴 음절 10개, 가장 적게 쓴 음절 2개 -> 가장 적게 쓴 음절 8개를 무작위로 문자열 사이사이 추가
// 4. 기존 띄어쓰기를 무시하고 5개의 철자씩 띄어쓰기 되도록 임의로 조정
// 예) Itisa longe stabl ished

/* 
todo. 영어가 아닐 수도 있으니까 알파벳 24개라고 접근하면 나중에 골치아플 것이다
  * 반대로 특수문자와 공백을 제거해야 한다
  * 문자열을 배열로 여기고 글자수만큼 순회해야 한다

todo. 새로운 철자가 나올 때마다 배열을 하나씩 만들어서 저장하는 식으로 하면 다음 순회에서 기존 배열에 이미 나와서 중복되는 게 있는지 판단해야 한다
  * 당연히 저절로 되는 게 아니라 내가 개발자니까 내가 만들어야 한다
  * 그리고 중복 판단까지 반복문을 해버리면 반복이 너무 많아질 것이다

todo. 매번 순회 때마다 해당 문자열을 지워버리는 식으로 가면 중복 판단도 따로 할 필요가 없고, 뒤로 갈 수록 길이도 점점 줄어들어서 좋을 것 같다
*/


// 일단 돌아야 한다. 돌면서~
//     만약 / 임시배열에 들어있지 않으면서 / 문자열인 i가 보이면 / 임시배열에 넣어줘...?
//     => 아참 그딴 편리한 기능은 없었지ㅠㅠ 내가 개발자인데 내가 만들어야지;;;

const fromInput = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "

// console.log(fromInput.length)//614

// 우선 fromInput 배열을 i만큼 돌아보자
// temp.push(fromInput[i])
// console.log(temp)//... 514 more items

const text_listup = (fromInput:string) => {
  // let temp:string[] = []
  // const string = fromInput.replace(/[1-9]/i,"")
  // /^[a-zA-z]+$/
  
  console.log(fromInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
/*   for (let i=0; i<fromInput.length-1; i++) {
  //   for (let j=i+1; j<fromInput.length; j++) { // 매번 실행할 때마다 인덱스 j를 1씩 증가시켜서 범위를 줄여나간다
      if (typeof(fromInput[i])==="string") {
        temp.push(fromInput[i])
      }
  //   }
  }
  console.log(temp) */
}

text_listup(fromInput)