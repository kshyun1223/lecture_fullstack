const pokemon = require('pokemon');
const fs = require('fs');


class Pokemon {
  constructor(id, name, koreaName) {
    this.id = id;
    this.name = name;
    this.koreaName = koreaName;
  }
}

console.log(pokemon.all().length);


function structPokemonObjectReturnArray(data) {
  const setData = [];
  data.all().forEach((element, index) => {
    let temp = new Pokemon(index+1, data.getName(index+1), data.getName(index+1, "ko"));
    setData.push(temp);
  });
  return setData;
}

console.log(structPokemonObjectReturnArray(pokemon));

function makePokemonJson(arr) {
  let setJson = JSON.stringify(arr, null, 2);
  fs.writeFile('./pokemon.json', setJson, 'utf-8', (err) => {
    if(err) throw err;
  });
}

let makeTemp = structPokemonObjectReturnArray(pokemon);
makePokemonJson(makeTemp);