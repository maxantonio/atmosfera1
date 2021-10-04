import React, { useContext } from 'react';
import LangContext from '../context/LangContext';

export default function LangSwitch(props) {
  const { switchLang, lang } = useContext(LangContext);

  return (
    <div className='LangSwitch'>
      <button 
        className={lang === 'en' ? 'active' : ''}
        onClick={() => switchLang('en',props.path)}>EN</button>
      <button 
        className={lang === 'es' ? 'active' : ''}
        onClick={() => switchLang('es',props.path)}>ES</button>

    </div>
  )
}