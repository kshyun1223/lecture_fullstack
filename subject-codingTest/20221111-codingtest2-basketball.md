### 자유투 규칙
1. 한번 할 때마다 두개씩 던짐
2. 한개 넣으면 1점

### 조건
1. 다른팀, 다른선수, 다른경기에서도 사용 가능
2. 정수(integer) 형태로 출력

### 출력 형태
- "KDT팀이 이 날 성공한 2점슛은 총 **A**회 입니다."
- "그리고 상대팀으로부터 자유투를 **B**번 획득해, 총 **C**개의 자유투를 성공하였습니다."
- "이 날 KDT팀의 자유투 성공률은 **D**% 입니다."
- 함수 이름: score_analysis()

### 주어진 정보
- 총 점수 : 84점
- 3점슛 16개 넣음 => 점수: 3*16=48점
- 3점슛을 제외하고 2점슛과 자유투로 득점한 비율은 반반 => 점수: (84-48)/2=18

### 변수
- 총득점=84
- 3점슛 점수=3
- 3점슛 횟수=16
- 3점슛 총득점=점수*횟수
- 2점슛 점수=2
- 자유투 점수=1
- 2점슛과 자유투 비율=50:50

```javascript
// 가장 작은 것은 무엇인가? 
// 총 스코어에 맞춰서 값이 맞는지 검증
// 주어진 값을 16번 해결하면 나머지 값이 결정날거고
// 한문제가 아니라 함수 네개 다섯개

const KDT = (total) => {
  const three = (x) => { // 3점슛
    return x*3
  }
  const two = (x) => { // 2점슛
    return x*2
  }
  const jayu = (x) => { // 자유투
    1*2*x
    return {9, 18, ...}
  }
}
```

