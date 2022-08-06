﻿# HTML CSS
### 루트요소(root element)
`<html>` 엘리먼트는 HTML 문서의 루트(최상단 요소)를 나타내며, "루트 요소"라고도 한다. 모든 다른 엘리먼트는 `<html>` 요소의 자식이어야 한다.
  
### 웹표준
신기술이 나오거나 특이사항이 있을 경우 태그의 호환성에 문제가 있을 수 있다. 개발사는 이를 해결하는 패치를 해야 한다
  
### 재할당(re assignment)
자식태그에 별도의 속성을 지정하면 부모 태그의 속성이 상속되지 않는다
  
### 반응형 웹
웹사이트 하나가 모든 디바이스를 대응하는 방식
  
### 적응형 웹
다양한 기기에 대응하여 각기 다른 웹사이트를 송출해주는 방식 
  
### SEO(Search engine optimization)
  
### Viewport
현재 화면에 보여지고 있는 영역(vw: view width, vh: view height)

### Semantic Tag
시맨틱 태그는 요소의 절차적인 작동보다는 추상적인 의미를 나타내는 목적으로 만들어졌다. 코드가 짧아지기 때문에 모바일 환경에 더 잘 대응할 수 있으며, 검색엔진에 더 많은 정보를 전달므로 SEO에 용이하다.

### `<nav>` 태그
다른 페이지 또는 현재 페이지의 다른 부분과 연결되는 네비게이션 링크(navigation links)들의 집합을 정의할 때 사용. 예시로는 메뉴, 목차, 인덱스 등이 있음. 

### Mobile First 
PC버전보다 모바일버전을 보다 중요시해야 한다는 웹디자인의 원칙

### 축(Axis)
웹 브라우저의 영점(0, 0) 좌표는 브라우저 좌측 최상단에 있다. 따라서 y 축 값은 항상 마이너스라고 할 수 있다. 그리고 렌더링은 “좌표를 결정하는 행위.”라고 할 수 있다.

### SASS(Syntactically Awesome Style Sheets) & SCSS(Sassy CSS)
CSS로 컴파일되는 스크립트 언어이다. CSS는 불필요한 선택자(Selector)가 존재하고, 연산 기능에 한계가 있으며, 구문(Statement)이 없다는 문제점이 있고, SASS와 SCSS는 이를 해결하기 위해 고안되었다. SCSS가 SASS보다 최신의 기술이며 구문적으로 좀더 세련된 모습을 가지고 있다.

### 선택자
- 자식선택자: 부모 기준으로 바로 아래 자식’만’ 선택. 손자뻘은 선택하지 않는다. (예시: `main > section`)
- 자손선택자: 시조 기준으로 모든 자손을 선택 (예시: `main section`)
- `*` (애스터리스크; Asterisk) 선택자: 모든 하위요소를 선택한다

### CSS의 기본 속성
- {height: 높이}
- {width: 너비}
- {padding: 두께}
  - 내용과 테두리 사이의 간격
- {margin: 두께}
  - 테두리와 다른 테두리 사이의 간격

### 웹문서 구축 작업 순서
1. 명세를 충실하게 작성한다
2. 파악된 명세를 바탕으로 파일 트리를 생성한다
   - 프론트엔드 작업은 보통 CSS, img, js 폴더와 index.html 파일로 시작한다
3. HTML로 문서의 정보적인 뼈대를 잡는다
4. CSS 레이아웃 속성으로 문서의 시각적인 틀을 잡는다
5. CSS 스타일링 속성으로 시각적인 세부 요소들을 구현한다
6. 직접 브라우저에서 실행해보면서 기획한 요소들이 빠짐없이 구현되었는지 검사한다

### 상속
- 부모 태그로부터 상속을 받는 속성: font-size, color 등 텍스트와 관련된 속성
- 부모 태그로부터 상속을 받지 않는 속성: margin, padding, border 등 레이아웃을 정의하는 속성
- inherit 값: 본래 상속을 받지 않는 속성이라도 임의의 값 대신 inherit이라는 명령어를 값으로 입력하면 부모태그의 해당 속성을 상속받을 수 있다

