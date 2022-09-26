pokemon_list = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀"]
# 자바스크립트의 배열(array)의 형태를 한 데이터 타입을
# 파이썬에서는 list (목록)이라는 직관적인 이름으로 부르고 있습니다.

open_li_tag = "<li>"
close_li_tag = "</li>"
# 입문인만큼, 가독성을 위해 따로 전역변수로 설정

def element_maker():    
    tag_list = []
    for text_node in pokemon_list:
        tag_list.append(open_li_tag)
        tag_list.append(text_node)
        tag_list.append(close_li_tag)
    return " ".join(tag_list)
  
# def = definition "정의" 한다는 의미로 def 키워드가 사용되었는데,
# 자바스트립트의 function(함수)의 역할과 같습니다.
# 본 element_maker() 함수는
# 자바스크립트에서 일련의 문자열처리로 HTML태그를 생성한 방식을
# 그대로 파이썬 방식으로 진행한 모습입니다.
# 자바스크립트에서도 지원하는 for in문을 활용,
# "인자를 전달받은" 형태로 for loop를 진행한 것을 확인 할 수 있습니다.
# 여기서 사용된 append() 함수는 자바스크립트의 push() 역할과 비슷합니다.
# join() 함수의 목적은 자바스크립트와 동일하지만,
# 매우 특이한 사용형태가 매우 특이한 것을 확인 할 수 있습니다.
# " ": 띄어쓰기가 구분자, join()의 인수(args)가 해당 배열인 형태입니다.

print(element_maker())
# REPL 환경에서 출력해보면, 배열의 원소 갯수만큼 
# <li>element</li> 조립된 것을 확인 할 수 있습니다.
# 이것이 시사하는 바는 파이썬으로도 얼마든지 HTML을 만들 수 있는 점이라는것이
# 큰 특징입니다.
