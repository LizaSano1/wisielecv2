import React, { createContext, useContext, useState, useEffect } from 'react';

// Utwórz kontekst gry
const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [randomWord, setRandomWord] = useState('');
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(8);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetch('/data/artykulySpozywcze.json')
      .then(response => response.json())
      .then(data => setWords(data))
      .catch(error => console.error('Błąd podczas pobierania słów:', error));
  }, []);

  useEffect(() => {
    if (words.length > 0) {
      chooseRandomWord();
    }
  }, [words]);

  useEffect(() => {
    if (randomWord && randomWord.split('').every(letter => selectedLetters.includes(letter))) {
      setGameOver(true);
    }
  }, [selectedLetters, randomWord]);

  const handleLetterSelect = (letter) => {
    setSelectedLetters(prevSelectedLetters => [...prevSelectedLetters, letter]);
    if (!randomWord.includes(letter)) {
      setAttemptsLeft(prevAttemptsLeft => prevAttemptsLeft - 1);
      if (attemptsLeft - 1 <= 0) {
        setGameOver(true);
      }
    }
  };

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex].toUpperCase());
    setSelectedLetters([]);
    setAttemptsLeft(8);
    setGameOver(false);
  };

  const gameState = {
    randomWord,
    selectedLetters,
    attemptsLeft,
    gameOver,
    handleLetterSelect,
    chooseRandomWord,
  };

  return (
    <GameContext.Provider value={gameState}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);

const Illustration = () => {
  const { attemptsLeft } = useGame();
  const images = {
    1: require('../../images/hangman.jpg'),
    2: require('../../images/s1.jpg'),
    3: require('../../images/s2.jpg'),
    4: require('../../images/s3.jpg'),
    5: require('../../images/s4.jpg'),
    6: require('../../images/s5.jpg'),
    7: require('../../images/s6.jpg'),
    8: require('../../images/s7.jpg'),
    9: require('../../images/s8.jpg'),
    10: require('../../images/s9.jpg'),
  };

  return (
    <img src={images[8 - attemptsLeft].default} alt="Hangman" />
  );
};

export default Illustration;
