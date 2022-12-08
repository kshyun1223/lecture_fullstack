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

## 기본 조작
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