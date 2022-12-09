# 도커
## 설치방법
### 자동 설치 스크립트
- wget: `sudo wget -qO- https://get.docker.com/ | sh`
- curl: `sudo curl -fsSL https://get.docker.com | sh`

### apt로 설치
```
$ sudo apt update
$ sudo apt install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
$ sudo mkdir -p /etc/apt/keyrings
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
    sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
$ echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
    https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
$ sudo apt update
$ sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

## 기본 기능
### 이미지
- Docker Hub
  - 웹사이트 주소: `https://hub.docker.com/search?q=`
  - 터미널에서 검색: `docker search <검색어>`
  - 이미지 설치: `sudo docker pull <이미지 이름>:<태그>`

- 이미지 목록 출력
  - 모든 이미지 출력: `sudo docker images`
  - 특정 이미지 출력: `sudo docker images <이미지 이름>`

- 이미지 삭제: `sudo docker rmi <이미지 이름>:<태그>`


### 컨테이너
- 공식 우분투 이미지 설치: `sudo docker pull ubuntu:latest`
- 설치한 이미지로 컨테이너 생성: `sudo docker run -i -t --name <컨테이너 이름> ubuntu /bin/bash`
  - 입출력 옵션: `-i`(interactive), `-t`(Pseudo-tty), 
  - 컨테이너 이름 지정: `--name <컨테이너 이름>` (=> 지정 안하면 무작위로 부여되는데 작명센스가 구림)
  
- 컨테이너 목록
  - 실행중인 컨테이너 목록 출력: `sudo docker ps`
  - 모든 컨테이너 목록 출력: `sudo docker ps -a`
  
- 컨테이너 조작
  - 시작: `sudo docker start <컨테이너 이름>`
  - 재시작: `sudo docker restart <컨테이너 이름>`
  - 접속: `sudo docker attach <컨테이너 이름>`
  - 정지: `sudo docker stop <컨테이너 이름>`
  - 삭제: `sudo docker rm <컨테이너 이름>`
  - 외부에서 명령: `sudo docker exec <컨테이너 이름> <명령> <매개변수>`

- 도커 나가기
  - 컨테이너를 정지하면서 나가기: `Ctrl+D`
  - 컨테이너를 정지하지 않고 나가기: `Ctrl+P Ctrl+Q`

## 고급 기능
### docker run 명령어 옵션
- `-i`, `--interactive` : 표준 입력(stdin)을 활성화한다. 쉘에 명령을 입력하려면 이 옵션을 지정해야 한다.

- `-t`, `--tty` : TTY 모드(pseudo-TTY)를 활성화한다. 쉘에 명령을 입력하려면 이 옵션을 지정해야 한다.

- `--name`: 컨테이너 이름을 설정한다

- `-d`, `--detach` : Detached 모드를 활성화한다. 흔히 데몬(daemon) 모드라고도 부르며 컨테이너가 백그라운드로 실행된다.

- `-p`, `--publish` : 포트포워딩을 설정한다
  - `-p <호스트 포트>:<컨테이너 포트>`의 형태로 사용한다 (예시: `-p 8080:80`)

- `--privileged` : 컨테이너 안에서 호스트의 리눅스 커널 기능을 모두 사용하며, 호스트의 주요 자원에 접근할 수 있다

- `--rm` : 프로세스 종료시 컨테이너를 자동으로 삭제한다

- `--restart` : 컨테이너 종료 시 재시작 방식을 지정한다 (예시: `--restart="always"`)

- `-v, --volume` : 데이터 볼륨을 설정한다
  - 호스트와 컨테이너의 디렉토리를 연결하여 파일을 컨테이너에 저장하지 않고 호스트에 바로 저장하는 기능

- `-u, --user` : 컨테이너가 실행될 리눅스의 사용자 계정 이름 혹은 UID를 설정한다 (예시: `--user root`)

- `-e, --env` : 컨테이너 내에서 사용할 환경 변수를 설정 (예시: `-e GRANT_SUDO=yes`)
  - 보통 설정 값이나 비밀번호를 전달할 때 사용한다

- `--link` : 컨테이너들을 서로 연결한다. `--link <컨테이너 이름>:<별칭>`의 형태로 사용한다

- `-h, --hostname` : 컨테이너의 호스트 이름을 설정한다

- `-w, --workdir` : 컨테이너 안의 프로세스가 실행될 디렉터리를 설정한다

- `-a, --attach` : 컨테이너에 표준 입력(stdin), 표준 출력(stdout), 표준 에러(stderr)를 연결한다

- `-c, --cpu-shares` : CPU 자원 분배 설정

- `-m, --memory` : 메모리 한계를 설정한다

### dockerfile