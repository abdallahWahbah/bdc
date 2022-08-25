import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../Assets/background.png';
import Card from './Card';
import applyImage from '../Assets/apply.png'
import viewImage from '../Assets/view.png'
import ViewEnjaz from './ViewEnjaz';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

const Home = () =>
{
    const navigate = useNavigate();
    const [showEnjaz, setShowEnjaz] = useState(false);
    const { t } = useTranslation();
    const language = useSelector(state => state.language.language);

    const goToApply = () => navigate("/form");

    return ( // css file: pages/home, base/typo
        <div className='home' dir={language === "ar" ? "rtl" :"ltr"}>
            <div className='home__background--container'>
                <img className='home__background' src={Background} alt='home'/>
                <div className='home__background--text-container'>
                    <h1 className='header__primary'>{t("Enjaz")}</h1>
                    <p className='paragraph' style={{textAlign: language === "ar" ? "rtl" :"ltr"}}>
                        {t("header_description")}
                    </p>
                </div>
            </div>
            <div className='home__actions'>
                <div className='home__actions--container'>
                    <Card onClick={goToApply} applyImage={applyImage} title={t("apply_btn")}/>
                    <Card onClick={()=>setShowEnjaz(true)} applyImage={viewImage} title={t("view_btn")}/>
                </div>
            </div>
            {showEnjaz && (
                <ViewEnjaz closeEnjaz={() => setShowEnjaz(false)} />
            )}
        </div>
    )
}

export default Home