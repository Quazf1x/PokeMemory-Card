import { useState } from 'react'
import Header from './assets/components/Header'

function App() {
  const [currentScore, changeCurrentScore] = useState(0);
  const [currentHigh, changeCurrentHigh] = useState(0);

  return (
    <>
     <Header currentScore={currentScore} currentHigh={currentHigh}/>
    </>
  )
}

export default App
