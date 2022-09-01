import { Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return ( // css file: comp/footer
        <div className='footer'>
            <Typography className='footer-text'> {t('copyright_footer')}</Typography>
        </div>
    )
}

export default Footer