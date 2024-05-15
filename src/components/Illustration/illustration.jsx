import React from 'react';
import { useGame } from '../context/GameContext/GameContext';

const Illustration = () => {
  const { gameState } = useGame();
  const { attempts } = gameState;

  
};

export default Illustration;
