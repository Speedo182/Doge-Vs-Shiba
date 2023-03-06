import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import Coin from './Coin';

const Result = ({ result, playerSelection, opponentSelection }) => {
  const history = useHistory();

  const handlePlayAgain = () => {
    history.push('/play');
  };

  return (
    <div className="result-container">
      <h1 className="result-heading">{result}</h1>
      <div className="selection-container">
        <h2 className="selection-heading">Your Selection</h2>
        <Coin type={playerSelection} />
      </div>
      <div className="selection-container">
        <h2 className="selection-heading">Opponent's Selection</h2>
        <Coin type={opponentSelection} />
      </div>
      <Button onClick={handlePlayAgain}>Play Again</Button>
    </div>
  );
};

Result.propTypes = {
  result: PropTypes.string.isRequired,
  playerSelection: PropTypes.string.isRequired,
  opponentSelection: PropTypes.string.isRequired,
};

export default Result;
