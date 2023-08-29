import { useState, useEffect } from "react";
import Header from "./assets/components/Header";
import MainScreen from "./assets/components/MainScreen";
import StartScreen from "./assets/components/StartScreen";
import EndScreen from "./assets/components/EndScreen";
import { generateRandomPokemon, shuffleArray } from "./pokemonFetch";
const clickedPokemon = [];

// number of pokemon cards for each difficulty
const difficulty = {
  Easy: 4,
  Medium: 8,
  Hard: 12,
};

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [gameState, setGameState] = useState("Start");
  const [gameMaxCards, setMaxCards] = useState(difficulty.Easy);
  const [pokemonList, setPokemonList] = useState(0);

  function checkForWin() {
    if (currentScore == gameMaxCards) changeGameState("EndWin");
  }

  function changeGameState(newState) {
    setGameState(newState);
  }

  function incrementScore() {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);
  }

  function playRound(e) {
    const pokeId = e.target.closest(".card").dataset.pokemonid;
    if (clickedPokemon.find((el) => el == pokeId) == undefined) {
      //check if pokemon hasn't been clicked
      clickedPokemon.push(pokeId);
      incrementScore();
      shuffleArray(pokemonList);
    } else {
      changeGameState("EndLoss");
    }
  }

  function onGameStart(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    let settingDifficulty;
    for (var [key, value] of formData.entries()) {
      settingDifficulty = value;
    }

    switch (settingDifficulty) {
      case "Easy":
        setMaxCards(difficulty.Easy);
        setPokemonList(generateRandomPokemon(difficulty.Easy));
        break;
      case "Meduim":
        setMaxCards(difficulty.Medium);
        setPokemonList(generateRandomPokemon(difficulty.Medium));
        break;
      case "Hard":
        setMaxCards(difficulty.Hard);
        setPokemonList(generateRandomPokemon(difficulty.Hard));
        break;
      default:
        console.error("No such difficulty! Error!");
        break;
    }

    changeGameState("Game");
  }

  function onPlayAgain() {
    setCurrentScore(0);
    changeGameState("Start");
  }

  useEffect(() => {
    //effect that checks for win(async)
    checkForWin();
  });

  const screen =
    gameState === "Start" ? (
      <StartScreen onSubmit={onGameStart} />
    ) : gameState === "Game" ? (
      <MainScreen
        pokemonList={pokemonList}
        currentScore={currentScore}
        maxCards={gameMaxCards}
        onClick={playRound}
      />
    ) : gameState === "EndWin" ? (
      <EndScreen onClick={onPlayAgain} isWin={true} />
    ) : (
      <EndScreen onClick={onPlayAgain} isWin={false} />
    );

  return (
    <>
      <Header/>
      {screen}
    </>
  );
}

export default App;
