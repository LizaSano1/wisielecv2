import React from 'react';
import PropTypes from 'prop-types';

const WordDisplay = ({ selectedWord, guessedLetters }) => {
  const wordLetters = selectedWord.split("");

  return (
    <div className="word-display">
      {wordLetters.map((letter, index) => (
        <span key={index} className="letter">
          {guessedLetters.has(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

WordDisplay.propTypes = {
  selectedWord: PropTypes.string.isRequired,
  guessedLetters: PropTypes.instanceOf(Set).isRequired,
};

export default WordDisplay;

