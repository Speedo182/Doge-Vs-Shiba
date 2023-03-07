import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Login from './components/Login';
import FlipCoin from './components/FlipCoin';
import GuessTracker from './components/GuessTracker';
import PopUp from './components/PopUp';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [playerGuess, setPlayerGuess] = useState('');
  const [computerGuess, setComputerGuess] = useState('');
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    if (playerScore === 5 || computerScore === 5) {
      setShowPopUp(true);
    }
  }, [playerScore, computerScore]);

  const handleLogin = (username) => {
    setLoggedIn(true);
    setPlayerGuess('');
    setComputerGuess('');
    setResult('');
    setPlayerScore(0);
    setComputerScore(0);
    setShowPopUp(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setPlayerGuess('');
    setComputerGuess('');
    setResult('');
    setPlayerScore(0);
    setComputerScore(0);
    setShowPopUp(false);
  };

  const handleGuess = (guess) => {
    setPlayerGuess(guess);
    const randomGuess = Math.floor(Math.random() * 2) === 0 ? 'Doge' : 'Shiba';
    setComputerGuess(randomGuess);
    if (guess === 'Doge' && randomGuess === 'Shiba') {
      setResult('lose');
      setComputerScore(computerScore + 1);
    } else if (guess === 'Shiba' && randomGuess === 'Doge') {
      setResult('lose');
      setComputerScore(computerScore + 1);
    } else if (guess === randomGuess) {
      setResult('tie');
    } else {
      setResult('win');
      setPlayerScore(playerScore + 1);
    }
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="App">
      <Header loggedIn={loggedIn} onLogout={handleLogout} />
      {!loggedIn && <Login onLogin={handleLogin} />}
      {loggedIn && (
        <div>
          <FlipCoin onGuess={handleGuess} />
          <GuessTracker
            playerGuess={playerGuess}
            computerGuess={computerGuess}
            result={result}
            playerScore={playerScore}
            computerScore={computerScore}
          />
        </div>
      )}
      {showPopUp && <PopUp onClose={handleClosePopUp} />}
    </div>
  );
}

export default App;
