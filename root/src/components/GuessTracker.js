import React, { useState } from "react";
import Button from "./Button";
import Coin from "./Coin";

const GuessTracker = () => {
  const [coinSide, setCoinSide] = useState(null);
  const [userGuess, setUserGuess] = useState(null);
  const [result, setResult] = useState(null);

  const handleGuess = (guess) => {
    setUserGuess(guess);
    flipCoin();
  };

  const flipCoin = () => {
    const sides = ["heads", "tails"];
    const randomIndex = Math.floor(Math.random() * 2);
    const randomSide = sides[randomIndex];
    setCoinSide(randomSide);
    checkResult(randomSide);
  };

  const checkResult = (side) => {
    if (userGuess === side) {
      setResult("You Win!");
    } else {
      setResult("You Lose!");
    }
  };

  return (
    <div className="guess-tracker">
      <h2>Guess the Coin Toss</h2>
      <Coin side={coinSide} />
      <h3>{result}</h3>
      <Button onClick={() => handleGuess("heads")}>Heads</Button>
      <Button onClick={() => handleGuess("tails")}>Tails</Button>
    </div>
  );
};

export default GuessTracker;
