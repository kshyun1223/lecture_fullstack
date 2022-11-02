class ItsMe  { // 소괄호가 붙지 않는다
  constructor(id, name, city) {
    this.id = id;
    this.name = name;
    this.city = city;
  }
}

class ahyeon extends ItsMe { // 클래스 상속
  constructor(id, name, city, eye){
    super(id, name, city);
    this.eye = eye;
  }
}

let arr = ['근수', '상호', '예훈', '두진', '영빈'];

let box = [];
arr.forEach(function(value, index) {
  box.push(new ItsMe(index+1, value, '태초마을'))
})

let boxNim = [];
  box.map((value, index) => {
    boxNim.push(value.name+'님');
  });
console.log(box);

const fs = require('fs');
let saveFile = JSON.stringify(box, null, 2);
  fs.writeFile(`./test.json`, saveFile, 'utf8', (err) => {
    if(err) throw err;
}); 
  // 클래스를 만들어서 데이터를 JSON 방식으로 가공하고 저장했다
  // 클래스라는 틀을 만들어서 key와 value를 넣었다 (= property = field)








// console.log(boxNim)

// let test = new ahyeon(1, '이아연', '대전', true);
// console.log(test)

/* 리액트는 React.Component라는 이름으로 클래스를 지원한다
개발자는 자식 클래스를 만드는 일을 주로 해왔다 */