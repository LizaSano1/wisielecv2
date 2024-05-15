import React from 'react';
import { useGame } from '../context/GameContext/GameContext';

const Keyboard = () => {
  const { gameState, setGameState } = useGame();
  const { selectedLetters, gameOver } = gameState;

};
export default Keyboard;
