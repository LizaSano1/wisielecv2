import React from 'react';
import { useGame } from '../../context/GameContext/GameContext';

const Keyboard = () => {
  const { handleLetterSelect, selectedLetters, gameOver } = useGame();

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <div className="keyboard">
      {alphabet.split('').map(letter => (
        <button 
          key={letter} 
          onClick={() => handleLetterSelect(letter)}
          disabled={selectedLetters.includes(letter) || gameOver}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