### Flexbox(Flexible box layout module)
- justify-content: 좌우 정렬
    - flex-start: 요소들을 컨테이너의 왼쪽으로 정렬
    - flex-end: 요소들을 컨테이너의 오른쪽으로 정렬
    - center: 요소들을 컨테이너의 가운데로 정렬
    - space-between: 요소들 사이에 동일한 간격
    - space-around: 요소들 주위에 동일한 간격
- align-items: 상하 정렬
    - flex-start: 요소들을 컨테이너의 꼭대기로 정렬
    - flex-end: 요소들을 컨테이너의 바닥으로 정렬
    - center: 요소들을 컨테이너의 세로선 상의 가운데로 정렬
    - baseline: 요소들을 컨테이너의 시작 위치에 정렬
    - stretch: 요소들을 컨테이너에 맞도록 늘림
- align-self: 개별 요소에 적용할 수 있는 또 다른 속성. 이 속성은 align-items가 사용하는 값들을 인자로 받으며, 그 값들은 지정한 요소에만 적용됨
- flex-direction: 순서 정렬
    - row: 요소들을 텍스트의 방향과 동일하게 정렬
    - row-reverse: 요소들을 텍스트의 반대 방향으로 정렬
    - column: 요소들을 위에서 아래로 정렬
    - column-reverse: 요소들을 아래에서 위로 정렬
- flex-wrap
    - nowrap: 모든 요소들을 한 줄에 정렬
    - wrap: 요소들을 여러 줄에 걸쳐 정렬
    - wrap-reverse: 요소들을 여러 줄에 걸쳐 반대로 정렬
- flex-flow
    - flex-direction 속성과 flex-wrap 속성의 값을 한 번에 받는다
- align-content 속성
    - flex-start: 여러 줄들을 컨테이너의 꼭대기에 정렬
    - flex-end: 여러 줄들을 컨테이너의 바닥에 정렬
    - center: 여러 줄을 세로선 상의 가운데에 정렬합니다.
    - space-between: 여러 줄 사이에 동일한 간격
    - space-around: 여러 줄 주위에 동일한 간격
    - stretch값: 여러 줄들을 컨테이너에 맞도록 늘림

### position
- static: position 속성은 값을 임의로 지정하지 않으면 static이라는 user agent(기본값)이 주어진다. 요소를 일반적인 문서 흐름에 따라 배치한다.
- absolute: 요소를 일반적인 문서 흐름에 따르지 않고 가장 가까운 조상 요소를 따르게 한다
    - 형제관계를 무시한다: 겹치는 것이 가능하다 -> 나중에 작성된 요소가 위로 가는 성향
    - 하위속성인 z-index 속성으로 z축 값을 지정할 수 있다
- relative: 요소를 일반적인 문서 흐름에 따라 배치하고, 자기 자신을 기준으로 top, right, bottom, left의 값을 따르게 한다
    - 형제관계에 영향을 받는다
    - 직접지정이기 때문에 하위속성을 제어할 수 있다
        - 가상선택자 -> :not(), :hover() 등…
- fixed: 요소를 일반적인 문서 흐름에 따르지 않고 초기 컨테이닝 블록을 기준으로 배치한다 (무조건 브라우저 기준)
- sticky: 원래 자리에 있을 때는 relative로 작동하지만, 사용자가 스크롤을 움직여서 화면 밖으로 밀려나면 fixed로 바뀐다

### Grid(CSS grid layout)
- 종류
    - grid-template-rows: 행(가로)의 배치
    - grid-template-column: 열(세로)의 배치
- 반복
    - grid-template-속성: repeat(반복횟수, 단위);

### 미디어쿼리
```css
@media (min-width or max-width) {
  #root {
    속성:값;
    속성:값;
    속성:값;
  }
}
```

### HTML 파일에 외부 스타일시트를 호출하는 방법
- `<link href="FileName.css" rel="stylesheet">`