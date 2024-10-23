import './App.css'
import HomePage from './Components/HomePage'
import GamePlay from './Components/GamePlay'
import { useState } from 'react';

function App() {

  const [isGameStarted, setGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <div>
      {isGameStarted ? <GamePlay /> : <HomePage toggle={toggleGamePlay} />}
    </div>

  )
}

export default App
