import React, { useState, useEffect } from 'react';
import './Button.css';
import coinSound from '../sounds/coin.mp3';
import winSound from '../sounds/win.mp3';
import loseSound from '../sounds/lose.mp3';

const Button = ({ guess, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [coinFlipped, setCoinFlipped] = useState(false);
  const [coinPosition, setCoinPosition] = useState(null);
  const [dogeScore, setDogeScore] = useState(0);
  const [shibaScore, setShibaScore] = useState(0);
  const [dogeVsShibaPrice, setDogeVsShibaPrice] = useState(null);

  useEffect(() => {
    // Use Chainlink API to fetch current Doge Vs Shiba price every 60 minutes
    const fetchPrice = async () => {
      const response = await fetch('https://api.chainlink.com/v1/price');
      const price = await response.json();
      setDogeVsShibaPrice(price);
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isCorrect) {
      // Play win sound and update scores
      const audio = new Audio(winSound);
      audio.play();
      if (guess === 'Doge') {
        setDogeScore(dogeScore + 1);
        setCoinPosition('doge');
      } else if (guess === 'Shiba') {
        setShibaScore(shibaScore + 1);
        setCoinPosition('shiba');
      }
      // Flip coin animation
      setTimeout(() => setCoinFlipped(true), 1000);
      setTimeout(() => setCoinFlipped(false), 3000);
      setTimeout(() => setCoinPosition(null), 4000);
      setTimeout(() => setIsCorrect(false), 5000);
    } else if (guess !== null) {
      // Play lose sound if guess is incorrect
      const audio = new Audio(loseSound);
      audio.play();
    }
  }, [isCorrect]);

  const handleClick = () => {
    if (guess === null) return;
    // Play coin sound and check if guess is correct
    const audio = new Audio(coinSound);
    audio.play();
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    if (guess === 'Doge' && randomNumber === 1) {
      setIsCorrect(true);
    } else if (guess === 'Shiba' && randomNumber === 2) {
      setIsCorrect(true);
    }
    setIsHovered(false);
    onClick();
  };

  return (
    <div
      className={`Button${isHovered ? ' hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="coin">
        {coinFlipped && (
          <div className={`coin-flip ${coinPosition}`}>
            <div className="coin-front"></div>
            <div className="coin-back"></div>
          </div>
        )}
      </div>
      <div className="tracker">
        <div className="score">
          <img src="/images/doge.png" alt="Doge" />
          <pclassName="score-text">{dogeScore}</p>
<p className="vs">VS</p>
<img src="/images/shiba.png" alt="Shiba" />
<p className="score-text">{shibaScore}</p>
</div>
</div>
);
}
}

export default Button;
