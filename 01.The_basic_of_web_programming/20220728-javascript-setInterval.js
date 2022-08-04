let count = 0;
let timer = setInterval(() => {
  if(count < 10) {
    count++;
    console.log(count);
  } else {
    clearInterval(timer);
    console.log(`변수 count가 ${count}이므로, timer 함수가 종료 되었습니다.`);
  }
}, 1000);

  // todo : 터미널 환경에서 명령줄 디렉토리 정보가 열어놓은 프로젝트 위치와 같은지 확인
  // todo : node --version
  // * 작성으로 버전 정보가 나오는지 확인(설치가 안되어있다면 명령을 찾을 수 없다는 정보가 확인됨)
  // todo : node setInterval-1.js
  // * node 와 파일이름간 띄어쓰기 확인
  // * Enter키(명령 실행)
  // * 데이터가 나오는지 확인
