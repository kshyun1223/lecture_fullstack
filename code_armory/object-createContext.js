import React, { useContext, createContext} from 'react';

// console.log(createContext()) // 괄호 안 붙이면 그냥 function 이라고만 나옴

<ref *1> { // 순환 참조를 표시하기 위한 참조 인덱스
  '$$typeof': Symbol(React.context),
  _currentValue: undefined,
  _currentValue2: undefined,
  _threadCount: 0,
  Provider: { '$$typeof': Symbol(React.provider), _context: [Circular *1] }, 
  Consumer: { '$$typeof': Symbol(React.context), _context: [Circular *1] },
  // Circular: 어떤 객체가 참조되고 있는지 나타내는 숫자이다
  _defaultValue: null,
  _globalName: null,
  _currentRenderer: null,
  _currentRenderer2: null
}

/*
# '$$typeof': Symbol(react.context)
- 리액트는 XSS 공격에 대비하기 위해 모든 React element에 Symbol 태그를 단다
- JSON에는 Symbol를 넣을 수 없다. 즉, 설사 서버에 보안 구멍이 생겨 텍스트 대신 JSON을 반환한다 하더라도, 그 JSON에는 Symbol.for('react.element') 코드를 포함시킬 수 없다. 리액트는 element.$$typeof 를 체크하여, 해당 키가 없거나 무효하면 React element 생성을 거부한다.
*/