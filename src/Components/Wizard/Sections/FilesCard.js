import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import { Button, Card, CardContent, CardHeader, Divider } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function FilesCard({testFile}) {
    const { t } = useTranslation();
    const language = useSelector(state => state.language.language);

    return (

        <Card dir={language === "ar" ? "rtl" : "ltr"}>
            <CardHeader sx={{
                color: 'balck',
                fontSize: '32px',
                '@media (max-width: 900px)': {
                    fontSize: '26px',

                },
                '@media (max-width: 600px)': {
                    fontSize: '22px',
                },

            }} title={t('file_name')} />
            <Divider />
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                    padding: 3
                }}
            >
                <Button
                    variant='contained'
                    size='large'
                    endIcon={<DownloadIcon sx={{
                        position: 'absolute',
                        left: language === "ar" ? '5px' : 'auto',
                        right: language !== "ar" ? '5px' : 'auto',
                        top: '12px',
                    }} />}

                    sx={{
                        position: 'relative',
                        width: '100%',
                        fontSize: '16px',
                        m: 1
                    }}
                >
                    <a 
                        href={testFile} 
                        download 
                        style={{position: "absolute", top: "0", left: "0", right: "0", bottom: "0"}}
                    >
                    </a>
                    {t('download')}
                </Button>
                <Button
                    variant='contained'
                    size='large'
                    component="label"
                    sx={{
                        position: 'relative',
                        height: '45px !important',
                        backgroundColor: '#666666 !important',
                        width: '100%',
                        fontSize: '16px',
                        m: 1,
                        '&:hover': {
                            backgroundColor: '#afafaf'
                        }
                    }}
                    endIcon={<UploadIcon sx={{
                                position: 'absolute',
                                left: language === "ar" ? '5px' : 'auto',
                                right: language !== "ar" ? '5px' : 'auto',
                                top: '12px',

                            }} />}
                >
                    <input type="file" hidden />
                    {t('upload')}
                </Button>
                
            </CardContent>
        </Card >
    )
}
