# React Native CLI 개발환경 구축 방법


### 1. ‘안드로이드 스튜디오’ 및 ‘자바 디벨로퍼 킷’ 설치



- 공통사항
    - 구글 검색해서 공식 웹 페이지에서 다운로드 받는다 (GUI 방식)
    - C드라이브에 설치한다(설치경로를 임의 지정하지 않고 기본값으로 두면 될 것으로 추정)
- 개별사항
    - 안드로이드 스튜디오는 최신 버전으로 설치
    - 자바 디벨로퍼 킷은 17 버전으로 설치


### 2. 환경변수 -> 시스템 변수 -> 새로 만들기



- ANDROID_HOME
    - C:\Users\Administrator\AppData\Local\Android\Sdk
- CLASSPATH
    - %JAVA_HOME%\lib
- JAVA_HOME
    - C:\Program Files\Java\jdk-17.0.4.1
- Path
    - %JAVA_HOME%\bin

(※ 위 항목을 제외하고 ‘자바’나 ‘안드로이드’라는 문구가 들어간 변수는 모두 찾아서 삭제한다)


### 3. VSCODE로 원하는 경로의 상위 폴더 열기
- 자바스크립트: `npx react-native init 프로젝트 이름`
- 타입스크립트: `npx react-native init 프로젝트 이름`
- => 처리가 정상적으로 완료되면 VSCODE 종료

### 4. 안드로이드 스튜디오에서 가상 디바이스 만들기



- 안드로이드 스튜디오 실행하고 앞서 생성된 프로젝트 폴더 열기
- Device Manager -> Create device -> 디바이스 선택 -> 시스템 이미지 선택 -> Finish
    - 이 부분은 단순 시험 구동을 위해서는 아무거나 선택해도 되는듯
    - 나중에 실제 개발에서는 디바이스 종류도 감안해야 할 것으로 예상


### 5. 안드로이드 스튜디오에서 생성된 디바이스 실행



- 디바이스 목록의 재생버튼 같이 생긴 삼각형 아이콘 클릭
- 이 부분은 최초 한번만 필요한 것으로 추정. 재실행시 생략해도 문제 없는 것 확인. 


### 6. VSCODE로 프로젝트 폴더 열기
- 콘솔에서 { npm run android } 명령어 입력


### 참고사항
- npm run android -> 안드로이드 에뮬레이터 시작
- npm run ios -> ios 에뮬레이터 시작
- npm start -> Metro 시작
    - Metro는 리액트 네이티브를 위한 자바스크립트 번들러
    - 프로젝트에 사용된 자바스크립트 파일들을 모두 읽어서 올바른 순서의 하나의 파일로 합쳐주고 네이티브 앱에서 실행할 준비를 하는 역할
    - 에뮬레이터를 구동하면 자동으로 실행되기 때문에 직접 실행하는 일은 드물다

### 최초 생성된 컴퓨터가 아닌 다른 컴퓨터에서 원격 저장소(깃허브)의 프로젝트 실행하는 방법
- VSCODE로 원하는 경로의 상위 폴더 열기
- 콘솔에서 `git clone 리포지토리 주소` 입력
- 콘솔에서 `npm run android` 입력

### 플러그인이 제대로 등록되지 않은 경우
1. babel.config.js 파일에 플러그인 등록
```json
// (예시)
"module.exports" = {
  "presets": [
    "..."
  ],
  "plugins": [
    "...",
    "react-native-reanimated/plugin",
  ],
};
```
2. 터미널에 npm start -- --reset-cache 입력

### RNSScreen was not found in the UIManager
- 라이브러리가 불완전하게 설치되었으므로 다시 설치
 
### Task :app:installDebug FAILED
- 안드로이드 스튜디오에서 에뮬레이터(가상 스마트폰)를 포맷
    - -> 더보기(점 세개) 클릭하고 Wipe Data

### tried to register two views with the same name rncsafeareaview
- 콘솔창에 npm dedupe 입력
