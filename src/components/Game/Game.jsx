import {useGame} from "../GameContext/GameContext.jsx";

export  const  Game = ()=>{
    const {randomWord,selectedLetters,gameOver} = useGame()

    return(
        <div className={"guessedLetters"}>
            {
                randomWord.split('').map((val,key)=>{
                    if(selectedLetters.includes(val)||gameOver){
                        return(
                            <div key={key}>{val}</div>
                        )
                    }
                    else{
                        return(
                            <div key={key}>_</div>
                        )

                    }
                })
            }
        </div>
    )
}