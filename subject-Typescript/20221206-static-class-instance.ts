class First {
  static location = "대전";
  id: number;
  name: string;
  type: string;
  constructor() {
    this.id = 1,
    this.name = "피카츄",
    this.type = "전기"
  }
  checkThis() {
    return this; // this가 가리키는 것을 확인 하기
  }
  whereInfo() {
    return `\"${this.location}\"에 ${this.name}가 살고 있습니다.`;
  }
}
console.log("static 필드 location 조회 :", First.location);
/**
 * ? static 필드 location 조회 부분
 * * First라는 이름의 class를 '직접적으로' 호출 한 사례로 static(정적인)이 붙어있다면 바로 사용 할 수 있다.
 * */ 
// console.log("constructor 함수부분의 내용 조회 :", First.name);
/**
 * ? constructor 내부의 키 접근 부분
 * * First에 구축된 3개의 속성은 모두 유연성이 없는 리터럴(이미할당된) 방식임에도
 * * "피카츄"라는 실제 값을 얻어낼 수 없다.
 */
const pikachu = new First(); // 인스턴스 생성
/**
 * ? First 라는 클래스를 new 키워드로 호출해 pikachu라는 인스턴스를 생성했다.
 * * 매개변수가 전혀 없지만, 클래스 자체가 리터럴이므로 임의의 객체가 생성된다.
 */
console.dir(pikachu);
console.dir(First); 
/**
 * ? console.dir(pikachu), console.dir(First);
 * * 하나는 pikachu 라는 인스턴스의 '구조'를 조회했고,
 * * 다른하나는 인스턴스 객체를 만드는 생성자 함수 자체를 조회했다.
 * * '만들어진' vs '만들기위한' 차이
 */
console.log("인스턴스로부터 location 속성 조회 : ", pikachu.location);
console.log("클래스로부터 location 속성 조회 : ", First.location);
/**
 * ? pikachu.location vs First.location
 * * 인스턴스로부터 조회하면 'undefined'라는 특정 값이 나온다. 에러가 나오지 않는 것에 주목해야한다.
 * * 값이 없다면, 혹은 찾을 수 없다면 에러를 반환해야 하는 것이 마땅하나, 자바스크립트의 큰문제 중 하나
 */

console.log("this 찾는 메서드 호출", pikachu.checkThis()) // instance 전체가 조회됨
console.log("문장 만드는 메서드 호출", pikachu.whereInfo()) // 인스턴스에서는 class 선언부에서 정의된 location 객체가 조회되지 않는다.