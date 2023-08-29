import Card from "./Card";

function MainScreen({ pokemonList, currentScore, maxCards, onClick }) {
  const cards = pokemonList.map((pokemon) => {
    return (
      <div key={pokemon}>
        <Card onClick={onClick} pokemonId={pokemon} />
      </div>
    );
  });

  return (
    <div id="game-wrapper" className="screen-wrapper">
      <h2>
        {currentScore}/{maxCards}
      </h2>
      <div className="card-wrapper">{cards}</div>
    </div>
  );
}

export default MainScreen;
