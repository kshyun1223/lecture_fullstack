const fs = require('fs'); // file system 내장 모듈을 commonJS 방식(cjs)으로 불러들여왔다. 
const pokemonObj = { id: 1, name: "이상해씨", type: "풀" }; // pokemonObj JSON 저장하기 위해 수집한 객체방식의 데이터인 것을 가정한다. 
const pokemonJSON = JSON.stringify(pokemonObj, null, 2); // 위 pokemonObj를 일련의 가공처리(JSON 포멧)으로 처리한 값을 pokemonJSON으로 대입했다. // stringify(객체, 인덴팅 방식, 칸) 
fs.writeFile('./pokemonJSON.json',pokemonJSON, (err) => { if(err) throw err; }); 
// file system 에서 지원하는 파일 쓰기(write) === 파일 만들기 함수를 통해, 
// 해당 데이터를 json 방식으로 저장했다. 
// 추후 DB를 관리하는 서버에서 해당 json 파일을 '넘겨받아' 저장할 수 있다. 
