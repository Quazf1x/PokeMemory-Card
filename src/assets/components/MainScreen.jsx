import Card from "./Card";
import { generateRandomPokemon } from "../../pokemonFetch";
function MainScreen() {

  const pokemons = generateRandomPokemon(8);
  const cards = pokemons.map(pokemon => {
    return (
      <div key={pokemon}>
      <Card pokemonId = {pokemon}/>
      </div>
    )
  })

  return (
    <div className="game-wrapper">
      <h2>0/5</h2>
      <div className="card-wrapper">
        {cards}
      </div>
    </div>
  )
}

export default MainScreen;