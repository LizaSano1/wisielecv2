import React from 'react';
import { useGame } from '../../context/GameContext/GameContext';
import './illustration.css';

const Illustration = () => {
  const { attemptsLeft } = useGame();

  return (
    <div className="illustration">
      {/* Tutaj umieść kod do wyświetlenia ilustracji w zależności od liczby pozostałych prób */}
      <p>Attempts Left: {attemptsLeft}</p>
    </div>
  );
};

export default Illustration;
