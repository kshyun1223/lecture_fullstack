# Nest.js
## 개요
### 정의
- Nest는 자바의 스프링, 파이썬의 장고와 마찬가지로 MVC 패턴을 구현할 수 있는 타입스크립트의 풀스택 프레임워크이다
- Model: 어플리케이션이 무엇을 할 것인지 정의하는 부분. DB와 연동하여 사용자가 입력한 데이터나 사용자에게 출력할 데이터를 다룬다.
- View: 사용자에게 시각적으로 보여주는 부분. UI.
- Controller: Model이 데이터를 어떻게 처리할지 알려주는 역할을 한다. 요청이 들어오면 우선 Model을 호출하기전에 적절히 가공을 하고 나서 모델을 호출한다. 그리고 Model이 처리를 완료하면 그 결과를 받아서 다시 View에게 전달한다.

### 기본 구조
- eslintrc.js, prettierrc.js : 코드 포맷팅 관련 라이브러리
- nest-cli.json : Nest 프로젝트 설정 파일
- tsconfig.json, tsconfig.build.json : 컴파일 관련 설정 파일
- src 폴더 : 대부분의 비즈니스 로직이 들어있는 폴더
  - main.ts : 엔트리 파일
  - app.module.ts : 앱 모듈을 정의하는 파일

## 모듈
### 개요
- 기능과 역할을 분리 하면서 컨트롤러와 서비스의 생명주기를 관리하고 필요한 정보를 제공한다
- 기존에 프로젝트를 생성하면 루트 모듈만이 존재한다
- 추가 모듈 생성: `nest g module <모듈명>`

### 구조
- 생성된 모듈에 controller, service, entity, repository 등의 요소를 넣어주면 된다
- controller : 들어오는 요청을 수신하고 응답을 반환한다 (라우터의 모음?)
  - handler : 컨트롤러 모듈 안에 들어있는 각각의 라우터
- service : 
- entity : 
- repository : 