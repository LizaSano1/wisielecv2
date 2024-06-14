
import './App.css';
import Ilustrations from "./components/Ilustrations/Ilustrations.jsx";
import KeyBoard from "./components/KeyBoard/KeyBoard.jsx";
import { Game } from "./components/Game/Game.jsx";
import { GameOver } from "./components/GameOver/GameOver.jsx";
import { useGame } from "./components/GameContext/GameContext.jsx";

function App() {
  const { theme, toggleTheme } = useGame(); 

  return (
    <div className={`App ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <header className="App-header">
        <h1>Wisielec</h1>
        <button className="theme-button" onClick={toggleTheme}>
          Switch Theme
        </button>
      </header>
      <main>
        <Game />
        <Ilustrations />
        <GameOver />
        <KeyBoard />
      </main>
    </div>
  );
}
export default App;