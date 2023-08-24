import { useState } from 'react';
import Header from './assets/components/Header';
import MainScreen from './assets/components/MainScreen';

function App() {
  const [currentScore, changeCurrentScore] = useState(0);
  const [currentHigh, changeCurrentHigh] = useState(0);
  const clickedPokemon = [];

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
      incrementScore();
      checkForWin();
    }
      //also change card positions, will add later
    else 
      alert('you lost!'); 
  }

  return (
    <>
     <Header currentScore={currentScore} currentHigh={currentHigh}/>
      <MainScreen onClick = {playRound}/>
    </>
  )
}

export default App
