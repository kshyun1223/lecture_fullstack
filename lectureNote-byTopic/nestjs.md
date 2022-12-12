# Nest.js
## 개요
### 기본 구조
- eslintrc.js, prettierrc.js : 코드 포맷팅 관련 라이브러리
- nest-cli.json : nest 프로젝트 설정 파일
- tsconfig.json, tsconfig.build.json : 컴파일 관련 설정 파일
- src 폴더 : 대부분의 비즈니스 로직이 들어있는 폴더
  - main.ts : 엔트리 파일
  - app.module.ts : 앱 모듈을 정의하는 파일

## 모듈
### 생성
- 생성 방법: `nest g module <모듈명>`
- nest.js의 모듈은 데코레이터가 달린 클래스 형태이다
- 각 어플리케이션에는 하나 이상의 루트 모듈이 있다

### 구조
- 생성된 모듈에 controller, service, entity, repository 등의 요소를 넣어주면 된다
- controller : 들어오는 요청을 수신하고 응답을 반환한다
  - handler : 컨트롤러 모듈 안에 들어있는 각각의 라우터
- service : 
- entity : 
- repository : 