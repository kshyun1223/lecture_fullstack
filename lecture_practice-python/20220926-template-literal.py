# 특이한 템플릿 리터럴 작성 방식
# format() 이라는 내장함수로 인수를 정의 한 뒤 바뀌는 형태를 가지고 있다.
set_string = "text {template}, {wow}".format(template="hello", wow="yes")
print(set_string)