let a = 1;
let b = 2; 

// 요구사항: a와 b의 값을 서로 바꾸시오

// 메모 : 
// 값을 불러오는 개념이 핵심이라고 한다
// 그냥 불러오면 어느 하나가 먼저 불러와서 서로 바뀌지 않고 똑같이 될 거 같다
// 값을 저장하면 되지 않을까?

let memory = b;
b = a;
a = memory;

console.log(a); 
console.log(b); 



