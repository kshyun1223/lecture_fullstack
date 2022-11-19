interface PokemonType {
  id: number
  name: string
  isGet: boolean
}

class Pokemon implements PokemonType {
  id:number
  name:string
  isGet:boolean
  constructor(id: number, name: string, isGet: boolean) {
    this.id = id
    this.name = name
    this.isGet = isGet
  }
}

const pick = new Pokemon(1, "파이리", true)
console.log(pick)