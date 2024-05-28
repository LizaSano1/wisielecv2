import React from 'react';
import { GameProvider } from './components/GameContext/GameContext';
import Illustration from './components/Illustration/illustration';
import WordDisplay from './components/WordDisplay/wordDisplay';
import Keyboard from './components/Keyboard/KeyBoard';
import ResetButton from './components/ResetButton/ResetButton';
import ThemeButton from './components/ThemeButton/ThemeButton';
import LanguageButton from './components/LanguageButton/LanguageButton';

function App() {
  return (
    <GameProvider>
      <div className="App">
        <header className="App-header">
          <h1>Hangman Game</h1>
          <ThemeButton />
          <LanguageButton />
        </header>
        <main>
          {/* <Game /> */}
          <Illustration />
          <WordDisplay />
          <Keyboard />
          <ResetButton />
        </main>
      </div>
    </GameProvider>
  );
}

export default App;
