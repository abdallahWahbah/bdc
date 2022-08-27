import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () =>
{
    const { t } = useTranslation();

    return ( // css file: comp/footer
        <div className='footer'>
            {t('copyright_footer')}
        </div>
    )
}

export default Footer