# linux
## Ubuntu
### 패키지 업데이트 및 불필요한 패키지 자동 제거
- `sudo apt update && sudo apt -y upgrade && sudo apt -y autoremove`

### 한국어 언어 팩 설치
```
sudo apt -y install language-pack-ko

sudo locale-gen ko_KR.EUC-KR
sudo update-locale LANG=ko_KR.UTF-8 LC_MESSAGES=POSIX

sudo apt -y install fonts-unfonts-core fonts-unfonts-extra fonts-nanum fonts-nanum-coding fonts-nanum-eco fonts-nanum-extra fonts-noto-cjk
```

### 페이지 스크롤
- 라인 단위: **ctrl** + shift + up / down
- 페이지 단위: **ctrl** + shift + page up / page down

## nano
### 실행
- 일반 실행: `nano`
- 특정 파일 실행: `nano <filename>`

### 사용법
- 저장: `Ctrl + O` => 파일명 입력 => 엔터
- 복사: `Alt + 6`
- 잘라내기: `Ctrl + K`
- 붙여넣기: `Ctrl + U`
- 드래그: `shift + 방향키`
- 다른 파일로 이동: `Ctrl + R` => 방향키로 선택하려면 `Ctrl + T`
- 되돌리기: `Esc + U`
- 다시실행: `Ese + E`
- 찾기: `Ctrl + W`
- 맨 앞으로 이동: `Alt + \`
- 맨 뒤로 이동: `Alt + /`

### 패키지 설치
- apt: 데비안 계열의 패키지 매니저 이름
- wget, curl: 자동설치스크립트. wget가 좀더 직관적이다.