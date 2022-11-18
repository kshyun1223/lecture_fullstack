# flask
## 시작
### 프로젝트 생성
```python
# Flask 클래스를 호출
from flask import Flask

# Flask 클래스의 인스턴스
# __name__ 변수는 메인 파일의 이름
app = Flask(__name__)
```
- 디버깅 모드 활성화: `set FLASK_DEBUG=1`
- 서버 실행: `flask run`

### 라우팅
```python
# route() 데코레이터
# 어떤 URL이 함수를 트리거해야 하는지 Flask에 알린다
@app.route('/')
def index():
    return 'Index Page'

@app.route('/hello')
def hello():
    return 'Hello, World'
```

### URL Building
```python
@app.route('/login')
def login():
    return 'login'

@app.route('/user/<username>')
def profile(username):
    return f'{username}\'s profile'

with app.test_request_context():
    print(url_for('index'))
    print(url_for('login'))
    print(url_for('login', next='/'))
    print(url_for('profile', username='John Doe'))
```

### http 메소드
```python
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return do_the_login()
    else:
        return show_the_login_form()
```
- 한꺼번에 작성

```python
@app.get('/login')
def login_get():
    return show_the_login_form()

@app.post('/login')
def login_post():
    return do_the_login()
```
- 각각 따로 작성

### request 메소드
```python
@app.route('/login', methods=['POST', 'GET'])
def login():
    error = None
    if request.method == 'POST':
        if valid_login(request.form['username'],
                       request.form['password']):
            return log_the_user_in(request.form['username'])
        else:
            error = 'Invalid username/password'
    # 아래의 코드는 요청이 GET 이거나, 인증정보가 잘못됐을때 실행된다.
    return render_template('login.html', error=error)
```

### 쿼리스트링
```python
@app.route('/test')
def test():
    parameter_dict = request.args.to_dict()
    if len(parameter_dict) == 0:
        return 'No parameter'

    parameters = ''
    for key in parameter_dict.keys():
        parameters += 'key: {}, value: {}\n'.format(key, request.args[key])
    return parameters
```

### 데이터베이스
- SELECT
```python
conn = mysql.connect() # DB와 연결
cursor = conn.cursor() # connection으로부터 cursor 생성
sql = "SELECT id FROM users WHERE id = %s AND pw = %s" # 실행할 SQL문
value = (id, pw)
# cursor.execute("set names utf8") # 한글이 정상적으로 출력이 되지 않는 경우
cursor.execute(sql, value) # 메소드로 전달해 명령문을 실행
data = cursor.fetchall() # SQL문을 실행한 결과 데이터를 꺼냄
cursor.close()
conn.close()
```

- INSERT
```python
conn = mysql.connect() # DB와 연결
cursor = conn.cursor() # connection으로부터 cursor 생성
sql = "INSERT INTO users VALUES ('%s', '%s')" % (id, pw) # 실행할 SQL문
cursor.execute(sql) # 메소드로 전달해 명령문을 실행
data = cursor.fetchall() # 실행한 결과 데이터를 꺼냄
cursor.close()
conn.close()
```