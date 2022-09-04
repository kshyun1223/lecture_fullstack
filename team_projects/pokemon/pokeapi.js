const pokeAPI = function(number, element){
  const _BASIC_URL = `https://pokeapi.co/api/v2/pokemon/` + number;
  const request = new XMLHttpRequest();
    request.open("GET", _BASIC_URL);
    request.responseType = "json";
    request.send();
    request.addEventListener('load', () => {
      const _POKEMON_API = request.response;    
      let name = _POKEMON_API.name;
      let imgFront = _POKEMON_API.sprites.front_default
      // let imgBack = _POKEMON_API.sprites.back_default
      let typeOne = _POKEMON_API.types[0].type.name;
      let typeTwo = _POKEMON_API.types[1].type.name;
      let abilityOne = _POKEMON_API.abilities[0].ability.name;
      let abilityTwo = _POKEMON_API.abilities[1].ability.name; 
      element.innerHTML = `
        <div id="card" style="
          width: 15vmax;
          height: 20vmax;
          border: 1px solid pink;
        ">
          <img src="${imgFront}" alt="${name} imgFront">
        </div>
        <div id="title" style="
          width: 15vmax;
          border: 1px solid pink;
        ">
          이름: ${name}
        </div>
        <div id="text" style="
          width: 15vmax;
          height: 15vmax;
          border: 1px solid pink;
        ">
          속성 1: ${typeOne}
          속성 2: ${typeTwo}
          능력 1: ${abilityOne}
          능력 2: ${abilityTwo}
        </div>
      `
    });
}
pokeAPI(number, element);
