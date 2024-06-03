import {useGame} from "../GameContext/GameContext.jsx";

const Keyboard = () => {
    const keyboard = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ".split("");
    const {selectedLetters, handleLetterSelect,} = useGame();
    return (
        <div className="keyboard">
            <div className="keyboardFlex">
                {keyboard.map((letter, index) => (
                    <button
                        key={index}
                        className="letter-button"
                        onClick={(e) => {
                            if(!e.currentTarget.disabled){
                                handleLetterSelect(letter)
                            }
                        }}
                        disabled={selectedLetters.includes(letter)}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
};


export default Keyboard;
