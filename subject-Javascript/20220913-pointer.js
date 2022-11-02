let a=[1, 2, 3];
let b=[1, 2, 3];

let c=1;
let d=1;
console.log(b===a); // false
console.log(c===d); // true

b.push(4);
console.log(a, b);

/* 
data type
primitive: number, string, boolean 

`=` : 대입연산자
`===` : 비교연산자

변수에 값을 할당하는 것은 메모리에 데이터를 할당하는 것이다

b와 a가 다른 이유는 변수명이 다르기 때문에 메모리 상에서 주소가 다르기 때문이다

이런 관계를 "얕은 복사"라고 한다

반대는 데이터타입 참조 (reference datatype)에 의해 일어나는 "깊은 복사"이다
*/