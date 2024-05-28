
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageButton.scss';

const LanguageButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className="language-button" onClick={toggleLanguage}>
      {language === 'en' ? 'PL' : 'EN'}
    </button>
  );
};

export default LanguageButton;
