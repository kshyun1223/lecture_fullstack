## 주요 명령어
### 단계
1. npm install -y
2. npm install --save-dev webpack
3. npm install --save-dev webpack-cli
4. npm webpack -v : 버전확인

> - 2번, 3번 단계에서 webpack 모듈 두개를 모두 빌드방식으로 개발환경을 설정했으므로, 실행하려면 해당 로컬 디렉토리 명령줄에서 실행
> - 로컬, npm(package.json)에 종속되므로 npm 이라는 명령을 먼저 작성해야 함
> - 버전체크가 안된다면 전 단계 점검

5. webpack.onfigjs 파일 생성 config, 즉 webpack이 구동되는 기준점이 되는 명세 데이터로 자바스크립트의 형태를 취하고'만' 있는점이 특징

## 세 개의 핵심 key
### mode
- 어떠한 형태로 번들링 할 것인지를 정하는 key로 총 세개만 존재한다.
- "development" : 개발방식(가독성은 매우 떨어지나, 일반적인 개발
코드처럼 보임)
- "production" : '제품' 형태. 즉, client에게 보낼 코드로 매개변수, 들여쓰기 등 모든 작업을 최소화 시킨다. 
  - 최소화: uglify 혹은 난독화라고도 부른다. 
  - 개발코드를 최소화시키므로, 여기에서 요소되는 데이터 용량도 최소화 시킬 수 있다. `.min.file`이라고 붙어있는 것이 이에 해당한다.
  - 클라이언트는 코드를 확인 할 필요가 없으므로 개발가독성에 대한 고려가 굳이 필요없는 것이 주요 관점
- "none" : 단순 번들링만 진행된다.

### entry
- 직역하였을 때 '진입'에 해당하며, webpack SW가 번들링할 기준이 될 '메인'파일을 설정하는 자리이다.
- `./src/index.js` 라고 값(value)을 작성하면, 해당 index.js 기준으로 모든 의존관계를 끌어모아 번들링 하겠다는 뜻이 된다.

### output
- 번들링이 완료될 js파일을 말 그대로 출력하는 지정값. 기본적으로 두개의 하위 객체가 필요하다.
- -- path : 어디에 번들링 파일을 저장할 것인지 정해준다.
  - 보통 distribute의 준말로, dist라는 디렉토리에 저장하는 것이 오랜 관습이다.
  - 경로를 판단하기 위해 path 모듈을 불러와 사용하는데, path 모듈이 지원하는 resolve()메서드를 통해 절대경로 방식으로 dist 디렉토리를 지정하는 편이다.상대개념으로 join() 메서드가 있다.
- fileName 파일이름을 무엇으로 정할 것인지 지정해주는 키이며, 관습적으로는 file.bundle.js 혹은 배포용일 경우, file.min.js 과 같은 이름으로 빌드버전과 배포버전을 구분하는 방식을 채택한다.

## 서비스 배포 과정
1. DB
2. build
3. bundler
4. distribute (dist)

- 대규모 의존이 필요한 프로젝트의 경우 build와 distrubute 사이에 통신불량이 일어난다
  - 이를 해결하기 위해 그 사이에 bundler가 들어간다
  - 번들러의 역할 중 하나가 Automation이다

- build 단계에서 중요한 개념
  - React, Server, SCSS, TypeScript
  - package.json으로 설정을 하고 이걸 가지고 build를 한다
  - 여기서 스택을 결정하고 잘 작동하는지 검증하는 것이 1차 단계
    - 기획과 잘 맞는지 확인한다
  - 스택이 결정된 이후에는 변동사항이 없다
    - Docker로 이미지를 저장해서 재사용한다
    - 스택 결정 = 명세를 작성한다

- build가 완료되면 거기서 기능을 덧붙이고 다시 검증하는 과정을 반복하는 게 개발이다

- 배포
```
webpack
├─ts
├─tsx
├─babel
└─css
```