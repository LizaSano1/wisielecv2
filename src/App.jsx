import React from 'react';
import './App.css';
import { GameProvider } from './context/GameContext/GameContext';
import Illustration from './components/Illustration/illustration';
import WordDisplay from './components/WordDisplay/wordDisplay';
import Keyboard from './components/Keyboard/KeyBoard';
import ResetButton from './components/ResetButton/ResetButton';



const App = () => {
  return (
    <div className="app">
      <h1>wisielec</h1>
      <GameProvider>
        <div className="game">
          <Illustration />
          <WordDisplay />
          <Keyboard />
          <ResetButton />
        </div>
      </GameProvider>
    </div>
  );
};

export default App;
