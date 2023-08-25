import { useState, useEffect } from 'react';
import Header from './assets/components/Header';
import MainScreen from './assets/components/MainScreen';
import { generateRandomPokemon, shuffleArray } from "./pokemonFetch";

let pokemonList = generateRandomPokemon(8); //wrap in function later
const clickedPokemon = [];

function App() {
  const [currentScore, changeCurrentScore] = useState(0);
  const [currentHigh, changeCurrentHigh] = useState(0);

  function checkForWin() {
    if(currentHigh == 8) alert('you won!');
  }

  function incrementScore() {
    const newScore = currentScore + 1;
    changeCurrentScore(newScore);
    changeCurrentHigh(Math.max(newScore, currentHigh));
  }

  function playRound(e) {
    const pokeId = e.target.closest('.card').dataset.pokemonid;
    if(clickedPokemon.find(el => el == pokeId) == undefined) { //check if pokemon hasn't been clicked
      clickedPokemon.push(pokeId);
      incrementScore();
      shuffleArray(pokemonList);
    }
    else {
      console.log(clickedPokemon, pokeId)
      alert('you lost!'); 
    }
  }

  useEffect(() => { //effect that checks for win(async)
    checkForWin();
  })

  return (
    <>
     <Header currentScore={currentScore} currentHigh={currentHigh}/>
      <MainScreen pokemonList={pokemonList} currentScore={currentScore} onClick = {playRound}/>
    </>
  )
}

export default App
