# Python
## venv (virtual environment)
### 생성
1. 원하는 경로로 이동
2. `python -m venv <가상환경 이름>`
   - `-m`: 모듈을 실행하기 위한 옵션, 스크립트를 실행한다고 표현하기도 한다
- 설치 범위를 지정할 수 있는 자바스크립트와 달리 파이썬은 글로벌 설치가 기본값이다. 
- 따라서 프로젝트별로 의존성을 관리하고 싶으면 venv(virtual environment), 즉 가상환경을 다루어야 한다.
- 결과적으로 package.json과 비슷한 목적으로 사용할 수 있지만 자바스크립트와 달리 프로젝트 로컬에 귀속되지 않고, 시스템레벨에서 관리되는 것이 특징이다.

### 실행
- cmd
  - 실행: `.\<가상환경 이름>\Scripts\activate.bat`
  - 종료: `.\<가상환경 이름>\Scripts\deactivate.bat`

- PowerShell
  - 실행: `<가상환경 이름>\Scripts\Activate.ps1`
  - 실행: `<가상환경 이름>`

- 에러 대처
  - 권한 설정 문제인 경우가 많다. 아래 명령어를 실행하여 해결한다.
  - `Set-ExecutionPolicy RemoteSigned -Scope Process`

## pip
### venv에 패키지 설치
1. venv 실행
2. `pip` 명령어로 원하는 패키지 설치

### requirements.txt
- 명세 생성: `pip freeze > requirements.txt`
- 자바스크립트에서는 `package.json` 명세가 자동적으로 생성되는 것과 달리 파이썬은 `requirements.txt` 파일을 임의로 출력해야 한다
- 패키지 일괄 설치: `pip install -r requirements.txt`
- 패키지 일괄 삭제: `pip uninstall -r requirements.txt -y`

