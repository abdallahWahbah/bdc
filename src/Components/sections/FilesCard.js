import { Button, Card, CardContent, CardHeader, Divider } from '@mui/material'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import { saveAs } from "file-saver";

export default function FilesCard() {
    return (

        <Card dir='rtl'>
            <CardHeader sx={{ color: 'balck' }} title='اسم الملف' />
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
                        left: '5px',
                        top: '12px',

                    }} />}

                    sx={{
                        position: 'relative',
                        width: '100%',
                        fontSize: '16px',
                        m: 1
                    }}
                >
                    تحميل النموذج
                </Button>
                <Button
                    variant='contained'
                    size='large'
                    component="label"
                    endIcon={<UploadIcon sx={{
                        position: 'absolute', left: '5px',
                        top: '12px',

                    }} />}
                    sx={{
                        position: 'relative',
                        backgroundColor: '#666666',
                        width: '100%',
                        fontSize: '16px',
                        m: 1,
                        '&:hover': {
                            backgroundColor: '#afafaf'
                        }

                    }}
                >
                    <input type="file" hidden />
                    إرفاق المستند
                </Button>

            </CardContent>
        </Card >
    )
}
