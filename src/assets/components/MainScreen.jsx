import Card from "./Card";
import { generateRandomPokemon } from "../../pokemonFetch";
function MainScreen({ onClick }) {

  const pokemons = generateRandomPokemon(8);
  const cards = pokemons.map(pokemon => {
    return (
      <div key={pokemon}>
      <Card onClick={onClick} pokemonId = {pokemon}/>
      </div>
    )
  })

  return (
    <div className="game-wrapper">
      <h2>0/8</h2>
      <div className="card-wrapper">
        {cards}
      </div>
    </div>
  )
}

export default MainScreen;