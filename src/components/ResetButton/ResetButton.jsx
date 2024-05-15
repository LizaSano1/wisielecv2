

import React from 'react';
import { useGame } from '../../context/GameContext/GameContext';

const ResetButton = () => {
  const { chooseRandomWord } = useGame();

  const resetGame = () => {
    chooseRandomWord();
  };

  return (
    <div className="reset-button">
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default ResetButton;
