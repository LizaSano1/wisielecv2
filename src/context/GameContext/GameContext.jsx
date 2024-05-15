import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {

}
export const useGame = () => {
  return useContext(GameContext);
};
