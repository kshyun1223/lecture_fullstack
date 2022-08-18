let studentList = ["강예훈", "김성현", "류주완", "마근원", "문예찬", "박종인", "박재형", "송형주", "양상희", "원두진", "유민호", "이상호", "이소영", "이은수", "정동욱", "정윤환", "정정원", "지영빈", "한용준", "황초영", "김근수", "김승현", "김지애", "전형민", "정연주", "이아연", "최화연", "한가람"
];

// studentList 배열이 초기화 되었다. 훈련생들을 순서대로 처리하기 위해 만들어진 배열인 것을 예상할 수 있는데, 여기에 '공욱재' 라는 학생이 전학을 왔다. 번호는 맨 마지막 번호를 배치하고자 한다.
// 참고사항: 함수로 작성을 해보자

console.log(studentList.length);

// Q 1 위 배열에서 마지막 원소(마지막 번호를 부여받은)는 "한가람" 이다. "한가람" 원소의 인덱스 값이 얼마인지 출력하시오.
// Q 1-1 length를 직접 만들 수 있는가?
studentList.indexOf('한가람');

// Q 2 "한가람" 원소 다음으로 "공욱재"를 추가할 방법을 찾으시오.
// Q 2 : push를 안 쓰고 할 수 있는가?
studentList.push('공욱재');

// Q 3 이름만 부르기 민망해 ' ooo 님' 이라고 붙여주기로 했다. 본 배열 studentList의 모든 원소 각각에 '님'이라는 호칭이 붙도록 제어하시오.
// 메모: 반복문. 인덱스 하나를 호출. 님 붙임. 랭스만큼 반복.
for(i = 0; i < studentList.length; i++) {
 studentList[i] = studentList[i] + '님';
}

// console.log(studentList);

