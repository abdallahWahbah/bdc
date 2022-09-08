import React, {useState} from 'react'
import { Box, Card, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { CustomerInformationSchema,
        FinancialEligibilityInformationSchema,
        GeneralEligibilityinformationSchema,
        EvaluationEligibilityInformationSchema,
} from '../../Components/Inputs/Schema';

const CompanyDetails = () => 
{
    const location = useLocation();
    const [companyData, setCompanyData] = useState(location.state)
    const language = useSelector(state => state.language.language);
    const { t } = useTranslation();

    const schema = [...CustomerInformationSchema, 
                    ...FinancialEligibilityInformationSchema, 
                    ...GeneralEligibilityinformationSchema, 
                    ...EvaluationEligibilityInformationSchema];

    console.log(companyData)
    // console.log(schema)
    
    return ( // css file: pages/details
        <Box className='details' dir={language === "ar" ? "rtl" : "ltr"}>
            <Typography variant="h3" mb={"20px"} className="details__first--header">
                {t("Company Details")}
            </Typography>

            <Card className='details__card'>
                <Typography variant="h4" gutterBottom className='details__second--header'>
                    {t("Company Information")}
                </Typography>

                <Grid container spacing={2} mt="10px">
                    {schema.map(item => (
                        <>
                            {(item.type === "text" || item.type === "number") && (
                                <Grid item xs={12} sm={6} key={item.label} className='details__item'>
                                    <p className='details__item--label'>{t(item.label)}</p>
                                    <h1 className='details__item--value'>{(t(companyData?.[item.name]) || "-----")}</h1>
                                </Grid>
                            )}
                            {item.type === "select" && (
                                <Grid item xs={12} sm={6} key={item.label} className='details__item'>

                                    <p className='details__item--label'>{t(item.label)}</p>
                                    {item.type === "select" && (
                                        <>
                                        {companyData?.[item.name] ? (
                                            <>
                                                {item.options.map( option => (
                                                    <>
                                                        {companyData?.[item.name] === option.value &&(
                                                            <h1 key={option.title} className='details__item--value'>{t(option.title)}</h1>
                                                        )}
                                                    </>
                                                ))}
                                            </>
                                        ) : (
                                            <h1 className='details__item--value'>-----</h1>
                                        )} 
                                        </>
                                    )}
                                </Grid>
                            )}
                            {item.type === "fieldArray" && (
                                <>
                                <Grid item container spacing={2} xs={12} key={item.label} className='details__item' sx={{marginBottom: "0 !important"}}>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" gutterBottom className='details__second--header'>
                                            {t(item.label)}
                                        </Typography>
                                    </Grid>
                                    {/* {console.log(companyData?.[item.name])} */}
                                    {companyData?.[item.name].map(row => (
                                        <>
                                            {row.ownerType && (
                                                <Grid item xs={6} container className='details__item'>
                                                    <Grid item xs={12}>
                                                        <p className='details__item--label'>{t("Owner Type")}</p>
                                                        <h1 className='details__item--value'>{t(row.ownerType.charAt(0).toUpperCase() + row.ownerType.slice(1))}</h1>
                                                    </Grid>
                                                </Grid>
                                            )}
                                            {row.nationalID && (
                                                // <p>s</p>
                                                <Grid item xs={6} container className='details__item'>
                                                    <Grid item xs={12}>
                                                        <p className='details__item--label'>{t("National ID")}</p>
                                                        <h1 className='details__item--value'>{t(row.nationalID)}</h1>
                                                    </Grid>
                                                </Grid>
                                            )}
                                            {row.name && (
                                                <Grid item xs={3} container className='details__item'>
                                                    <Grid item xs={12}>
                                                        <p className='details__item--label'>{t("Supplier Name")}</p>
                                                        <h1 className='details__item--value'>{t(row.name.charAt(0).toUpperCase() + row.name.slice(1))}</h1>
                                                    </Grid>
                                                </Grid>
                                            )}
                                            {row.crn && (
                                                <Grid item xs={3} container className='details__item'>
                                                    <Grid item xs={12}>
                                                        <p className='details__item--label'>{t("CRN")}</p>
                                                        <h1 className='details__item--value'>{t(row.crn)}</h1>
                                                    </Grid>
                                                </Grid>
                                            )}
                                            {row.amount && (
                                                <Grid item xs={3} container className='details__item'>
                                                    <Grid item xs={12}>
                                                        <p className='details__item--label'>{t("Amount")}</p>
                                                        <h1 className='details__item--value'>{t(row.amount)}</h1>
                                                    </Grid>
                                                </Grid>
                                            )}
                                            {row.soldItems && (
                                                <Grid item xs={3} container className='details__item'>
                                                    <Grid item xs={12}>
                                                        <p className='details__item--label'>{t("Sold Items")}</p>
                                                        <h1 className='details__item--value'>{t(row.soldItems.charAt(0).toUpperCase() + row.soldItems.slice(1))}</h1>
                                                    </Grid>
                                                </Grid>
                                            )}
                                        </>
                                    ))}
                                </Grid>
                                </>
                            )}
                        </>
                    ))}
                </Grid>
            </Card>
        </Box>
    )
}

export default CompanyDetails