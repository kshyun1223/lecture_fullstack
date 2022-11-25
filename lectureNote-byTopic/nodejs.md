# 1장 노드 시작하기


## 1.1 핵심 개념 이해하기


### 1.1.1 서버



* 노드는 자체적으로 서버 기능을 포함하고 있기 때문에 별도의 서버 프로그램을 사용하지 않아도 서버 역할을 수행할 수 있다.


### 1.1.2 자바스크립트 런타임



* 노드는 V8 엔진과 libuv라는 라이브러리로 이루어져 있다. V8과 libuv는 C와 C++로 구현된 것이다. 
* 자바스크립트로 코딩하면 노드가 알아서 V8과 libuv에 연결해주므로, 노드를 사용하기 위해 C와 C++를 알아야 하는 것은 아니다.


### 1.1.3 이벤트 기반



* 이벤트 기반(event-driven) : 노드는 이벤트 기반 방식으로 동작하므로, 이벤트가 발생하면 이벤트 리스너에 등록해둔 콜백 함수를 호출한다. 발생한 이벤트가 없거나 발생했던 이벤트를 다 처리하면 다음 이벤트가 발생할 때까지 대기한다.
    * 이벤트 리스너(event listener) : 이벤트 기반 시스템에서는 특정 이벤트가 발생할 때 무엇을 할지 미리 등록해두어야 한다. 이를 이벤트 리스너에 콜백 함수를 등록한다고 표현한다.
* 콜 스택(call stack) : 노드는 자바스크립트 코드를 맨 위부터 한 줄씩 실행하다가 함수 호출 부분을 만나면 호출한 함수를 콜 스택에 넣는다. 콜 스택은 스택(stack) 구조이므로 선입후출(FILO) 방식으로 작동한다.
    * 전역 컨텍스트(global context) : 콜 스택의 가장 앞에는 anonymous 함수가 들어있는데, 이는 전역 컨텍스트(global context)를 의미한다. 컨텍스트는 함수가 호출되었을 때 생성되는 환경이다. 자바스크립트 코드는 실행 시 기본적으로 전역 컨텍스트 안에서 돌아간다. 
* 백그라운드: setTimeout 같은 타이머나 이벤트 리스너들이 대기하는 곳이다. 여러 작업이 동시에 실행될 수 있다.
    * 태스크 큐: 이벤트 발생 후, 백그라운드에서는 태스크 큐로 타이머나 이벤트 리스너의 콜백 함수를 보낸다. 정해진 순서대로 콜백들이 줄을 서 있으므로 콜백 큐라고도 부른다. 콜백들은 보통 완료된 순서대로 줄을 서 있지만 특정한 경우에는 순서가 바뀌기도 한다.
* 이벤트 루프(event loop) : 이벤트 발생 시 호출할 콜백 함수들을 관리하고, 호출된 콜백 함수의 실행 순서를 결정하는 역할을 담당한다. 노드가 종료될 때까지 이벤트 처리를 위한 작업을 반복하므로 루프(loop)라고 부른다.
1. 전역 컨텍스트인 anonymous가 호출 스택에 들어간다. 
2. setTimeout이 호출 스택에 들어간다.
3. 호출 스택에 들어간 순서와 반대로 실행되므로 setTimeout이 먼저 실행된다.
4. setTimeout이 실행되면 타이머와 함께 run 콜백을 백그라운드로 보내고 setTimeout은 호출 스택에서 빠진다.
5. anonymous가 호출 스택에서 빠진다. 
6. 백그라운드에서는 3초를 센 뒤 run 함수를 태스크 큐로 보낸다. 


### 1.1.4 논 블로킹 I/O



* 논 블로킹 I/O: 노드는 I/O 작업을 백그라운드로 넘겨 동시에 처리한다. 따라서 동시에 처리될 수 있는 작업들은 최대한 묶어서 백그라운드로 넘겨야 시간을 절약할 수 있다.
* I/O: 입력(Input)/출력(Output)을 의미한다. 파일 시스템 접근이나 네트워크를 통한 요청 같은 작업이 해당된다. 
* 논 블로킹: 이전 작업이 완료될 때까지 대기하지 않고 다음 작업을 수행함을 뜻한다.
* 블로킹: 이전 작업이 끝나야만 다음 작업을 수행하는 것을 의미한다.


