import React from 'react';
import { useGame } from '../context/GameContext/GameContext';

const WordDisplay = () => {
  const { gameState } = useGame();
  const { randomWord, selectedLetters } = gameState;

};

export default WordDisplay;
