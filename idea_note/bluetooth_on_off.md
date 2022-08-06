# 블루투스 원격 관리 앱

### 동기

블루투스는 현대인의 일상에 깊게 자리잡은 기술로, 많은 사람들은 둘 이상의 블루투스 기기를 사용하고 있다. 나 또한 스마트폰과 태블릿, 그리고 데스크탑에도 동글 형태의 블루투스 모듈을 장착해서 총 세 대의 블루투스 기기를 사용하고 있다.

그런데 종종 블루투스 이어폰을 한 기기에 연결해놓고 해제가 안 된 상태에서 모르고 다른 기기에 연결을 시도해서 연결이 안 됐던 적이 있다. 이 때 원격으로 기존 연결되어 있던 기기의 블루투스를 끄면 좋겠다는 생각이 들었고,  그것이 이 기획으로 발전하게 되었다.

### 구현방향

유사 사례로 IOT 제품을 제어하는 앱이 있다. IOT 앱은 클라이언트 앱이 설치된 모바일기기들과 와이파이, 지그비 등 자체적인 통신수단을 가진 IOT 제품들이 제각기 서버에 연결되어 있으며, 서버는 올라온 요청을 처리하여 다시 연결된 기기들에 내려보낸다.

제어 대상이 독립적인 제품이 아닌 클라이언트 기기 자신의 시스템이라는 점을 제외하면 이 애플리케이션의 동작사항은 앞서 언급한 사례와 대동소이 하다고 할 수 있다.

### 고려할 점

우선 안드로이드 시스템에서 블루투스 기능 ON/OFF 권한을 받아와야 한다. 이는 검색해본 결과 아마 가능할 것으로 예상된다. 하지만 이 앱이 완전한 사용자경험을 제공하기 위해서는 크로스플랫폼을 구현할 필요가 있다. 윈도우도 애플리케이션에게 블루투스 제어 권한을 허용하는지 알아봐야 할 것이다.