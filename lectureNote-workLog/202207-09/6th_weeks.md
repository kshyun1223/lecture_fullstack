# 6주차 주간요약

## 수업내용

### 선언형 코드 vs. 명령형 코드
- 선언형 코드
  - 선언형으로 코딩을 할 때는 생산성이 중요하다
  - 하지만 그렇기 때문에 검색으로 얻을 수 있는 자바스크립트 코드는 대부분 메서드 위주로 편하게 작성했는 단점이 있다
- 명령형 코드
  - 명령형으로 코딩을 할 때는 원리에 대한 이해가 중요하다
  - 알고리즘을 제대로 파악해야 할 때는 딥다이브 교재를 활용 

### 자바스크립트
- DOM API가 모두 배열 기반이기 때문에 자바스크립트는 배열 전용 메소드를 충실하게 지원한다
  - 이것들을 언제든지 꺼내 쓸 수 있는 상태가 되는 것이 자바스크립트 유저가 되는 시작점이다
  - 배열 전용 메서드들은 콜백함수의 원리로 작동한다
- 그 외 키워드: 객체의 구조, 콜백함수, 리턴, 원형(polyfill)

### 함수 종류
- 작성법으로 구분
  - 이름이 있는 기명함수
  - 이름이 없는 익명함수
  - 화살표(=>)로 선언하는 화살표함수

- 함수 리터럴(함수 표현식; function expression)
  - 형태: `let a = function() {};`
  - 익명함수(anonymous function)인데 마치 기명함수처럼 사용할 수 있다

- 작성 위치로 구분
  - 매개변수 자리에 함수가 있다면 콜백함수라고 부른다
  - 함수 안에 다른 함수가 호출되는 경우 고차함수라고 부른다

- 콜백함수
  - 형태: `addElementListner(“문자열”, 함수)`
  - 함수의 매개변수에 함수가 들어가는 경우 콜백함수라고 일컫는다
    - 함수의 매개변수 자리에는 무엇이든 들어올 수 있다

### 객체지향 프로그래밍
- 객체로 모든 것을 묶어서 관리하는 방식(wrapping)
- 자바는 이 방식만을 지원하기 때문에 자바의 영향으로 한국에서 압도적으로 많이 사용된다
- 코딩 잘 하는 사람, 클린코드를 잘 쓰는 사람은 객체를 잘 사용한다
  - 물론 함수로도 얼마든지 할 수 있다. 그러면 함수지향 프로그래밍이 된다.
- 분류 형식의 객체는 이름이 다소 길더라도 의미를 명확하게 나타내는 것이 중요하다
- 객체 === 배열
  - 객체: 이름이 있는 목록
  - 배열: 순서가 있는 목록
  - 배열은 객체의 ‘하위 타입’이라고 한다.
- 실무에서 서비스를 만들 때는 A to Z가 아니라 H to Z 정도를 하게 된다
  - A부터 H까지는 이미 다 만들어진 상태

### this키워드
- 매번 반복설명하는 것을 편리하게 지정할 수 있게 해줌
- 콘솔에 출력해서 무슨 값이 나오는지만 확인하면 간단하게 해결된다
- 객체와 this를 함께 사용했을 때의 시너지 효과를 생각해보자

### 객체
- C에서 C++이 파생된 이유가 객체를 추가하기 위해서였다
- 객체의 키와 값을 직접 작성하는 것을 객체 리터럴 정적 할당(object literal static assignment) 방식이라고 한다
- 구조화 할당(structuring assignment): 건물을 짓듯이 먼저 설계를 해놓고 시공하겠다
- 비구조화 할당(destructuring assignment)
- 다양한 객체 리터럴을 접해보면 다른 사람이 작성한 코드도 잘 읽을 수 있다

### 변수
- 변수는 수명(lifecycle)이 있다: 임의로 바꿀 수도 있을 것이다
- 전역변수(const): 어디서든지 사용할 것들은 전역변수로 작성한다
  - 수명이 무한대이다
  - 식별자는 전역변수다
- 지역변수(let): 변해야 하는 것들은 지역변수로 작성한다
- 필요할때만 작동하는 변수를 만들고싶다면 중괄호 사이에 있어야 한다
  - 반복문의 i는 지역변수다, 매개변수도 지역변수다
- var: **재선언은 나쁜 것**이다. var의 유일한 존재 의의는 레거시코드의 유지보수 뿐이다.

### 자바스크립트의 단점: 선언이 많다
- const 사용 권장 -> 강력하게 사고 예방 가능
  - referenceError
  - typeError
  - syntaxError
- 불변성(immutable): const 상수 선언은 불변하기 때문에 안정적이다 (vs. 가변성; immutable)
  - 불변성 때문에 개발자들은 주로 함수형을 선호한다: 리액트가 객체에서 함수방식으로 전환했다
Const
  - 값은 변할 수 있어도 타입은 변하지 않는다: 애플리케이션 안정성 도모

### 객체
- 자료구조에서 객체는 언제든지 접근할 수 있는 경로(path)를 제공해준다
- ho.study[어쩌고]: 접근법; access; 접속
  - ho라는 객체를 만들 때 정적으로 값을 작성했다
  - ho라는 객체의 어떤 값을 동적으로 처리했다

### API
- https://developers.naver.com/main/
- API는 다른 사람이 만들어 놓은 객체이다
  - 공식 문서를 통해 원하는 정보를 빠르게 습득하는 능력이 중요하다
- 배열 메서드가 가장 중요함: ‘문자열 === 배열’이기 때문이다
  - 거기에 더해서 반복문, 조건문
- API를 사용해서 표현하면 프론트, 저장하면 백엔드
- 형태
  - HTML: XML 스타일로 데이터를 제공: container + item
  - JSON: js 객체 스타일로 데이터를 제공: 부모스코프 + 자식스코프
