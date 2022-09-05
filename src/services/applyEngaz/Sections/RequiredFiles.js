import { Checkbox, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import FilesCard from './FilesCard'
import testFile from '../../../Assets/test.pdf'

export default function RequiredFiles() {
    const { t } = useTranslation();
    const language = useSelector(state => state.language.language);

    return (
        <div
            dir={language === "ar" ? "rtl" : "ltr"}
            style={{ display: 'flex', alignContent: 'center', flexDirection: 'column' }}
        >
            <Typography fontSize={'20px'} textAlign={'start'} mb={1} fontWeight='900' sx={{ color: 'balck' }}>
                {t("attachments")}
            </Typography>
            <Typography fontSize={'16px'} textAlign={'start'} mb={3} sx={{
                color: '#656666',
                '@media (max-width: 600px)': {
                    fontSize: '14px',
                },
            }}>
                {t("attachments_notes")}
            </Typography>
            {/* css file: pages/home */}
            <Grid container spacing={6} display='flex' alignItems={'center'}> 
                <Grid item md={4} xs={12} sx={{
                    '@media (max-width: 900px)': {
                        pl: '0 !important',
                    },
                    '@media (max-width: 600px)': {
                        width: '90%',
                    },


                }}>
                    <FilesCard
                        testFile={testFile}
                    />
                </Grid>
                <Grid item md={4} xs={12} sx={{
                    '@media (max-width: 900px)': {
                        pl: '0 !important',
                    },
                    '@media (max-width: 600px)': {
                        width: '90%',
                    },

                }}>
                    <FilesCard
                        testFile={testFile}
                    />
                </Grid>
                <Grid item md={4} xs={12} sx={{
                    '@media (max-width: 900px)': {
                        pl: '0 !important',
                    },
                    '@media (max-width: 600px)': {
                        width: '90%',
                    },
                }}>
                    <FilesCard
                        testFile={testFile}
                    />
                </Grid>
            </Grid>
            <div
                dir={language === "ar" ? "rtl" : "ltr"}
                style={{ display: 'flex', alignItems: 'center', fontSize: '14px', marginTop: '24px' }}>
                <Checkbox size='large' />
                {t("T&C")}
            </div>
        </div >
    )
}
