/* 
상수로 선언된 "issue숫자"에는 일련의 객체가 담기도록 개발을 진행한다.
상수 "issue숫자"가 가리키는 데이터는 '인스턴스' 여야한다.
선언된 issue + '숫자' 데이터에 숫자 + 17 에 해당하는 포켓몬스터 데이터를 구하시오.
예를 들면 23번은 40번(23+17) 포켓몬 {id : 40, name : kongminam, koreaName : 공사장}
*/

/* 모듈 호출 */
const path = require("path");
const pokemon = require('../fromDB/pokemon');
const fs = require('fs');



/* 파일명+17에 해당하는 번호(pokemonNumber)를 구하는 함수 */
let issueNumber
let pokemonNumber
(function(){
  filename = path.basename("work/issue4.js", ".js");
  let regex = /[^0-9]/g;
  let issueNumber = filename.replace(regex, "");
  pokemonNumber = (Number(issueNumber)+17-1);
})();
console.log(pokemonNumber)

// console.log(pokemon[0].name); // Bulbasaur

// console.log(pokemon.length); // 905



/* 생성자함수 선언 */
class Pokemon {
  constructor(id, name, koreaName) {
    this.id = id;
    this.name = name;
    this.koreaName = koreaName;
  }
}



/* 생성자함수 호출 */
const work = new Pokemon(pokemon[pokemonNumber].id, pokemon[pokemonNumber].name, pokemon[pokemonNumber].koreaName)
console.log(work)



/* 파일에 내용 추가 */
function makePokemonJson() {
  let setJson = JSON.stringify(work);
  fs.appendFile('issue4.js', setJson, 'utf-8', (err) => {
    if(err) throw err;
  });
}
makePokemonJson();
// pull request
 