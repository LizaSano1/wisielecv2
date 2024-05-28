import React from 'react';
import PropTypes from 'prop-types';

const Keyboard = ({ guessedLetters, onClick }) => {
  const keyboard = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="keyboard">
      {keyboard.map((letter, index) => (
        <button
          key={index}
          className="letter-button"
          onClick={() => onClick(letter)}
          disabled={guessedLetters.has(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

Keyboard.propTypes = {
  guessedLetters: PropTypes.instanceOf(Set).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Keyboard;
