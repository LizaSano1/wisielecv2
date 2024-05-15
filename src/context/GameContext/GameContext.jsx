
import React, { createContext, useContext, useState, useEffect } from 'react';
import artykulySpozywcze from '../../data/artykulySpozywcze.json';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(artykulySpozywcze);
  }, []);

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const newWord = words[randomIndex];
    setCurrentWord(newWord);
    setSelectedLetters([]);
    setAttemptsLeft(6);
    setGameOver(false);
  };

  const gameState = {
    currentWord,
    selectedLetters,
    attemptsLeft,
    gameOver,
    chooseRandomWord,
  };

  return <GameContext.Provider value={gameState}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  return useContext(GameContext);
};