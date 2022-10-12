# 리액트 네이티브

## 리액트 네이티브

### 작동원리

- JavaScriptCore라는 자바스크립트 엔진이 탑재되어 있으며, 이 엔진을 통해 자바스크립트 코드를 앱 내에서 실행
- 페이스북이 개발한 JSX라는 문법으로 .js 파일에 코드를 작성. 리액트 네이티브로 만들어서 빌드한 앱에는 스레드가 내장되어 있음. 여기서 코드를 인식해 어떤 네이티브 컴포넌트가 필요한지 연산한 다음 화면에 출력

### 구조

- index.js 파일 : 프로젝트의 엔트리 파일 (웹으로 치면 index.html). 여기서 import 구문으로 코드를 호출하여 앱을 번들링 함
- android, ios 디렉터리 : 네이티브 프로젝트 디렉터리. 안드로이드 스튜디오나 Xcode로 열 수 있음

## 컴포넌트

### 컴포넌트

- 컴포넌트 : 웹으로 치면 태그에 해당하는 개념
- 빌트인 컴포넌트
    - View : 가장 기본적인 컴포넌트. 레이아웃 및 스타일을 넣는 용도
    - Text : 텍스트를 넣는 용도
- 사용자 정의 컴포넌트 : 컴포넌트를 조합해서 하나의 컴포넌트를 만들 수 있음

### 사용자 정의 컴포넌트

1. ‘컴포넌트 이름.js’ 파일을 생성한다
2. import React from ‘react’ : 리액트를 호출하는 코드. 컴포넌트에는 반드시 이 코드가 포함되어야 함
3. import {컴포넌트 1, 컴포넌트 2 …} from ‘react-native’ : 사용할 컴포넌트들을 호출
4. 함수를 선언해서 JSX 코드를 반환
5. export default 컴포넌트 이름’ : 컴포넌트를 내보내는 코드

### Props

- properties의 줄임말로 컴포넌트의 속성을 의미
- JSX 내부에서 렌더링
1. 컴포넌트 함수의 매개변수로 props를 입력
2. 원하는 위치에 {props.이름}을 입력
- 컴포넌트를 사용할 때 값 지정
1. html 태그에 속성을 넣는 것처럼 속성=”값”의 형태로 입력

### defaultProps

- 컴포넌트에 Props를 지정하지 않았을 때 사용할 기본값을 설정하려면 defaultProps를 사용

### JSX

- HTML과 달리 스스로 닫는(Self-Closing) 태그를 반드시 사용해야 한다
- 컴포넌트 함수에서 JSX를 반환할 때는 반드시 최상위에 하나의 태그만 있어야 한다 (최상위에 있는 태그는 형제태그를 가질 수 없다)
- JSX Fragment: DOM에 별도의 노드를 추가하지 않고 빈 꺽쇠를 입력해서 여러 자식태그를 그룹화할 수 있다
- JSX 중간에 중괄호로 자바스크립트 표현식을 넣을 수 있다

### StyleSheet

- CSS와의 주요 차이점
    - 셀렉터라는 개념이 존재하지 않음
    - 모든 스타일 속성은 camelCase로 작성해야 한다
    - display 속성은 기본적으로 flex이며, 다른 값은 none 밖에 없음
    - flexDirection 속성의 기본값이 column이다
    - 숫자 단위는 dp뿐이다
    - background, border 단축속성이 없으므로 따로따로 설정해야 한다
- 사용법
    - react-native 모듈에서 StyleSheet 컴포넌트를 호출
    - StyleSheet.create 함수를 선언하고 그 안에 작성

### Props 객체 구조 분해 할당
```javascript
const object = {
a: 1,
b: 2,
c: 3
};
const {a, b, c} = object;
```
### useState Hook으로 상태 관리하기

- Hooks
    - 리액트에는 use로 시작하는 빌트인 함수가 많은데 이 함수들을 Hook이라고 부른다
    - 상태관리 뿐만아니라 다양한 기능이 있다
- 사용자와의 상호작용으로 UI를 변화시키려면 상태를 기준으로 해야 한다
    - 상태를 관리하는 방법은 useState 함수를 사용하는 것이다
    - useState는 불리언을 비롯하여 숫자, 객체, 배열 등 형태로 상태를 정의할 수 있다
- 상태관리 예시
    - Button 컴포넌트를 불러와서 on off 기능을 구현
    - 조건부 렌더링 기능: 특정 조건에 따라 다른 결과물을 보여주는 것
    - 변수와 증감연산자를 사용해서 카운터 구현하기

## 내비게이션

### 네이티브 스택 내비게이터

- 메인 화면의 버튼으로 화면을 전환하는 내비게이션
- 설치: @react-navigation/native-stack
- react-navigation이 의존하는 라이브러리: 네이티브 스택 뿐만 아니라 다른 것들도 공통임
    - react-native-screens
    - react-native-safe-area-context

### 그 외 내비게이터 종류

- 드로어 내비게이터: @react-navigation/drawer
    - 드로어 내비게이션이 의존하는 라이브러리: react-native-gesture-handler, react-native-reanimated
- 하단 탭 내비게이터: @react-navigation/bottom-tabs
    - 탭 아이콘 라이브러리: react-native-vector-icons
    - 아이콘 목록: https://fonts.google.com/icons?authuser=0
- 상단 탭 내비게이터

### 내비게이션 Hooks

- useNavigation: Screen으로 사용되고 있지 않은 컴포넌트에서도 navigation 객체를 사용할 수 있게 하는 함수
- useRoute: Screen으로 사용되고 있지 않은 컴포넌트에서도 route 객체를 사용할 수 있게 하는 함수
- useFocusEffect: useFocusEffect는 화면에 포커스가 잡혔을 때 특정 작업을 할 수 있게 하는 함수
    - 예를 들어 HomeScreen에서 DetailScreen을 띄운다면 HomeScreen이 화면에서 사라지는 게 아니라, HomeScreen 위에 DetailScreen을 쌓아서 보여주는 것이다