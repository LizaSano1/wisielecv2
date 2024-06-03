import {useGame} from "../GameContext/GameContext.jsx";
import image0 from '../../../Wisielec/0.jpg'
import image1 from '../../../Wisielec/1.jpg'
import image2 from '../../../Wisielec/2.jpg'
import image3 from '../../../Wisielec/3.jpg'
import image4 from '../../../Wisielec/4.jpg'
import image5 from '../../../Wisielec/5.jpg'
import image6 from '../../../Wisielec/6.jpg'
import image7 from '../../../Wisielec/7.jpg'
const Ilustrations = () => {
    const {attemptsLeft} = useGame();
    const images = {
        0: image0,
        1: image1,
        2: image2,
        3: image3,
        4: image4,
        5: image5,
        6: image6,
        7: image7,

    };
    return (
        <img src={images[7 - attemptsLeft]} alt="Hangman"/>
    );
};

export default Ilustrations;
