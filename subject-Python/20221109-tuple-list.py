poke_list = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀"]
poke_tuple = ("메타몽", "리자몽", "왕눈해", "토게피", "고오스")

print(poke_list[0]) # 피카츄
print(poke_tuple[0]) # 메타몽

poke_list.append("두트리오")
print(poke_list) # ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "두트리오"]
poke_tuple.append("파르셀")
print(poke_tuple) # 'tuple' object has no attribute 'append'
