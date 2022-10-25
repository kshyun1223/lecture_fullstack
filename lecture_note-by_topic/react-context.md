# Context
## API
### React.createContext
```javaScript
const MyContext = React.createContext(defaultValue);
```
- context 객체를 생성해서 반환한다
- defaultValue 매개변수는 트리 안에서 적절한 Provider를 찾지 못했을 때만 사용된다

### Context.Provider
```javaScript
<MyContext.Provider value={/* 어떤 값 */}>
```
- value prop을 받아서 이 값을 하위에 있는 컴포넌트에게 전달한다
- Provider 하위에 또 다른 Provider를 배치하는 것도 가능하며, 이 경우 하위 Provider의 값이 우선시된다
- Provider 하위에서 context를 구독하는 모든 컴포넌트는 Provider의 value prop가 바뀔 때마다 다시 렌더링된다


### useContext
```javascript
const value = useContext(MyContext);
```
- context 객체를 받아서 그 context의 현재 값을 반환한다. 
- context의 현재 값은 트리 상위에서 가장 가까이에 있는 `<MyContext.Provider>`의 value prop에 따라 결정된다

