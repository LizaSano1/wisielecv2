import {useGame} from "../GameContext/GameContext.jsx";

export const GameOver = () => {
    const {gameOver, chooseRandomWord,selectedLetters,randomWord} = useGame()
    return (
        <>
            {
                gameOver &&
                <div className="ResetButton">
                    <h1>Koniec Gry</h1>
                    <h3>
                        {
                            randomWord.split('').every(el=>selectedLetters.includes(el))?"Wygrana🥳🏅":"Przegrana😥💔"
                        }
                    </h3>
                    <button className="reset-button" onClick={() => {
                        chooseRandomWord()
                    }}>Zagraj ponownie
                    </button>
                </div>
            }
        </>
    )
}

GameOver.propTypes = {};