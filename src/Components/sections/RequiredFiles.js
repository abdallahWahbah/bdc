import { Box, Button, Card, CardContent, Checkbox, Grid, Typography } from '@mui/material'
import React from 'react'
import FilesCard from './FilesCard'

export default function RequiredFiles() {
    return (
        <div
            dir='rtl'
            style={{ display: 'flex', alignContent: 'center', flexDirection: 'column' }}
        >
            <Typography fontSize={'17px'} textAlign={'right'} mb={1} fontWeight='900' sx={{ color: 'balck' }}>
                المرفقات
            </Typography>
            <Typography fontSize={'16px'} textAlign={'right'} mb={3} sx={{ color: '#656666' }}>
                الرجاء تحميل النموذج الخاص بكل ملف من خلال الضغط على زر تحميل النموذج ثم تعبئته ورفعه من خلال الضغط على زر ارفاق المستند
            </Typography>
            <Grid container spacing={6}>
                <Grid item md={4}>
                    <FilesCard />
                </Grid>
                <Grid item md={4}>
                    <FilesCard />
                </Grid>
                <Grid item md={4}>
                    <FilesCard />
                </Grid>
            </Grid>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', marginTop: '24px' }}>
                <Checkbox size='large' /> أوافق بتفويض بنك القاهرة بأجراء أستعلام أى سكور اللازمة لدراسة والزيارات وجمبع الأستعلامات وتنفيذ طلب القرض
            </div>
        </div >
    )
}
