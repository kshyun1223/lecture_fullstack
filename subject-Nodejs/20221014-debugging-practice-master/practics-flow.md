###### 1. npm init
  - 프로젝트 초기화

###### 2. 생성된 package.json활용
  - property 추가
    - "type":"module"
  - mjs, moduleJS방식으로 모듈 처리

###### 3. ./src 디렉토리 추가
###### 4. ./src/modules 디렉토리 추가
  - 부품이 될 함수를 모아두기 위한 디렉토리

###### 5. ./src/modules/areaOfCircle.js 파일 생성
  - 만들어질 모듈들을 활용(import)해 개발할 파일 생성

###### 6. ./src/modules/core-modules/calculrator.js 파일 생성
  - 재사용성을 고려할 export 셋업

###### 7. ./src/modules/core-modules/calculrator.js 메서드 개발
  - 간단한 사칙연산 제작
  - 일반 함수로 제작하면 하나의 묶음으로 처리하기 불편하기 때문에 4개의 메서드와 같이 여러개의 함수들을 하나의 추상화(abstract)로 진행
###### 8. ./src/modules/areaOfCircle.js 파일에 개발한 calculrator.js 데이터 import 진행 (파일간 연결)

###### 9. ./src/app.js 파일 생성
  - 원의 넓이 값 공식 찾아서 함수로 적용
  - app.js에는 원의 넓이를 구하는 함수형 모듈인 areaOfCircle.js 파일이 import됨 

###### 10. 어딘가에서 도출되거나 저장된 데이터를 가져오는 가정으로 변수 생성함
  - 함수활용

###### 11. app.js를 실행시켜보고 -> 디버거 정의 파일 launch.json 파일 생성
  - .vscode 숨김폴더가 생성되며 생성된 json 파일이 저장됨
  - package.json과 마찬가지로 필요한 만큼 '정의' 할 수 있음

  calculrator.js는 어느파일에도 '의존'하고 있지 않은 독립적인 파일이며 객체를 내보내기 처리 하였기에 언제든지 필요한 만큼 메서드를 추가할 수 있음

  areaOfCircle.js는 '한가지 기능'에 초점을 두어 제작한 파일이므로 함수를 내보내기 처리함 그 외에 '변형할 여지 없음' (변형한다면 새로운 파일로 작성하는 것이 빠름)
  areaOfCircle.js는 ../core-modules/calculrator.js 파일 '을' 의존하고 있으므로 core-modules/calculator.js 파일이 변경되면 에러가 발생됨

  마찬가지로
  entry point 파일인 app.js 파일은 원의 넓이를 구하는 areaOfCircle.js 를 '활용' 하고 있으므로 변경의 여지에 주의할 수 있음

  구조화 팁
  모듈중에 데이터를 추가할 여지가 있다면 객체로 추가가 편하게 진행되는 것이 매우 편리함
  모듈중에 변동의 여지가 없다면 함수형으로 모듈을 구성하는 경향 (불변하게 만들기 위함)

  