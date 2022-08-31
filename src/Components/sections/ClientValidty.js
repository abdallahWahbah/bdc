import { Box, Button, Divider, Grid, Switch, TextField, ToggleButton, Typography } from '@mui/material'
import { textAlign, width } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next'
import clientValidtyImage from '../../Assets/clientValidty.png'
import Card from '../Card'

export default function ClientValidty() {
    const { t } = useTranslation();

    return (
        <Grid
            style={{
                width: '100%',
            }}
            spacing={3}
            pt={'48px'}
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
                            fontSize: '15px',
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
                padding: '24px'
            }}>
                <Grid item xs={12}
                    sx={{
                        width: '450px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        '@media (max-width: 600px)': {
                            width: '100%',
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
                            margin: '24px',

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
                            ></TextField>

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
                                {t('max_value')} :000.0

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
                        flexDirection: 'column'
                    }}
                >
                    <Divider

                        sx={{
                            borderBottomWidth: 4,
                            width: '450px'
                        }}
                    />
                    <Box container spacing={3}
                        sx={{
                            margin: '24px 0px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '450px',
                            padding: '24px',
                            '@media (max-width: 600px)': {
                                width: '100%',
                                padding: '0px',

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
                        />

                    </Box>
                    <Divider

                        sx={{
                            borderBottomWidth: 3,
                            width: '450px'
                        }}
                    />
                </Grid>

            </Grid>
        </Grid >
    )
}
