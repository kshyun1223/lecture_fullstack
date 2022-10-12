const a = ["피카츄", "라이츄", "파이리"];
const b = ["아구몬", "카피몬", "피요몬"];

const c = [...a, ...b];
console.log(c)

class Monster {
  constructor(id, name, type){
    this.id = id;  
    this.name = name;
    this.type = type;   
  }
getName(){
  return this.name;
  };
}

const test = new Monster(1, a[0], "전기", "대전");
console.log(test)
console.log(test.getName())

// class AddMonster extends Monster {
//   constructor(local){
//     super(id,name,type)
//     local;
//   }
// }
