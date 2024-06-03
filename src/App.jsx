import './App.css'
import Ilustrations from "./components/Ilustrations/Ilustrations.jsx";
import KeyBoard from "./components/KeyBoard/KeyBoard.jsx";
import {Game} from "./components/Game/Game.jsx";
import {GameOver} from "./components/GameOver/GameOver.jsx";

function App() {

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>Wisielec</h1>
                </header>
                <main>
                    <Game/>
                    <Ilustrations/>
                    <GameOver/>
                    <KeyBoard/>
                </main>
            </div>
        </>
    )
}

export default App
