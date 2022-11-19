import calc from "../core-modules/calculrator.js";
/*
원의 넓이 구하는 공식
반지름 x 반지름 x PI
*/

/**
 * 원의 넓이를 구하는 함수 입니다. 
 * @param {number} circleRadius : 픽셀로 들어갈 데이터가 필요합니다. 
 * @returns number and int
 * 
 * 리턴이 정수형태로 들어가 있기 때문에, 인자(argument)는 꼭 정수가 아니어도 사용할 수 있습니다.
 * 
 */

export default function areaOfCircle(circleRadius) {
  let radiusSquaredValue = calc.mulitplication(circleRadius, circleRadius);
  let getResultInt = calc.mulitplication(radiusSquaredValue, Math.PI);
  return Math.ceil(getResultInt);
}
