import Card from "./Card";

function MainScreen({ pokemonList, currentScore, onClick }) {

  const cards = pokemonList.map(pokemon => {
    return (
      <div key={pokemon}>
      <Card onClick={onClick} pokemonId = {pokemon}/>
      </div>
    )
  })

  return (
    <div id="game-wrapper" className="screen-wrapper">
      <h2>{currentScore}/8</h2>
      <div className="card-wrapper">
        {cards}
      </div>
    </div>
  )
}

export default MainScreen;