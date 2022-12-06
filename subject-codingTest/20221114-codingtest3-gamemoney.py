#-*- coding:utf-8 -*-
import math

def farming(leather):
  Time_Gold = (math.trunc(leather * 2 / 4))
  Time_Silver = leather * 2 / 4 % 1 * 4
  Time_Copper = leather * 2 / 4 % 1 * 4 * 8
  All_Gold = Time_Gold * 8
  All_Copper = Time_Copper * 8
  return print("이 날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 {Time_Gold}개 입니다. gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 {Time_Copper}개의 copper를 챙겼습니다. 공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 {All_Gold}gold, {All_Copper}copper를 얻었습니다".format(Time_Gold="Time_Gold", Time_Copper="Time_Copper", All_Gold="All_Gold", All_Copper="All_Copper"))