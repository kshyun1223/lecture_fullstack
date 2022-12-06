/* constructor 방식 */
// "호출할 때 주어진 값으로 인스턴스(객체)를 만들겠다."
// 따라서 '쥐어줄 값'을 반드시 argument의 형태로 작성해야 한다.
// "원하는 값으로 유연하게 구성된 인스턴스를 찍어낼 수 있는." 형태가 된다.
class First { // 선언부
  first: string
  constructor(first: string) {
    this.first = first
  }
}
const firstCall = new First("생성자") // 호출과 동시에 할당한다
console.log(firstCall.first)
console.log(firstCall instanceof First) // true

/* static 방식 */
// 생성자가 존재하지 않는다
// 별다른 호출이나 할당을 하지 않았다는 점에서 마치 변수와도 같다
// 하지만 class이기 때문에 객체, 규격, 정규화의 형식을 따른다
class Second {
  static staticObject = "static" 
}
console.log(Second.staticObject)
console.log(typeof(Second.staticObject))

/* static 키워드 없이 키와 값을 할당 */
// undefined가 출력된다
class Third {
  static test: any
  test = "test"
}
console.log("Third 값:", Third.test)