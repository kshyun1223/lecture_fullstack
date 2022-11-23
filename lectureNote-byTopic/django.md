# django
### 기본 구조
```
최상위 폴더 : 프로젝트 최상위 폴더. 이름을 바꿔도 무방함.
│
├─ manage.py : runserver등 웹서버를 실행하고 관리하는 기능
│
├─ 패키지 폴더 : startproject에 입력한 이름. 이름을 바꾸면 곤란해진다.
│   ├─ __init__.py : 모듈 관련 파일
│   ├─ settings.py : 설정을 기록해 놓은 파일
│   ├─ urls.py : 루트 url 설정
│   ├─ asgi.py : 웹서버에 배포할 때 설정파일들을 연결
│   └─ wsgi.py : 웹서버에 배포할 때 설정파일들을 연결
│
├─ 앱 폴더 : startapp에 입력한 이름
│   └─ migrations/: 모듈 관련 폴더
│       ├─ __init__.py: 모듈 관련 파일
│       ├─ admin.py: 관리자가 접속하면 보이는 화면. 내장돼 있음.
│       ├─ app.py: 프로젝트에 앱을 등록하는 기능
│       ├─ models.py: DB 관련 파일
│       ├─ tests.py: 테스트를 위한 파일
│       ├─ views.py: 화면 구성을 위한 파일
│       └─ urls.py: 앱 url 설정
│
└─ 앱 폴더
    ├─ urls.py
    ├─ view
    └─ model
```

### django 프로젝트 생성
- `django-admin startproject 이름`
  - `manage.py` 파일에 오류같은 내용 나와있는데 이게 정상...?

### 개발서버 실행
- `python manage.py runserver`
  - `You have 18 unapplied migration(s).` 어쩌고 저쩌고 나오는데 점프 투 django에 보면 상관 없다고 나와있음

### app 추가
- `python manage.py startapp 이름`

### DB 관련
- DB 변경사항 반영: `python manage.py migrate`
- admin 계정 재생성: `python manage.py createsuperuser`