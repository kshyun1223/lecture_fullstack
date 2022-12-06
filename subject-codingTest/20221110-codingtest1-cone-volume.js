//* 문제: 원뿔의 부피를 계산하는 앱을 만드시오

//* 원뿔의 부피 구하는 공식 : (3.14159 x 반지름의 제곱 x 높이) ÷ 3

// 조건 1. 반지름값, 높이값에 대한 매개변수

//* 조건 2. 반지름(r)과 높이(h)는 모두 1과 100사이 임의의 정수값

// 조건 3. 리턴의 데이터 타입은 사칙연산이 가능한 숫자 타입 => 결과값이 소숫점(부동소수점 float)형태로 존재한다면, 정수(integer)로 변환

/* 임의의 정수 */
const random = () => {
  const radius = Math.floor(Math.random()*101)+1
  const height = Math.floor(Math.random()*101)+1
  return {radius, height}
}

console.log(random())

/* 원뿔의 부피 */
const coneVolume = (radius, height) => {
  const pi = 3.14159 // 파이
  const squareRadius = radius*radius // 반지름의 제곱
  const numerator = pi*squareRadius // 분자 부분까지만
  return numerator/3 // 최종 계산값
}

/* 소수점 버리기 */
const pointRemove = (coneVolume) => {
  return coneVolume.toFixed(0)
}

/* 출력 */
// console.log(pointRemove(coneVolume(5, 5)))
