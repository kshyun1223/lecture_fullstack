// 무작위의 숫자 데이터 배열을 작은 값 순으로 정렬하기
// 배열 데이터 속에 있는 원소의 값을 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 순서로 정렬
// 메서드 금지
// 순서를 바꾸는 실행"이 일어날 때마다 step 변수 값 1씩 증가
// 타입스크립트는 인터페이스 사용
// 인덱스 0부터 4까지 객체로 리턴 : 
// {"one" : 0, "two" : 1, "three" : 2, "four" : 3, "five" : 4}

/* 
* const inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1];
* const sortArray = (inputData) => {
* 6 // 먼저 6이 들어옴
* 2, 6 // 2는 6보다 작으니 앞으로 (step=1)
* 2, 6, 9 // 9는 다른거보다 크니 뒤로 (step=2)
* 2, 6, 8, 9 // 8은 6보다 크고 9보다 작으니 사이로 (step=3)
* 2, 4, 6, 8, 9 // 4는 2보다 크고 6보다 작으니 사이로 (step=4)
* 0, 2, 4, 6, 8, 9 // 0은 다른거보다 작으니 앞으로 (step=5)
* 0, 2, 4, 6, 8, 9 // 8이 중복임
* 0, 2, 4, 5, 6, 8, 9 // 5는 4보다 크고 6보다 작으니 사이로 (step=6)
* 0, 2, 4, 5, 6, 7, 8, 9 // 7은 6보다 크고 8보다 작으니 사이로 (step=7)
* 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 // 1은 0보다 크고 2보다 작으니 사이로 (step=8)
* 인덱스 0부터 4까지 객체로 만들어서 반환
}
*/

/* 
todo. 필요한 기능들
* 1. 배열을 순회하면서 하나씩 받아서 새로운 배열에 집어넣어야 한다
* 2. 먼저 것보다 작으면 앞으로 보내야 된다
* 3. 어차피 순서대로 들어오니까 크면 뒤로 보내는 건 저절로 되겠다
* 4. 2번 동작이 발생할 때 카운트 변수를 증가시켜야 한다
* 5. 먼저 것들과 비교해서 중복이면 아무것도 하지 않고 그냥 넘어가야 한다
* 6. 인덱스 0부터 4까지 객체로 만들어서 내보내야 한다
*/

interface numberObject {
  one: number;
  two: number;
  three: number;
  four: number;
}

const inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]
const selectionSort = (inputData:number[]) => { // 타입을 Array로 지정할 경우 'Array<T>' 제네릭 형식에 1형식 인수가 필요합니다. ts(2314)라는 에러 발생.
  for (let i=0; i<inputData.length-1; i++) { // 입력된 배열이 10개인 경우 총 9번 실행 => [0~8]
    let minIndex=i // 최소값의 인덱스를 저장하는 변수
    for (let j=i+1; j<inputData.length; j++) { // 매번 실행할 때마다 인덱스 j를 1씩 증가시켜서 범위를 줄여나간다
      if (inputData[j]<inputData[minIndex]) { // 최소값보다 작은 수를 발견하면
        minIndex=j // 새로운 최소값으로 선언한다
      }
    }
    const temp = inputData[minIndex] // 최소값을 저장하는 변수
    inputData[minIndex] = inputData[i] // 최소값을 찾으면
    inputData[i] = temp // 최솟값을 제일 앞으로 보냄
  }
  const numberObject = {
    "one":inputData[0],
    "two":inputData[1],
    "three":inputData[2],
    "four":inputData[3],
    "five":inputData[4],
  }
  return numberObject
};
console.log(selectionSort(inputData))

/* for (const i=0; i<inputData.length; i++){
  if(i<1){ // i=0이라고 하면 안됨
    tempArray[i]=inputData[i]
  }
}
console.log(tempArray) // [6] */
