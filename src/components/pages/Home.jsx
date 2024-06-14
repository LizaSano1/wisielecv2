import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Witaj w grze Wisielec!</h1>
            <Link to="/game">
                <button>Zacznij grę</button>
            </Link>
        </div>
    );
};

export default Home;