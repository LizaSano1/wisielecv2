import React, { useState } from 'react';

const Wisielec = () => {
  const [word, setWord] = useState('wisielec');
  const [guesses, setGuesses] = useState([]);

  const makeGuess = (letter) => {
    setGuesses((prevGuesses) => [...prevGuesses, letter]);
  };

  const guessedWord = () => {
    return word.split('').map((letter) => (guesses.includes(letter) ? letter : '_')).join(' ');
  };

  const isGameOver = () => {
    return word.split('').every((letter) => guesses.includes(letter));
  };

  return (
    <div>
      <p>{guessedWord()}</p>
      {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
        <button key={letter} onClick={() => makeGuess(letter)}>
          {letter}
        </button>
      ))}
      {isGameOver() && <p>Gratulacje! Wygrałeś!</p>}
    </div>
  );
};

export default Wisielec;