// Pokemon API
function pokemonList () {
  const _BASIC_URL = `https://pokeapi.co/api/v2/pokemon/`;
  const request = new XMLHttpRequest();
    request.open("GET", _BASIC_URL);
    request.responseType = "json";
    request.send();
    request.addEventListener('load', () => {
      const _POKEMON_API = request.response;
      console.log(_POKEMON_API);
      const pokemon = _POKEMON_API.results
      const pokemonList = [];
      for(let i = 0; i < pokemon.length; i++) {
        pokemonList.push(pokemon[i].name);
      }
    });
  console.log(pokemonList);
}

pokemonList();
