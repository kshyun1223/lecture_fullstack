# -*- coding: utf8 -*- 

# 주어진 문장 
string = '“We will never be able to recognize opportunities if we first don’t recognize all that we have and all that we’ve been given.”'

# 띄어쓰기 세기
def spacing():
  return(len(string.split(' '))) 

# 어포스트로피 세기
def apostrophe():
  return(string.count('’')) 

# 단어 수 세기
print(spacing()+apostrophe())
