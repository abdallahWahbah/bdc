import React, {useState, useEffect} from 'react'
import Logo from '../Assets/logo.png'
import {useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {languageActions} from '../store/languageSlice';

const Header = () =>
{
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("arabic");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() =>
    {
        i18n.changeLanguage("ar");
        dispatch(languageActions.setLanguage("ar"));
        setLanguage("arabic");
    }, [])

    const handleClick = (lang) =>
    {
        console.log(lang)
        i18n.changeLanguage(lang.toLowerCase());
        dispatch(languageActions.setLanguage(lang.toLowerCase()));
        setLanguage(language === "arabic" ? "english" : "arabic")
    }

    return ( // css file: comp/header
        <div className='header' dir={language === "arabic" ? "rtl" : "ltr"}>
            <div className={`logo__container ${language === "arabic" ?  "translateNegativeX":"translatePositiveX" }`}>
                <img  className='header__logo' src={Logo} alt="logo" onClick={() => navigate("/")}/>
            </div>
            <button className='header__button' onClick={() => handleClick(language === "arabic" ? "EN" : "AR")}>
                {language === "arabic" ? "EN" : "اللغة العربية"}
            </button>
        </div>
    )
}

export default Header