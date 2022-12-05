class First {
  first: string // 프로퍼티 property
  constructor(first: string) { // 생성자
    this.first = first
  }
}

const firstInstance = new First("first") // 객체를 생성하는 new 키워드
console.log(firstInstance) // First { first: "first" }

// instanceof: 생성자의 prototype 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별합니다
console.log(firstInstance instanceof First) // true

console.log(firstInstance.first) // first

const { first } = firstInstance
console.log(first) // first

/*
todo. 생각해 볼 관점
* 원하는 생상자함수로부터 만들어진 것이 아니면 거부시키는 방식
*/
