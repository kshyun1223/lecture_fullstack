const dateHyphen = (input: string) =>{
  const hyphen = (input:string)=>{
    const year = input.slice(0, 4)
    const month = input.slice(4, 6)
    const day = input.slice(6, 8)
    return year + '-' + month + '-' + day
  }

  if(input.length === 8){
    return hyphen(input)

  } else if(input.length === 6){
    const eight = input.padStart(8, '20')
    return hyphen(eight)

  } else {
    return '6자리 혹은 8자리의 숫자만 입력 가능합니다'
  }
}

/*
todo. 요구사항: 그린컴퓨터아트학원 훈련생명단 만들기

? 학사 생정팀에서 학사 운영을 진행하려면 훈련생 한명에 대해 다음과 같은 정보가 필요하다

* 임의의 훈련생 예시
1. 이름: 공욱재 // 문자열
2. 생년월일: 19830920 // 문자열, 연 단위 4자리, 월 단위 2자리, 일 단위 2자리, 총 8자리의 형식을 준수해야 한다
? 3. NCS 직종: {
  번호 : 1 // 문자열
  이름: 정보기술개발 // 문자열
4. 훈련강의실: 305호 // 문자열, 자유롭게 다룰 수 있어야 함
5. 연락처: 010-8028-1846 // 문자열, 하이픈이 포함되어야 한다
6. kongukjae@gmail.com // 문자열, '@'와 '.'이 들어가야 한다
7. 훈련강의명: K-ONG Training // 문자열
8. 훈련시작일: 2022-07-19 // 2번과 동일하면서 하이픈도 들어가야 한다
9. 훈련종료일: 2023-01-05 // 2번과 동일하면서 하이픈도 들어가야 한다
? 10. 훈련생번호: 305-01 // `-` 기준으로 좌측은 4번 항목이어야 하며, 우측은 누산된 번호여야 한다
*/

class Traninee {
  name:string
  birth:string
  ncsNumber:string
  ncsName:string
  classroom:string
  phone:string
  email:string
  lecture:string
  start:string
  end:string
  number:string
  constructor(name:string, birth:string, ncsNumber:string, ncsName:string, classroom:string, phone:string, email:string, lecture:string, start:string, end:string){
    this.name="이름: " + name
    this.birth="생년월일: " + dateHyphen(birth)
    this.ncsNumber="NCS번호: " + ncsNumber
    this.ncsName="NCS이름: " + ncsName
    this.classroom="호실: " + classroom + "호"
    this.phone="전화번호: " + phone
    this.email="이메일: " + email
    this.lecture="강의명: " + lecture
    this.start="시작일: " + dateHyphen(start)
    this.end="종료일: " + dateHyphen(end)
    this.number="번호: " + classroom + '-' + 1
  }
}

const kong = new Traninee(
  '공욱재',
  '19830920',
  '1',
  '정보기술개발',
  '305',
  '010-8028-1846',
  'kongukjae@gmail.com',
  'K-ONG Training',
  '220719',
  '230105',
)
console.log(kong)

export {}