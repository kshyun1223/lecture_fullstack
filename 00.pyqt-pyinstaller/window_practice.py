import sys
from PyQt6.QtWidgets import QApplication, QWidget

class MyApp(QWidget): 

    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.setWindowTitle('창 띄우기')
        self.move(300, 300) 
        self.resize(500, 300) 
        self.show() 


if __name__ == '__main__':
   app = QApplication(sys.argv) 
   ex = MyApp()
   sys.exit(app.exec())

#.exe 파일 생성: 콘솔창에서 파이썬 프로젝트 폴더로 이동한 뒤 `pyinstaller -w -F 파일명.py` 명령 입력
# `-w`는 콘솔창이 같이 출력되지 않게 하는 옵션
# `-F`는 폴더 없이 단일 파일로 생성되게 하는 옵션