import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import France from '../../assets/flags/france.png';
import England from '../../assets/flags/england.png';
import './languageSelector.css';

export const LanguageSelector = () => {
    const [t, i18n] = useTranslation('common');

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLanguage);
    };

    const currentLanguage = i18n.language;

    const getFlag = (language) => {
        switch (language) {
            case 'fr':
                return France;
            case 'en':
                return England;
            default:
                return France;
        }
    };

    return (
        <div className="language-selector">
            <img 
                src={getFlag(currentLanguage)} 
                alt={currentLanguage} 
                className="language-selector__flag" 
                onClick={changeLanguage} 
            />
        </div>
    );
};
