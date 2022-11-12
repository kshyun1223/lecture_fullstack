const pokeMutable = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀"]
pokeMutable.push("두트리오");
console.log(pokeMutable) // [ '피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '두트리오' ]

const pokeImmutable = ["메타몽", "리자몽", "왕눈해", "토게피", "고오스"]
Object.freeze(pokeImmutable)
pokeImmutable.push("두트리오");
console.log(pokeImmutable) // Cannot add property 5, object is not extensible