### 1.1.5 싱글 스레드



* 싱글 스레드: 노드를 실행하면 프로세스가 하나 생성되고 프로세스는 내부적으로 스레드를 여러 개 생성한다. 이 중에서 직접 제어할 수 있는 스레드는 하나뿐이다. 블로킹이 발생할 것 같은 경우에는 논 블로킹 방법으로 대기 시간을 최대한 줄인다.
* 프로세스: 운영체제에서 할당하는 작업의 단위이다. 노드나 웹 브라우저 같은 프로그램은 개별적인 프로세스이다. 프로세스 간에는 메모리 등의 자원을 공유하지 않는다.
* 스레드: 프로세스 내에서 실행되는 흐름의 단위이다. 프로세스는 스레드를 여러 개 생성해 여러 작업을 동시에 처리할 수 있다. 스레드들은 부모 프로세스의 자원을 공유한다. 같은 주소의 메모리에 접근 가능하므로 데이터를 공유할 수 있다.
* 멀티 스레딩
    * 하나의 프로세스 안에서 여러 개의 스레드 사용
    * CPU 작업이 많을 때 사용
    * 프로그래밍이 어려움
* 멀티 프로세싱
    * 여러 개의 프로세스 사용
    * I/O 요청이 많을 때 사용
    * 프로그래밍이 비교적 쉬움


### 1.2 노드의 장단점



* 노드의 장점
    * 멀티 스레드 방식에 비해 적은 컴퓨터 자원 사용
    * I/O 작업이 많은 서버로 적합
    * 멀티 스레드 방식보다 쉬움
    * 웹 서버가 내장되어 있음
    * 자바스크립트를 사용함
    * JSON 형식과 쉽게 호환됨
* 노드의 단점
    * 기본적으로 싱글 스레드라서 CPU 코어를 하나만 사용
    * CPU 작업이 많은 서버로는 부적합
    * 하나뿐인 스레드가 멈추지 않도록 관리가 필요함
    * 서버 규모가 커졌을 때 서버를 관리하기 어려움
    * 어중간한 성능


# 3장 노드 기능


## 3.4 노드 내장 객체


### 3.4.1 global



* 브라우저에서의 window와 같은 역할을 하는 전역 객체이다. 
* 전역 객체이므로 모든 파일에서 접근할 수 있다. 
* window 객체와 마찬가지로 global도 생략할 수 있다.


### 3.4.2 console



* console.time(레이블): console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정한다.
* console.log(내용): 평범한 로그를 콘솔에 표시한다. console.log(내용, 내용, …)처럼 여러 내용을 동시에 표시할 수도 있다.
* console.error(에러 내용): 에러를 콘솔에 표시한다.
* console.table(배열): 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현된다. 
* console.dir(객체, 옵션): 객체를 콘솔에 표시할 때 사용한다. 첫 번째 인수로 표시할 객체를 넣고, 두 번째 인수로 옵션을 넣는다. 옵션의 colors를 true로 하면 콘솔에 색이 추가되어 보기가 한결 편해진다. depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정한다. 기본값은 2이다.
* console.trace(레이블): 에러가 어디서 발생했는지 추적할 수 있게 한다.


### 3.4.3 타이머



* 타이머 기능을 제공하는 함수들은 노드에서는 window 대신 global 객체 안에 들어 있다.
* 타이머 함수들은 모두 아이디를 반환한다. 아이디를 사용하여 타이머를 취소할 수 있다.
* setTimeout(콜백 함수, 밀리초): 주어진 밀리초(1,000분의 1초) 이후에 콜백 함수를 실행한다.
    * clearTimeout(아이디): setTimeout을 취소한다.
