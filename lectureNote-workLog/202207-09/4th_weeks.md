# 4주차 주간요약

## 수업내용

### 퍼블리싱 작업

- 먼저 큰 틀을 잡아놓고 세부적인 내용을 만들어가야 한다
- 이론적으로는 배워서 아는 내용인데도 실제로 하려고 하면 안 된다 -> 많은 연습으로 습관을 들여야 한다

### 협업

- 동료가 당연히 모를 것이라는 가정을 기본으로 하고, 여차하면 가르칠 각오도 해야 한다
- 무엇보다도 기록이 가장 중요하다
- 현업에서도 기술면접 외에 별도로 인사면접을 보기도 한다 -> 사회성
    - IT업계에서 말하는 사회성은 다른 기성 산업에서 말하는 사내정치나 부조리를 견디는 능력 같은 것이 아니라 협업을 잘 하는 것이다 (예시: 클린코드, 주석)

### 프로그래머

- 프로그래머는 연구직이다
- 개발자 수요가 늘어나게 된 이유는 자동화 때문이다
- 장기적으로 살아남으려면 서비스를 이해하고 자동화 할 수 있어야 한다

### 프로그래밍

- 컴퓨터는 사칙연산 이외에는 아무것도 할 수 없다 -> 2진수의 원리로 작동하기 때문이다
- 프로그래밍은 인간의 논리를 컴퓨터에게 설명하는 것이다

### 버그 vs. 에러

- 버그: 설계 과정에서의 오류
- 에러: 시스템의 기능을 벗어나는 판단이 필요한 상태
- 좋은 언어일수록 에러가 많은 대신에 버그가 적다
    - 자바스크립트와 달리 타입스크립트는 정수 여부를 판별한다

### 프론트엔드 vs. 백엔드

- 프론트엔드는 변수의 값으로 태그를 다룬다
- 백엔드는 변수의 값으로 데이터베이스를 다룬다

### 정적 페이지 vs. 동적 페이지

- 정적 페이지: HTML과 CSS로만 작업한 것
- 동적 웹페이지: 프로그래밍 언어로 작업한 것
    - SSR(서버사이드 렌더링): Next.js
    - CSR(클라이언트 사이드 렌더링): React.js

### 객체

- 객체는 변수의 묶음이다
- HTML과 CSS는 별도의 무언가가 아니라 브라우저에 내장된 객체이다
- 배열도 일종의 변수이다: 단지 키가 숫자일 뿐이다
- 객체의 데이터타입을 검사해보면 배열로 뜬다
    - 객체는 자바스크립트 같은 고수준 언어에만 존재하는 개념이다
    - 하지만 배열은 모든 언어에 있다
    - 순서가 필요하면 배열을 사용하고 특정 키와 값을 매칭해야 하면 객체를 사용한다

### 메소드

- 자바스크립트에는 편의성 함수(메소드)가 상당수 내장되어 있다
- 자바스크립트의 장점이지만 다른 언어에서는 통용되지 않는다
- for문과 if문을 위주로 사용하여 자바스크립트로 C언어와 유사한 코딩을 할 수도 있다

### window 객체

- 브라우저의 최상위 디렉토리에 있는 객체이다
- BOM과 DOM은 window의 하위 객체이다
    - 브라우저 객체(BOM; Browser Object Model)
    - 문서 객체(DOM; Document Object Model)
    - 사실은 window.document 와 같은 형태여야 하지만 적을 때는 생략할 수 있게 기능이 지원되는 것이다
- window와 document라는 개념만 알면 나머지는 검색하는 것이 합리적이다
- 자바스크립트 학습이라는 관점에서는 BOM이나 DOM을 능숙하게 제어할 수 있다면 원하는만큼 커스텀할 수 있다

### API

- 쉽게 말해서 개발자를 위한 도구라고 할 수 있다
- 반대로 UI는 일반 사용자를 위한 도구이다
- API도 객체이다: 모든 개발사는 자체 API를 가지고 있다
    - 개발자 지망생이 넘쳐남에도 불구하고 현업에서 인력이 부족한 이유는 API를 이해하는 수준의 개발자가 드물기 때문이다

### 자바스크립트

- 자바스크립트 = ECMAScript + DOM + BOM
    - 자바스크립트에 내장되어 있지만 서로 별개의 개념이므로 혼동하면 안된다
- BOM과 DOM도 API다
    - HTML과 CSS는 문서와 스타일링에 관한 API이다

### 코딩컨벤션

- 널리 통용되는 스타일은 다음과 같다
- CSS: 케밥케이스 -> 단어 사이에 대쉬(`-`) 사용.
- Python: 스네이크 -> 단어 사이에 언더바(`_`) 사용.
- javaScript: 카멜케이스 -> 띄어쓰기 없이 두 번째 단어부터 첫 글자를 대문자로.

## 앞으로 해야 할 일

### 노트정리

- 이번주 주간요약 작성
- 이번주 필기노트 공유폴더에 제출
- 이번주 필기노트 마크다운으로 변환해서 깃허브에 커밋
- 주제별 정리 노트에 이번주 내용들 추가

### 학습자료

- 이번주 실습 파일들 정리해서 공유폴더에 제출
- 지금까지 놓친 학습자료 정리: 클래스룸, 강의 리포지토리
    - 킵에 목록 적어놓음

### 자바스크립트 이론

- 처음 만나는 자바스크립트 교재 줄 쳐가면서 꼼꼼하게 정독

### CSS 이론

- CSS 이론 복습 재정리

### 디자인

- 피그마 사용법 공부

### 생산성

- markup training 자료들 따로 폴더 만들어서 관리