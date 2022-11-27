# wsl2
## 개발환경 구축
### windows terminal 설치 (선택사항)
- `winget install -e --id Microsoft.WindowsTerminal`

### wsl 설치
- 기본값인 우분투로 자동 설치: `wsl --install`
  - => wsl이 전혀 설치되지 않은 경우에만 작동하고, 그렇지 않은 경우 도움말이 출력됨
- 배포판 목록 확인: `wsl.exe --list --online`
- 원하는 배포판 신규 설치 혹은 변경: `wsl.exe --install -d Ubuntu-20.04`

### wsl 실행시 에러가 발생하는 경우 조치사항
- 에러 메시지
```
Installing, this may take a few minutes...
WslRegisterDistribution failed with error: 0x800701bc
Error: 0x800701bc WSL 2? ?? ?? ?? ????? ?????. ??? ??? https://aka.ms/wsl2kernel? ??????.

Press any key to continue...
```

- Virtual Machine Platform 사용 설정: `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`

- 리눅스 커널 업데이트 패키지 설치: `https://learn.microsoft.com/ko-kr/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package`

- wsl2를 기본값으로 설정: `wsl --set-default-version 2`

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