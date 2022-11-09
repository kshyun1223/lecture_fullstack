# Python
## venv (virtual environment)
### 생성
1. 원하는 경로로 이동
2. `python -m venv 가상환경 이름`
   - `-m`: 모듈을 실행하기 위한 옵션, 스크립트를 실행한다고 표현하기도 한다
- 설치 범위를 지정할 수 있는 자바스크립트와 달리 파이썬은 글로벌 설치가 기본값이다. 
- 따라서 프로젝트별로 의존성을 관리하고 싶으면 venv(virtual environment), 즉 가상환경을 다루어야 한다.
- 결과적으로 package.json과 비슷한 목적으로 사용할 수 있지만 자바스크립트와 달리 프로젝트 로컬에 귀속되지 않고, 시스템레벨에서 관리되는 것이 특징이다.
- **주의사항**: venv는 한번 생성되면 이름을 바꾸는 것이 불가능하다. 만약 이름을 바꿔야 한다면 새로 구축한 뒤 requirements.txt 파일을 옮겨오는 수밖에 없다.

### 실행
- cmd
  - 실행: `.\가상환경 이름\Scripts\activate.bat`
  - 종료: `.\가상환경 이름\Scripts\deactivate.bat`

- PowerShell
  - 실행: `가상환경 이름\Scripts\Activate.ps1`
  - 실행: `가상환경 이름`

- 에러 대처
  - 권한 설정 문제인 경우가 많다. 아래 명령어를 실행하여 해결한다.
  - `Set-ExecutionPolicy RemoteSigned -Scope Process`

### django 프로젝트 생성
  - `django-admin startproject 프로젝트이름`
    - `manage.py` 파일에 오류같은 내용 나와있는데 이게 정상...?

### 프로젝트 폴더와 venv 연동
- 터미널에서 프로젝트 폴더에 위치한 상태에서 `가상환경 폴더\Scripts\activate` 입력
- => 예시: `C:\projects>C:\venvs\mysite\Scripts\activate`
- => 결과: `(mysite) C:\projects>`

## pip
### venv에 패키지 설치
1. venv 실행
2. `pip` 명령어로 원하는 패키지 설치

### requirements.txt
- `pip freeze > requirements.txt`
  - 자바스크립트에서는 `package.json` 명세가 자동적으로 생성되는 것과 달리 파이썬은 `requirements.txt` 파일을 임의로 출력해야 한다
- 패키지 일괄 설치: `pip install -r requirements.txt`
- 패키지 일괄 삭제: `pip uninstall -r requirements.txt`

# django
### 개발서버 실행
  - `python manage.py runserver`
    - `You have 18 unapplied migration(s).` 어쩌고 저쩌고 나오는데 점프 투 django에 보면 상관 없다고 나와있음

- 기본 구조
```
.root
├── djangoProject : 프로젝트 생성 시 최초 생성되는 디렉토리
│  ├── __init__.py
│  ├── asgi.py
│  ├── settings.py
│  ├── urls.py
│  └── wsgi.py
│
├── manage.py : django의 기능들을 관리
│
├── product : `django-admin startapp 모델이름` 명령을 실행하면 생성됨
│  ├── __init__.py
│  ├── admin.py
│  ├── apps.py
│  ├── migrations
│  │  └── __init__.py
│  ├── models.py
│  ├── tests.py
│  └── views.py
```

### Model
- django는 Model-View-Template(MVT) 패턴으로 이루어져있다
- `django-admin startapp 모델이름` 명령을 실행하면 디렉토리가 생성된다
  - 여기에 앱의 Model, View 등을 작성하여 기능을 추가할 수 있다
