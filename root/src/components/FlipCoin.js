import React, { useState, useEffect } from "react";
import Button from "./Button";
import Coin from "./Coin";

const FlipCoin = () => {
  const [coinSide, setCoinSide] = useState(null);
  const [dogeScore, setDogeScore] = useState(0);
  const [shibaScore, setShibaScore] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (dogeScore >= 10) {
      setWinner("Doge");
    } else if (shibaScore >= 10) {
      setWinner("Shiba");
    }
  }, [dogeScore, shibaScore]);

  const flipCoin = () => {
    const result = Math.floor(Math.random() * 2);
    setCoinSide(result === 0 ? "heads" : "tails");

    if (result === 0) {
      setDogeScore((prevScore) => prevScore + 1);
    } else {
      setShibaScore((prevScore) => prevScore + 1);
    }
  };

  const resetGame = () => {
    setCoinSide(null);
    setDogeScore(0);
    setShibaScore(0);
    setWinner(null);
  };

  return (
    <div className="flip-coin">
      <h2>Doge Vs Shiba</h2>
      {winner ? (
        <div className="winner">
          <h3>{winner} wins!</h3>
          <Button onClick={resetGame}>Play Again</Button>
        </div>
      ) : (
        <div>
          <h3>Score: Doge {dogeScore} - Shiba {shibaScore}</h3>
          <Coin side={coinSide} />
          <Button onClick={flipCoin}>Flip Coin</Button>
        </div>
      )}
    </div>
  );
};

export default FlipCoin;
