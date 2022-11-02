function createContext(defaultValue) {
    var context = {
      $$typeof: REACT_CONTEXT_TYPE,
      
      // Secondary renderers store their context values on separate fields.
      // 보조 렌더러는 컨텍스트 값을 별도의 필드에 저장합니다.
      _currentValue: defaultValue,
      _currentValue2: defaultValue,

      // Used to track how many concurrent renderers this context currently supports within in a single renderer.
      // 이 컨텍스트가 현재 지원하는 단일 렌더러 가운데서 현재 얼마나 많은 렌더러가 있는지 추적하는데 사용됩니다.
      // Such as parallel server rendering.
      // 병렬 서버 렌더링과 같은 것입니다. 
      _threadCount: 0,

      // These are circular.
      // 이것들은 순환참조입니다.
      Provider: null,
      Consumer: null,

      // Add these to use same hidden class in VM as ServerContext.
      // ServerContext로서 VM에서 동일한 숨김 클래스를 사용하려면 이것들을 추가합니다
      _defaultValue: null,
      _globalName: null
    };
    context.Provider = {
      $$typeof: REACT_PROVIDER_TYPE,
      _context: context
    };
    var hasWarnedAboutUsingNestedContextConsumers = false;
    var hasWarnedAboutUsingConsumerProvider = false;
    var hasWarnedAboutDisplayNameOnConsumer = false;
    {
      // A separate object, but proxies back to the original context object for backwards compatibility.
      // 개별 개체이지만 이전 버전과의 호환성을 위해 원래 컨텍스트 개체로 다시 프록시합니다.

      // It has a different $$typeof, so we can properly warn for the incorrect usage of Context as a Consumer.
      // 다른 $$typeof가 있기 때문에 컨슈머로서의 컨텍스트를 잘못 사용할 경우 적절히 경고할 수 있습니다.
      var Consumer = {
        $$typeof: REACT_CONTEXT_TYPE,
        _context: context
      }; 
      // $FlowFixMe: Flow complains about not setting a value, which is intentional here.
      // Flow는 값을 설정하지 않은 것을 지적합니다. 이것은 의도 된 것입니다.
  
      Object.defineProperties(Consumer,
  {
        Provider: {
          get: function () {
            if (!hasWarnedAboutUsingConsumerProvider) {
              hasWarnedAboutUsingConsumerProvider = true;
              error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
            }
            return context.Provider;
          },
          set: function (_Provider) {
            context.Provider = _Provider;
          }
        },
        _currentValue: {
          get: function () {
            return context._currentValue;
          },
          set: function (_currentValue)
  {
            context._currentValue = _currentValue;
          }
        },
        _currentValue2: {
          get: function () {
            return context._currentValue2;
          },
          set: function (_currentValue2) {
            context._currentValue2 = _currentValue2;
          }
        },
        _threadCount: {
          get: function () {
            return context._threadCount;},
          set: function (_threadCount) {context._threadCount = _threadCount;
          }
        },
        Consumer: {
          get: function () {
            if (!hasWarnedAboutUsingNestedContextConsumers) {
              hasWarnedAboutUsingNestedContextConsumers = true;
              error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to rn ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
            }
            return context.Consumer;
          }
        },
        displayName: {
          get: function () {
            return context.displayName;
          },
          set: function (displayName) {
            if (!hasWarnedAboutDisplayNameOnConsumer) {
              warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayN it directly on the context with Context.displayName = '%s'.", displayName);
              hasWarnedAboutDisplayNameOnConsumer = true;
            }
          }
        }
      }); 
      // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty fineProperty.
      // Flow는 defineProperty와 fineProperty를 이해하지 못하기 때문에 누락된 속성에 대해 지적합니다.
      

      context.Consumer = Consumer;
    }
    {
      context._currentRenderer = null;
      context._currentRenderer2 = null;
    }
    return context;
  }