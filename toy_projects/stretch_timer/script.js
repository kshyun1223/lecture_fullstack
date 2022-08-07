function StartStop()
if( //초기 버튼값 시작. 누르면 타이머 시작되고 버튼값 정지로 바뀜.
    document.querySelector('#start_stop').value === '시작') {
    /* document.querySelector('body').style.backgroundColor = 'black'; // 배경색을 바꾸는 게 아니라 타이머를 정지해야겠지?
    document.querySelector('body').style.color = 'white'; // nightday에서는 글자색까지 두개였는데 여기서는 필요없겠지? */
    document.querySelector('#start_stop').value = '정지'; //버튼 변경
  } else { //버튼값이 정지라면? 누르면 타이머 정지되고 버튼값 시작으로 바뀜.
    /* document.querySelector('body').style.backgroundColor = 'white'; // nightday에서는 글자색까지 두개였는데 여기서는 필요없겠지?
    document.querySelector('body').style.color = 'black'; // 배경색을 바꾸는 게 아니라 타이머를 정지해야겠지? */
    document.querySelector('#start_stop').value = '시작'; // 버튼 변경
}

//setInterval 이벤트
  var time = 7; // 원래 25분인데 시연을 위해 7초로 설정
  var min = "" // 분
  var sec = "" // 초
  //setinterval 함수(시간): 주기적인 실행
  var x = setInterval(function() { 
          //parseInt(): 정수를 반환
          min = parseInt(time/60); //몫을 계산
          sec = time%60; //나머지를 계산

          document.getElementById("timer").innerHTML = min + "분" + sec + "초";
          time--;
          if (time < 0) {
            clearInterval(x); //setInterval 이벤트를 종료
            // document.getElementById("timer").innerHTML = "시간초과"; -> 나는 뭘 넣어야 되지? 
          }
  }, 1000); // 1000은 뭐지?
</script>

//alert 이벤트
alert('고개 드세요! 당신은 아직 디스크가 아닙니다'.);


