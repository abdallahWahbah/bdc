import { Button, Divider, Grid, Switch, TextField, ToggleButton, Typography } from '@mui/material'
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
                        color: '#656666'
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
                        color: '#666666'
                    }}
                >
                    {t('pelase enter loan amount')}
                </Typography>

            </Grid>

            <Grid container xs={12} sx={{

            }}>
                <Grid item xs={12}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}
                >
                    <div style={{
                        margin: '24px 0px', display: 'flex', justifyContent: 'space-between', maxWidth: '450px',


                    }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}

                        > <TextField
                            className='bigTextField'
                            variant='standard'
                            placeholder='00.00'
                        // sx={{
                        //     fontSize: '18px !important',
                        //     color: '#545454',
                        //     width: '60px',
                        //     textAlign: 'center',
                        //     height: '30px',
                        // }}

                        ></TextField>

                            <Typography
                                fontWeight={'900'}
                                sx={{
                                    mt: 1,
                                    fontSize: '16px',
                                    color: '#959595'
                                }}
                            >
                                الحد الأقصى :000.0

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
                                    fontSize: '16px',
                                    color: '#c4c4c4',
                                    textAlign: 'center'
                                }}
                            >
                                العملة
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
                    <div style={{ margin: '24px 0px', display: 'flex', justifyContent: 'space-between', width: '450px' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}

                        >
                            <Typography
                                mt={1}
                                fontWeight={'900'}
                                sx={{
                                    fontSize: '16px',
                                    color: '#959595'
                                }}
                            >أقصى قيمة
                            </Typography>

                        </div>
                        <Switch
                            defaultChecked
                        />

                    </div>
                    <Divider

                        sx={{
                            borderBottomWidth: 3,
                            width: '450px'
                        }}
                    />
                </Grid>

            </Grid>
        </Grid>
    )
}
