/*
  todo : 해당 작업의 검증작업(input, output)이 끝났다면 해당 모듈을 다시 들여다 볼 일이 현저히 적어진다.
*/
/**
 * @calculratorReturnNumber
 * @return {number} 객체에 작성된 모든 메서드들은 리턴값이 숫자 입니다.
 */
const calculratorReturnNumber = {
  /**
   * @addition
   * @subtraction
   * @mulitplication
   * @division
   * 
   * @type {function (number, number) : number}
   * @returns {number} 리턴 데이터타입은 숫자입니다.
   * @param {number} operatorParameter : 인자(argument)는 숫자입니다.
   * @param {number} operandParameter : 인자(addition)는 숫자입니다.
   */
  addition: function (operatorParameter, operandParameter) {
    return operatorParameter + operandParameter;
  },
  subtraction: function (operatorParameter, operandParameter) {
    return operatorParameter - operandParameter;
  },
  mulitplication: function (operatorParameter, operandParameter) {
    return operatorParameter * operandParameter;
  },
  division: function (operatorParameter, operandParameter) {
    return operatorParameter / operandParameter;
  }
}

export default calculratorReturnNumber;