* setInterval(콜백 함수, 밀리초): 주어진 밀리초마다 콜백 함수를 반복 실행한다.
    * clearInterval(아이디): setInterval을 취소한다.
* setImmediate(콜백 함수): 콜백 함수를 즉시 실행한다.
    * clearImmediate(아이디): setImmediate를 취소한다.


### 3.4.4 파일 경로 접근



* 파일명: 코드에 __filename 키워드를 넣어두면 실행 시 현재 파일명을 포함한 절대경로로 바뀐다
* 파일 경로: 코드에 __dirname 키워드를 넣어두면 실행 시 현재 파일명을 제외한 절대경로로 바뀐다


### 3.4.5 모듈



* 모듈을 내보낼 때는 module.exports 객체나 exports 객체를 사용한다
    * exports 객체는 module.exports 객체를 참조하므로, 한 모듈에서 두 객체를 동시에 사용하지 않는 것이 좋다
* 모듈을 불러올 때는 require 객체를 사용한다 
    * require.cache 객체는 한 번 require한 파일을 저장했다가 다음에 새로 불러오지 않고 재사용한다
    * require.main 객체는 노드 실행 시 첫 모듈을 가리킨다
* 순환참조: 두 모듈이 서로를 require 하는 것을 순환참조라고 한다. 이 경우 에러가 표시되지 않고 자동적으로 참조되는 대상이 빈 객체로 변경되므로 주의해야 한다.


### 3.4.6 process



* 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있다
    * process.version: 설치된 노드의 버전
    * process.arch: 프로세서 아키텍처 정보
    * process.platform: 운영체제 플랫폼 정보
    * process.pid: 현재 프로세스의 아이디 (프로세스를 여러 개 가질 때 구분할 수 있다)
    * process.uptime(): 프로세스가 시작된 후 흐른 시간(초)
    * process.exec: 노드의 경로
    * process.cwd(): 현재 프로세스가 실행되는 위치
    * process.cpuUsage(): 현재 cpu 사용량


### 3.4.6.1 process.env



* 콘솔에 process.env를 입력하면 환경변수가 출력된다
* 시스템 환경 변수 외에도 임의로 환경 변수를 저장할 수도 있다. 서버나 데이터베이스의 비밀번호나 각종 API 키와 같이 서비스의 중요한 키를 저장하는 공간으로도 사용할 수 있다. 


### 3.4.6.2 process.nextTick(콜백)



* 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선으로 처리하도록 만든다
* 마찬가지로 process.nextTick에서 resolve된 Promise도 다른 콜백들보다 먼저 실행된다 
* 그렇기 때문에 process.nextTick과 그 Promise를 마이크로태스크(microtask)라고 따로 구분지어 부른다


### 3.4.6.3 process.exit()



* 실행 중인 노드 프로세스를 종료한다


## 3.5 노드 내장 모듈


### 3.5.1 os 모듈



* os.arch(): process.arch와 동일
* os.platform(): process.platform과 동일
* os.type(): 운영체제의 종류
* os.uptime(): 운영체제 부팅 이후 흐른 시간(초)
* os.hostname(): 컴퓨터의 이름
* os.release(): 운영체제의 버전
* os.homedir(): 홈 디렉터리 경로
* os.tmpdir(): 임시 파일 저장 경로
* os.cpus(): 컴퓨터의 코어 정보
* os.freemem(): 사용 가능한 메모리(RAM)
* os.totalmem(): 전체 메모리 용량


### 3.5.2 path 모듈



