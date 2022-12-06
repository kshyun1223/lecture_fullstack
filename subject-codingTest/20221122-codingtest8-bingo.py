"""
* 배열을 만들었다
  * => input 메서드를 넣으니까 파이썬 파일이 실행이 된다

* 배열이 일렬로 나오는데 줄바꿈은 안되나?
  * => 한번에 안 하고 반복문으로 깔면 한 줄에 하나씩 나온다

* 파이썬 파일로 실행시키니까 창이 계속 꺼졌는데 배열 인덱스 자리에 input 값을 바로 넣어서 에러가 난거였다. 파이썬 파일을 클릭하지 않고 cmd로 실행시키니까 에러가 출력됨.

* 더 세련되게 하는 방법이 있겠지만 일단 배열 인덱스 자리에 int() 메소드도 잘 들어감 ㅇㅇ

* 근데 이제 반복을 시켜야 되는데 막막하다 ㅠㅠ
  * => 헤헤 while문 쓰니까 된다 ㅋㅋㅋ

* while문 반복때마다 배열이 분신술을 쓰는데 print를 한번만 했어야 했다

* list index out of range 땜에 자꾸 꺼지는데 안꺼지게 해야 한다

"""

bingo_table = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

# print(len(bingo_table)) // 5, 가로
# print(len(bingo_table[0])) // 10, 세로
# print(len(bingo_table[1])) // 10, 세로
# print(len(bingo_table[2])) // 10, 세로
# print(len(bingo_table[3])) // 10, 세로
# print(len(bingo_table[4])) // 10, 세로

while True:
  for i in bingo_table:
    print(i)
  row = input("가로 위치: ")
  column = input("세로 위치: ")
  bingo_table[int(row)-1][int(column)-1]=1
