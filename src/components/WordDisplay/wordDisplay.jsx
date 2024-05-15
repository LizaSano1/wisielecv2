import React from 'react';
import { useGame } from '../context/GameContext';

const WordDisplay = () => {
  const { randomWord, selectedLetters } = useGame();

  // Logika renderowania wyświetlanego słowa z uwzględnieniem zgadniętych liter
  const renderWord = () => {
    return randomWord.split('').map((letter, index) => (
      <span key={index}>
        {selectedLetters.includes(letter) ? letter : '_'}
      </span>
    ));
  };

  return (
    <div className="word-display">
      <p>Aktualne słowo: {renderWord()}</p>
      <p>Zgadnięte litery: {selectedLetters.join(', ')}</p>
    </div>
  );
};

export default WordDisplay;

