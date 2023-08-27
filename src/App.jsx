import { useState, useEffect } from 'react';
import Header from './assets/components/Header';
import MainScreen from './assets/components/MainScreen';
import StartScreen from './assets/components/StartScreen';
import { generateRandomPokemon, shuffleArray } from "./pokemonFetch";

let pokemonList = generateRandomPokemon(8); //wrap in function later
const clickedPokemon = [];

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentHigh, setCurrentHigh] = useState(0);
  const [gameState, setGameState] = useState('Start');

  function checkForWin() {
    if(currentHigh == 8) alert('you won!');
  }

  function changeGameState(newState) {
    setGameState(newState);
  }

  function incrementScore() {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);
    setCurrentHigh(Math.max(newScore, currentHigh));
  }

  function playRound(e) {
    const pokeId = e.target.closest('.card').dataset.pokemonid;
    if(clickedPokemon.find(el => el == pokeId) == undefined) { //check if pokemon hasn't been clicked
      clickedPokemon.push(pokeId);
      incrementScore();
      shuffleArray(pokemonList);
    }
    else {
      alert('you lost!'); 
    }
  }

  function onGameStart() {
    changeGameState('Game');
  }

  useEffect(() => { //effect that checks for win(async)
    checkForWin();
  })

  const screen = gameState === 'Start' ? 
  <StartScreen onSubmit={onGameStart}/> :
  <MainScreen pokemonList={pokemonList} currentScore={currentScore} onClick = {playRound}/>;

  return (
    <>
     <Header currentScore={currentScore} currentHigh={currentHigh}/>
      {screen}
    </>
  )
}

export default App;
