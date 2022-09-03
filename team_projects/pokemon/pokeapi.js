const pokeAPI = function(number){
  const _BASIC_URL = `https://pokeapi.co/api/v2/pokemon/` + number;
  const request = new XMLHttpRequest();
    request.open("GET", _BASIC_URL);
    request.responseType = "json";
    request.send();
    request.addEventListener('load', () => {
      const _POKEMON_API = request.response;    
      let name = _POKEMON_API.name;
      let imgFront = _POKEMON_API.sprites.front_default
      let imgBack = _POKEMON_API.sprites.back_default
      let typeOne = _POKEMON_API.types[0].type.name;
      let typeTwo = _POKEMON_API.types[1].type.name;
      let abilityOne = _POKEMON_API.abilities[0].ability.name;
      let abilityTwo = _POKEMON_API.abilities[1].ability.name; 
      root.innerHTML = `
        <ul>
          <li>이름: ${name}</li>
          <br>
          <li>앞모습</li>
          <img src="${imgFront}" alt="${name} imgFront">
          <br>
          <li>뒷모습</li>
          <img src="${imgBack}" alt="${name} imgBack">
          <br>
          <li>첫 번째 속성: ${typeOne}</li>
          <br>
          <li>두 번째 속성: ${typeTwo}</li>
          <br>
          <li>첫 번째 능력: ${abilityOne}</li>
          <br>
          <li>두 번째 능력: ${abilityTwo}</li>
        </ul>
      `
    });
}
pokeAPI(1);