* path.sep: 경로의 구분자
* path.delimiter: 환경 변수의 구분자
* path.dirname(경로): 파일이 위치한 폴더 경로
* path.extname(경로): 파일의 확장자
* path.basename(경로, 확장자): 파일의 이름(확장자 포함). 확장자를 제외한 이름만 표시하고 싶다면 basename의 두 번째 인수로 파일의 확장자를 넣으면 된다.
* path.parse(경로): 파일 경로를 root, dir, base, ext, name으로 분리한다
* path.format(객체): path.parse()한 객체를 파일 경로로 합친다
* path.normalize(경로): /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환한다
* path.isAbsolute(경로): 파일의 경로가 절대경로인지 상대경로인지를 true나 false로 알린다
* path.relative(기준경로, 비교경로): 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알린다
* path.join(경로, …): 여러 인수를 넣으면 하나의 경로로 합친다. 상대경로인 ..(부모 디렉터리)와 .(현 위치)도 자동으로 처리된다. /를 만나면 상대경로로 처리한다
* path.resolve(경로, …): path.join()과 비슷하지만 path.resolve는 절대경로로 인식해서 앞의 경로를 무시한다는 차이가 있다


### 3.5.3 url 모듈 - WHATWG 방식 (node.js 7에서 추가)



* url 모듈 안에 URL 생성자가 있어서, 이 생성자에 주소를 넣어 객체로 만들면 주소가 부분별로 정리된다

```javascript
new URL(): URL {
  href: 'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor',
  origin: 'http://www.gilbut.co.kr',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'www.gilbut.co.kr',
  hostname: 'www.gilbut.co.kr',
  port: '',
  pathname: '/book/bookList.aspx',
  search: '?sercate1=001001000',
  searchParams: URLSearchParams { 'sercate1' => '001001000' },
  hash: '#anchor'
}
url.format(): http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor
```


* search 부분을 searchParams라는 특수한 객체로 반환한다
    * getAll(키): 키에 해당하는 모든 값들을 가져온다
    * get(키): 키에 해당하는 첫 번째 값만 가져온다
    * has(키): 해당 키가 있는지 없는지를 검사한다
    * keys(): searchParams의 모든 키를 반복기(iterator)(ES2015 문법) 객체로 가져온다
    * values(): searchParams의 모든 값을 반복기 객체로 가져온다
    * append(키, 값): 해당 키를 추가한다. 같은 키의 값이 있다면 유지하고 하나 더 추가한다
    * set(키, 값): append와 비슷하지만, 같은 키의 값들을 모두 지우고 새로 추가한다
    * delete(키): 해당 키를 제거한다
    * toString(): 조작한 searchParams 객체를 다시 문자열로 만듭니다. 이 문자열을 search에 대입하면 주소 객체에 반영된다

3.5.3 url 모듈 - 레거시 방식 



* url.parse(주소): 주소를 분해한다
* url.format(객체): 분해되었던 url 객체를 다시 원래 상태로 조립한다
* querystring 모듈을 사용하여 객체로 만든다
    * querystring.parse(쿼리): url의 query 부분을 자바스크립트 객체로 분해한다
    * querystring.stringify(객체): 분해된 query 객체를 문자열로 다시 조립한다


## 3.6 파일 시스템 접근하기


### 3.6.3 fs 메서드



* fs.access(경로, 옵션, 콜백): 폴더나 파일에 접근할 수 있는지를 체크한다
* fs.mkdir(경로, 콜백): 폴더를 만든다
* fs.open(경로, 옵션, 콜백): 파일의 아이디(fd 변수)를 가져온다. 파일이 없다면 파일을 생성한 뒤 그 아이디를 가져온다. 두 번째 인수로 어떤 동작을 할 것인지 설정할 수 있다. 쓰려면 w, 읽으려면 r, 기존 파일에 추가하려면 a를 입력한다.
* fs.rename(기존 경로, 새 경로, 콜백): 파일의 이름을 바꾸는 메서드다. 인수로 경로를 적으며 꼭 같은 폴더를 지정할 필요는 없으므로 파일을 이동시킬 수도 있다.
* fs.readdir(경로, 콜백): 폴더 안의 내용물을 확인할 수 있다. 배열 안에 내부 파일과 폴더명이 나온다.
* fs.unlink(경로, 콜백): 파일을 지운다
* fs.rmdir(경로, 콜백): 폴더를 지운다. 폴더 안에 파일들이 있다면 에러가 발생하므로 먼저 내부 파일을 모두 지우고 호출해야 한다.


## 3.7 이벤트 이해하기


