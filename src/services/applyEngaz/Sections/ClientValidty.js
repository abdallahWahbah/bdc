import { Alert, Box, Divider, Grid, Snackbar, Switch, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import clientValidtyImage from '../../../Assets/clientValidty.png'

export default function ClientValidty({ values, errors, handleChange, setFieldValue, setTouched, touched }) {
    const { t } = useTranslation();
    const language = useSelector(state => state.language.language);

    useEffect(() => {
        setFieldValue('noor', 'testttt')
    }, [])

    return (
        <Grid

            spacing={3}
            sx={{
                pt: '48px',
                width: '100%',
                '@media (max-width: 600px)': {
                    paddingBottom: '0px !important',
                    paddingTop: '8px !important',

                },
            }}
            container
        >
            <Grid xs={12} sx={{
                width: '100%', display: 'flex',
                justifyContent: 'space-around'
            }}>
                <img className='card__icon'
                    src={clientValidtyImage} alt="client validty"
                    style={{
                        height: '120px',
                        width: '450px',
                    }}
                />
            </Grid>
            <Grid xs={12} sx={{
                width: '100%', display: 'flex',
                justifyContent: 'space-around'
            }}>
                <Typography
                    p={'24px'}
                    variant='body2'
                    fontSize='18px'
                    sx={{
                        color: '#656666',
                        '@media (max-width: 600px)': {
                            padding: '8px',
                            fontSize: '15px',
                            textAlign: 'right'
                        },
                    }}
                >
                    {t('You are initially eligible for this loan and the maximum loan amount up to In accordance with the terms and conditions.')}
                </Typography>

            </Grid>

            <Grid xs={12} sx={{
                width: '100%', display: 'flex',
                justifyContent: 'space-around'
            }}>
                <Typography
                    fontWeight={'900'}
                    fontSize='18px'
                    sx={{
                        '@media (max-width: 600px)': {
                            fontSize: '15px',
                        },
                        color: '#666666'
                    }}
                >
                    {t('pelase enter loan amount')}
                </Typography>

            </Grid>

            <Grid container xs={12} spacing={3} sx={{
                padding: '24px',
            }}>
                <Grid item xs={12}
                    sx={{
                        width: '450px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        '@media (max-width: 600px)': {
                            width: '100%',
                            padding: '8px !important'

                        },
                    }}
                >
                    <div style={{
                        margin: '24px 0px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        maxWidth: '450px',
                        '@media (max-width: 600px)': {
                            maxWidth: '100%',

                        },


                    }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: 'center',
                                justifyContent: 'center'
                            }}

                        >
                            <TextField
                                className='bigTextField'
                                variant='standard'
                                placeholder='00.00'
                                name="maxLoanAmount"
                                type="number"
                                value={values && values["maxLoanAmount"]}
                                onChange={handleChange}
                            />
                            {errors.maxLoanAmount && (
                                <Snackbar
                                    open={errors.maxLoanAmount}
                                    autoHideDuration={6000}
                                    sx={language === "ar" ? { right: "24px !important", left: "auto !important" } : {}}
                                >
                                    <Alert severity="error" sx={{ width: '100%', fontSize: "14px" }}>
                                        {t(errors.maxLoanAmount)}
                                    </Alert>
                                </Snackbar>
                            )}
                            <Typography
                                fontWeight={'900'}
                                sx={{
                                    mt: 1,
                                    fontSize: '15px',
                                    color: '#959595',
                                    '@media (max-width: 600px)': {
                                        textAlign: 'start',
                                    },
                                }}
                            >
                                {t('max_value')} : {values?.maxValue}

                            </Typography>
                        </div>
                        <Typography
                            fontWeight={'900'}
                            sx={{
                                fontSize: '40px',
                                color: '#c4c4c4'
                            }}
                        >EGP

                            <br></br>
                            <Typography
                                fontWeight={'900'}

                                sx={{
                                    mt: 1,
                                    fontSize: '15px',
                                    color: '#c4c4c4',
                                    textAlign: 'center'
                                }}
                            >
                                {t('currency')}
                            </Typography>
                        </Typography>

                    </div>

                </Grid>
                <Grid item xs={12}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        paddingTop: '8px !important',
                        paddingRight: '0px !important',
                        '@media (max-width: 600px)': {
                            padding: '8px !important',
                        },
                    }}
                >
                    <Divider

                        sx={{
                            borderBottomWidth: 1,
                            width: '450px'
                        }}
                    />
                    <Box container
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '450px',
                            padding: '8px 0',
                            '@media (max-width: 600px)': {
                                width: '100%',
                                padding: '8px 0',
                                margin: '8px 0',

                            },
                        }}>

                        <Typography
                            mt={1}
                            fontWeight={'900'}
                            sx={{
                                fontSize: '15px',
                                color: '#959595'
                            }}
                        >
                            {t('maximum')}
                        </Typography>

                        <Switch
                            name="maxAmount"
                            checked={values.maxAmount === true}
                            onChange={(event, checked) => {

                                if (!values?.maxAmount) setFieldValue('maxLoanAmount', values?.maxValue)
                                if (!!values?.maxAmount) setFieldValue('maxLoanAmount', '')

                                setFieldValue('maxAmount', !values?.maxAmount)

                            }}
                        />

                    </Box>
                    <Divider

                        sx={{
                            borderBottomWidth: 1,
                            width: '450px'
                        }}
                    />
                </Grid>

            </Grid>
        </Grid >
    )
}
