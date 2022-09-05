import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../../Assets/background.png';
import Card from './Card';
import applyImage from '../../Assets/apply.png'
import viewImage from '../../Assets/view.png'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import ViewEnjaz from '../../services/viewEngaz/Pages/ViewEnjaz';

const Home = () => {
    const navigate = useNavigate();
    const [showEnjaz, setShowEnjaz] = useState(false);
    const { t } = useTranslation();
    const language = useSelector(state => state.language.language);

    const goToApply = () => navigate("/form");

    return ( // css file: pages/home, base/typo
        <Grid container spacing={0} className='home' dir={language === "ar" ? "rtl" : "ltr"}>
            <Grid item lg={6} md={6} xs={12} className='home__background--container'>
                <img className='home__background' src={Background} alt='home' />
                <div className='home__background--text-container'>
                    <h1 className='header__primary'>{t("Engaz")}</h1>
                    <p className='paragraph' style={{ textAlign: language === "ar" ? "rtl" : "ltr" }}>
                        {t("header_description")}
                    </p>
                </div>
            </Grid>
            <Grid container item lg={6} md={6} xs={12} spacing={4} className='home__actions--container'>
                <Grid item xl={12} lg={12} md={12} xs={12}>
                    <Card onClick={goToApply} applyImage={applyImage} title={t("apply_btn")} />
                </Grid>
                <Grid item xl={12} lg={12} md={12} xs={12}>

                    <Card onClick={() => setShowEnjaz(true)} applyImage={viewImage} title={t("view_btn")} />
                </Grid>
                {showEnjaz && (
                    <ViewEnjaz closeEnjaz={() => setShowEnjaz(false)} />
                )}
            </Grid>
        </Grid >
    )
}

export default Home