### events 모듈



* on(이벤트명, 콜백): 이벤트 이름과 이벤트 발생 시의 콜백을 연결한다. (이벤트 리스닝)
* addListener(이벤트명, 콜백): on과 같은 기능을 한다
* emit(이벤트명): 이벤트를 호출한다. 이벤트 이름을 인수로 넣으면 미리 등록해뒀던 이벤트 콜백이 실행된다.
* once(이벤트명, 콜백): 한 번만 실행되는 이벤트이다. 두 번 이상 호출해도 다시 실행되지 않는다.
* removeAllListeners(이벤트명): 이벤트에 연결된 모든 이벤트 리스너를 제거한다.
* removeListener(이벤트명, 리스너): 이벤트에 연결된 리스너를 하나씩 제거한다. 
* off(이벤트명, 콜백): 노드 10 버전에서 추가된 메서드로, removeListener와 같은 기능을 한다
* listenerCount(이벤트명): 현재 리스너가 몇 개 연결되어 있는지 확인한다.


# 4장 http 모듈로 서버 만들기


## 4.1 요청과 응답 이해하기



* 서버에는 요청을 받는 부분과 응답을 보내는 부분이 있어야 한다. 
* 요청과 응답은 이벤트 방식이다. 클라이언트로부터 요청이 왔을 때 어떤 작업을 수행할지 이벤트 리스너를 미리 등록해두어야 한다.
* createServer 메서드

```javascript
const http = require('http'); // http 모듈 호출

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // 응답에 대한 정보 (헤더)
  res.write('<h1>Hello Node!</h1>'); // 클라이언트로 보낼 데이터
  res.end('<p>Hello Server!</p>'); // 응답을 종료
})
  .listen(8080, () => { // 서버 연결
    console.log('8080번 포트에서 서버 대기 중입니다!');
  });
/* 서버를 종료하려면 콘솔에서 Ctrl + C를 입력한다 */
```




## 4.2 REST와 라우팅 사용하기


### http 요청 메서드



* GET: 서버 자원을 가져오고자 할 때 사용한다. 요청의 본문에 데이터를 넣지 않는다. 데이터를 서버로 보내야 한다면 쿼리스트링을 사용한다.
* POST: 서버에 자원을 새로 등록하고자 할 때 사용한다. 요청의 본문에 새로 등록할 데이터를 넣어 보낸다.
* PUT: 서버의 자원을 요청에 들어 있는 자원으로 치환하고자 할 때 사용한다. 요청의 본문에 치환할 데이터를 넣어 보낸다.
* PATCH: 서버 자원의 일부만 수정하고자 할 때 사용한다. 요청의 본문에 일부 수정할 데이터를 넣어 보낸다.
* DELETE: 서버의 자원을 삭제하고자 할 때 사용한다. 요청의 본문에 데이터를 넣지 않는다.
* OPTIONS: 요청을 하기 전에 통신 옵션을 설명하기 위해 사용한다.


### REST 기반 서버 주소 체계



* GET 메서드 관련
    * / : restFront.html 파일 제공
    * /about : about.html 파일 제공
    * /users : 사용자 목록 제공
    * 그 외: 기타 정적 파일 제공
* POST 메서드 관련
    * /user: 사용자 등록
* PUT 메서드 관련
    * /user/사용자id: 해당 id의 사용자 수정
* DELETE 메서드 관련
    * /user/사용자id: 해당 id의 사용자 제거


## 4.3 쿠키와 세션 이해하기 - 쿠키


### 쿠키



* 서버는 클라이언트를 식별하기 위해 요청에 대한 응답을 할 때 쿠키를 같이 보낸다
* 웹 브라우저는 서버로부터 쿠키가 오면 저장해두었다가 다음에 요청할 때마다 쿠키를 동봉해서 보낸다
* 브라우저는 쿠키가 있으면 자동으로 요청에 포함하기 때문에 서버에서 브라우저로 쿠키를 보내는 처리만 하면 된다

