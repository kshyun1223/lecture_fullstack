# Git
### init
- 프로젝트 폴더에 처음 깃을 설치: `git init` - `npm init`

### 기록을 남기는 과정
- staging - commit - push
- 커밋 메시지는 기록을 남기는 메모지 역할을 한다
  - 반드시 이슈별로 기록하는 습관을 들여야 한다

### staging
- `git reset HEAD` : 전체 파일의 스테이징을 취소
- `git reset HEAD <파일 이름>` : 특정 파일의 스테이징을 취소

### commit
- `git log` : 커밋 목록 확인
- `git reset HEAD^` : 마지막 한개의 커밋을 취소하고 해당 파일들은 unstaged 상태로 변경
  - `git reset HEAD~2` : 마지막 2개의 커밋에 위 명령을 적용
  - `git reset --soft HEAD^` : 커밋을 취소하고 해당 파일들은 staged 상태로 변경
  - `git reset --hard HEAD^` : 커밋을 취소하고 해당 파일들은 삭제
- `git commit -amend` : 커밋 메시지를 변경

### push 되돌리기
1. `git reset --hard HEAD^` 명령어로 커밋을 순차적으로 취소하거나, `git reset --hard <commit id>` 명령어로 특정 시점으로 되돌린다
2. `git push --force` 명령어로 수정된 커밋을 푸쉬하여 원격에 적용한다
- 주의점: 둘 이상의 작업자가 있을 경우 원격에서는 롤백됐는데 로컬에서는 그대로 남아있어서 충돌이 일어날 수 있다

### clone
- `git clone <레포지토리 이름>`

### git branch
- 생성
  - `git branch` : 버전을 병렬 처리
  - `git branch <브랜치이름>` : 다른 버전의 줄기 생성
  - `git checkout` : 브랜치 전환

- 삭제
  - 로컬 브랜치 삭제: `git branch -d <삭제할 브랜치 이름>`
  - 원격 브랜치 삭제: `git push origin <삭제할 브랜치 이름>`

- 조회
  - git graph 플러그인으로 브랜치를 시각화해서 볼 수 있다
  - 직접 조회는 `git log` => 탈출은 `Q`

### 원격 브랜치
- 조회: `git branch -r (원격 브랜치 이름)`
- 가져오기: `git branch -t origin/(원격 브랜치 이름)`

### 예외 처리
- `.gitignore`라는 파일을 프로젝트 최상단 폴더에 생성하고 그 안에 목록을 작성



# CLI
### 터미널 명령어
- `cd ./하위폴더이름` -> 해당 하위폴더로 이동
- `cd ../` -> 현재 폴더의 상위폴더로 이동

# npm
### 명령어
- 패키지 추가: `npm install --save (추가할 패키지 이름)`


