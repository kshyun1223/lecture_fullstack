import sys #시스? 라는 모듈을 호출.
from PyQt6.QtWidgets import QApplication, QWidget #파이큐티에서 큐애플리케이션, 큐위젯이라는 모듈을 호출해야 한다. 파이큐티 버전 확인.


class MyApp(QWidget):

    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.setWindowTitle('창 띄우기 실습')
        self.move(300, 300) #위치
        self.resize(400, 200) #크기
        self.show() #출력


if __name__ == '__main__':
   app = QApplication(sys.argv) #파이큐티를 사용하려면 큐앱이라는 객체를 생성해야 한다
   ex = MyApp()
   sys.exit(app.exec())

#.exe 파일 생성: 콘솔창에서 파이썬 프로젝트 폴더로 이동한 뒤 `pyinstaller -w -F 파일명.py` 명령 입력
# `-w`는 콘솔창이 같이 출력되지 않게 하는 옵션
# `-F`는 폴더 없이 단일 파일로 생성되게 하는 옵션