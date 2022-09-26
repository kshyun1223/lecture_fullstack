# 파이썬은 자바스크립트에서 부르는 객체(object)의 형태를
# 사전이란 뜻의 딕셔너리(dictionary), 약칭 dict라고 부릅니다.
pokemon_example = {
  "id_value" : 1,
  "name" : "이상해씨",
  "type_value" : "풀",
}
# 특이한점은 키(key)에 해당하는 property 부분을 정확하게
# "문자열(string)"로 명시한점을 눈여겨 볼 필요가 있습니다.
# 마치 JSON 파일 포멧팅 형식과 닮았습니다.

print(pokemon_example["id_value"])
print(pokemon_example["name"])
print(pokemon_example["type_value"])

# dictionary의 속성값을 접근하는 방식은 자바스크립트와 달리
# [ ] 대괄호 표기법을 기본으로 하고 있으며,
# 자바스크립트는 점표기법, 대괄호표기법 두개를 병용할 수 있는 것과 달리
# 파이썬은 명확하게 딕셔너리 타입 일 때, 생성자 함수(class) 일 떄를 구분합니다.

# 이부분에 대한 표기 방식이 자바스크립트보다 엄격하기때문에
# object의 시작점 형태를 수월하게 파악할 수 있는 장점이 있습니다.

