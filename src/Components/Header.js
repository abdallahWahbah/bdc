import React, {useState} from 'react'
import Logo from '../Assets/logo.png'
import {useNavigate} from 'react-router-dom'

const Header = () => 
{
    const [language, setLanguage] = useState("arabic");
    const navigate = useNavigate();

    const changeLanguage = () =>
    {
        setLanguage(language === "arabic" ? "english" : "arabic")
    }

    return ( // css file: comp/header
        <div className='header'>
            <div className='logo__container'>
                <img  className='header__logo' src={Logo} alt="logo" onClick={() => navigate("/")}/>
            </div>
            <button className='header__button' onClick={changeLanguage}>{language === "arabic" ? "EN" : "AR"}</button>
        </div>
    )
}

export default Header