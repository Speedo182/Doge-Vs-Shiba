import React, { useState, useEffect } from 'react';
import Button from './Button';
import Coin from './Coin';
import GuessTracker from './GuessTracker';
import PopUp from './PopUp';

const RedBlueButton = () => {
  const [guess, setGuess] = useState('');
  const [coin, setCoin] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    if (guesses.length === 3) {
      determineWinner();
    }
  }, [guesses]);

  const handleClick = (event) => {
    setGuess(event.target.value);
    const result = flipCoin();
    setCoin(result);
    const newGuesses = [...guesses, { guess: event.target.value, result }];
    setGuesses(newGuesses);
  };

  const flipCoin = () => {
    const coinOptions = ['heads', 'tails'];
    const result = coinOptions[Math.floor(Math.random() * coinOptions.length)];
    return result;
  };

  const determineWinner = () => {
    let dogeCount = 0;
    let shibaCount = 0;
    guesses.forEach((guess) => {
      if (guess.result === 'heads' && guess.guess === 'doge') {
        dogeCount++;
      } else if (guess.result === 'tails' && guess.guess === 'shiba') {
        shibaCount++;
      }
    });

    if (dogeCount > shibaCount) {
      setResult('Doge wins!');
    } else if (shibaCount > dogeCount) {
      setResult('Shiba wins!');
    } else {
      setResult('It\'s a tie!');
    }
    setShowPopUp(true);
  };

  const resetGame = () => {
    setGuess('');
    setCoin('');
    setGuesses([]);
    setResult('');
    setShowPopUp(false);
  };

  return (
    <div>
      <h1>Doge vs Shiba</h1>
      <Button onClick={handleClick} value="doge">Doge</Button>
      <Button onClick={handleClick} value="shiba">Shiba</Button>
      <Coin result={coin} />
      <GuessTracker guesses={guesses} />
      {showPopUp &&
        <PopUp result={result} resetGame={resetGame} />
      }
    </div>
  );
};

export default RedBlueButton;
