# django
## 사용법
### django 프로젝트 생성
  - `django-admin startproject 프로젝트이름`
    - `manage.py` 파일에 오류같은 내용 나와있는데 이게 정상...?

### 개발서버 실행
  - `python manage.py runserver`
    - `You have 18 unapplied migration(s).` 어쩌고 저쩌고 나오는데 점프 투 django에 보면 상관 없다고 나와있음


### 기본 구조
```
root
├─ urls.py : 프로젝트 폴더에 하나가 있다
├─ app : 실질적인 기능을 담당하며 여러개를 만들 수도 있다
│   ├─ urls.py : 각 app 폴더들에도 하나씩 있다
│   ├─ view
│   │   ├─ def : 함수
│   │   └─ def
│   └─ model
└─ app
    ├─ urls.py
    ├─ view
    └─ model
```
- urls.py
  - 사용자가 접속을 할 때 여러가지 경로로 들어오는데, 그 각각의 경로를 누구에게 위임할 것인가를 여기에 정의한다
  - 프로젝트의 urls.py에서는 어떤 app으로 전달할 것인가를 정의하고, app의 urls.py에서는 어떤 view의 어떤 함수로 전달할 것인가를 정의한다
- model
  - django에서 데이터베이스에 접속할 때 model을 통해서 접속한다