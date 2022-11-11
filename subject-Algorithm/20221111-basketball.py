three = 16
two = 9
free = 18

def score_analysis(x, y, z):
  A = x*3 # x: 3점슛
  B = y*2 # y: 2점슛
  C = 1*2*z # z: 자유투
  D = (z/(x+y+z))*100 # 자유투 확률
  print(
    '"KDT팀이 이 날 성공한 2점슛은 총' A'회 입니다."' '"그리고 상대팀으로부터 자유투를' B'번 획득해, 총' C'개의 자유투를 성공하였습니다."'
    "이 날 KDT팀의 자유투 성공률은 {D}% 입니다."
  )

score_analysis(three,two,free)
