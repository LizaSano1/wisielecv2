import React, { useState } from 'react';
import obrazki from './obrazki';

const Wisielec = () => {
  const [word, setWord] = useState('wisielec');
  const [guesses, setGuesses] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const makeGuess = (letter) => {
    setGuesses((prevGuesses) => [...prevGuesses, letter]);
    if (word.includes(letter)) {
      setCorrectGuesses((prevCorrectGuesses) => [...prevCorrectGuesses, letter]);
    } else {
      setWrongGuesses((prevWrongGuesses) => prevWrongGuesses + 1);
    }
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
        <button
          key={letter}
          onClick={() => makeGuess(letter)}
          style={{ backgroundColor: correctGuesses.includes(letter) ? 'green' : 'initial' }}
        >
          {letter}
        </button>
      ))}
      {wrongGuesses > 0 && <img src={obrazki[wrongGuesses - 1]} alt="Hangman" />}
      {isGameOver() && <p>Gratulacje! Wygrałeś!</p>}
    </div>
  );
};

export default Wisielec;