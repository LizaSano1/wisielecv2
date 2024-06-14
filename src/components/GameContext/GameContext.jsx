import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [words, setWords] = useState([]);
    const [randomWord, setRandomWord] = useState('');
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [attemptsLeft, setAttemptsLeft] = useState(7);
    const [gameOver, setGameOver] = useState(false);
    const [theme, setTheme] = useState('dark'); // Initialize theme to 'dark'

    useEffect(() => {
        fetch('/data/artykulySpozywcze.json')
            .then(response => response.json())
            .then(data => setWords(data))
            .catch(error => console.error('Error fetching words:', error));
    }, []);

    useEffect(() => {
        if (words.length > 0) {
            chooseRandomWord();
        }
    }, [words]);

    useEffect(() => {
        if (randomWord && randomWord.split('').every(letter => selectedLetters.includes(letter))) {
            setGameOver(true);
        }
    }, [selectedLetters, randomWord]);

    const handleLetterSelect = (letter) => {
        if (gameOver) {
            return;
        }
        setSelectedLetters(prevSelectedLetters => [...prevSelectedLetters, letter]);
        if (!randomWord.includes(letter)) {
            setAttemptsLeft(prevAttemptsLeft => prevAttemptsLeft - 1);
            if (attemptsLeft - 1 <= 0) {
                setGameOver(true);
            }
        }
    };

    const chooseRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setRandomWord(words[randomIndex].toUpperCase());
        setSelectedLetters([]);
        setAttemptsLeft(7);
        setGameOver(false);
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const contextValue = {
        randomWord,
        selectedLetters,
        attemptsLeft,
        gameOver,
        handleLetterSelect,
        chooseRandomWord,
        theme,
        toggleTheme,
    };

    return (
        <GameContext.Provider value={contextValue}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);
