# Express.js 정리
> [익스프레스 한국어 공식 문서](http://expressjs.com/ko)

### 라우팅 기본 형태
```javascript
app.METHOD(PATH, HANDLER)
```
* app은 express의 인스턴스입니다.
* METHOD는 [HTTP 요청 메소드](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)입니다.
* PATH는 서버에서의 경로입니다.
* HANDLER는 라우트가 일치할 때 실행되는 함수입니다.

※ 심화 자료: [안내서 - 라우팅](http://expressjs.com/ko/guide/routing.html)


### 홈 페이지에서 Hello World!로 응답


```javascript
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```



### 애플리케이션의 홈 페이지인 루트 라우트(/)에서 POST 요청에 응답:


```javascript
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
```



### /user 라우트에 대한 PUT 요청에 응답


```javascript
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
```



### /user 라우트에 대한 DELETE 요청에 응답


```javascript
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```



### MySQL 연동


```javascript
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // 혹은 별도 지정한 유저네임
  password: '비밀번호',
  database: '데이터베이스 이름'
})

connection.connect()
...
connection.end()
```




* `mysql 모듈 `설치: `npm install mysql`
* `mysql 모듈 `실행: `mysql -uroot -p`
* `데이터베이스 고정: use {데이터베이스 이름}`