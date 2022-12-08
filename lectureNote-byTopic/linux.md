# linux
## Ubuntu
### 우분투 최초 실행시 설정
- 패키지 업데이트 및 불필요한 패키지 자동 제거: `sudo apt update && sudo apt -y upgrade && sudo apt -y autoremove`

- ZSH 설치: `sudo apt -y install zsh`

- Oh-My-ZSH 설치: `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

- 기본 쉘을 zsh로 설정: `chsh -s $(which zsh)`

- 한국어 언어 팩 설치
```
sudo apt -y install language-pack-ko

sudo locale-gen ko_KR.EUC-KR
sudo update-locale LANG=ko_KR.UTF-8 LC_MESSAGES=POSIX

sudo apt -y install fonts-unfonts-core fonts-unfonts-extra fonts-nanum fonts-nanum-coding fonts-nanum-eco fonts-nanum-extra fonts-noto-cjk
```

## 사용법
### 페이지 스크롤
- 라인 단위: **ctrl** + shift + up / down
- 페이지 단위: **ctrl** + shift + page up / page down