```javascript
const http = require('http');

http.createServer((req, res) => {
  console.log(req.url, req.headers.cookie); // 쿠키의 자리는 헤더
  res.writeHead(200, { 'Set-Cookie': 'mycookie=test' }); // 헤더에 쿠키를 기록
  res.end('Hello Cookie');
})
  .listen(8083, () => {
    console.log('8083번 포트에서 서버 대기 중입니다!');
});
```




### 쿠키로 사용자를 식별하는 방법


```javascript
const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

/* 문자열을 객체 형식으로 바꿔주는 함수 */
const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});



http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie);
 /* 주소가 /login으로 시작하는 경우 */
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url); // url 모듈
    const { name } = qs.parse(query); // querystring 모듈
    const expires = new Date();
    // 쿠키 유효 시간을 현재 시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 5);
    res.writeHead(302, { // 응답코드
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    }); // 리다이렉트 주소
    res.end();

// 헤더에는 한글을 설정할 수 없으므로 name 변수를 encodeURIComponent 메서드로 인코딩했다
// Set-Cookie의 값으로는 제한된 ASCII 코드만 들어가야 하므로 줄바꿈을 넣으면 안 된다



 /* 예외 처리 */
  } else if (cookies.name) { // name이라는 쿠키가 있는 경우
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile('./cookie2.html'); // 처음 방문한 경우
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) { // 에러가 난 경우
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
      }
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  });
```



### 쿠키 설정 옵션



* 쿠키명=쿠키값: 기본적인 쿠키의 값. mycookie=test 또는 name=kim 과 같은 형태로 설정한다.
* Expires=날짜: 만료 기한. 이 기한이 지나면 쿠키가 제거된다. 기본값은 클라이언트가 종료될 때까지이다.
* Max-age=초: Expires와 비슷하지만 날짜 대신 초를 입력. 해당 초가 지나면 쿠키가 제거된다. Expires보다 우선한다.
* Domain=도메인명: 쿠키가 전송될 도메인을 특정할 수 있다. 기본값은 현재 도메인이다.
* Path=URL: 쿠키가 전송될 URL을 특정할 수 있다. 기본값은 ‘/’이고, 이 경우 모든 URL에서 쿠키를 전송할 수 있다.
* Secure: HTTPS일 경우에만 쿠키가 전송된다.
* HttpOnly: 설정 시 자바스크립트에서 쿠키에 접근할 수 없다. 쿠키 조작을 방지하기 위해 설정하는 것이 좋다.


## 4.3 쿠키와 세션 이해하기 - 세션


### 세션



* 쿠키에 민감한 개인정보를 넣어두는 것은 적절하지 않다. 따라서, 서버에 사용자 정보를 저장하고 클라이언트와는 세션 아이디로만 소통한다. 
* 세션을 위해 사용하는 쿠키를 세션 쿠키라고 한다.

```javascript
const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const session = {};

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);
    const uniqueInt = Date.now();
    session[uniqueInt] = {
      name,
      expires,
    };
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  // 세션 쿠키가 존재하고, 만료 기간이 지나지 않았다면
  } else if (cookies.session && session[cookies.session].expires > new Date()) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${session[cookies.session].name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile('./cookie2.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8085, () => {
    console.log('8085번 포트에서 서버 대기 중입니다!');
  });
```

## 패키지 매니저
### NPM
- 명세 파일 생성: `npm init`
```JSON
{
  "name": "", // 패키지 이름
  "version": "0.0.1", // 버전
  "main": "index.js", // 가장 마지막으로 exports 하며 프로그램의 진입점이 되는 실행파일
  "scripts": {
    "start": "node index.js", // npm start: 개발 모드로 패키지를 실행
    "build": "", // npm run build: 패키지를 배포 형태로 빌드
    "test": "", // npm test: 테스트 코드를 실행
  },
  "license": "" // 라이선스 종류
}
```

- 패키지 설치: `npm install --save ${package name}` (--save는 생략 가능)
- devDependency로 설치: `npm install --save-dev ${package name}` (혹은 `-D`)

