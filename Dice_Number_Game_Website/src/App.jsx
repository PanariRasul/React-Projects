import './App.css'
import HomePage from './Components/HomePage'
import SecondPage from './Components/SecondPage'
import { useState } from 'react';

function App() {

  const [isGameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <div>
      {isGameStarted ? <SecondPage /> : <HomePage toggle={toggleGamePlay} />}
    </div>

  )
}

export default App
