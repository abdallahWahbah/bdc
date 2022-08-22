import React from 'react'

import { FormControl, MenuItem, Select, InputLabel, TextField, Grid, Box, Button, FormGroup, FormControlLabel, Checkbox} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const FormInputCreator = ({jsonObject, values, handleChange, errors, getFieldProps}) => 
{
    const { t } = useTranslation();
    const language = useSelector(state => state.language.language);

    function validateEmail(value) {

        let error;
        
        if (!value) {
        
         error = 'Required';
        
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        
         error = 'Invalid email address';
        
         }
        
        return error;
    }
    const formContent = jsonObject.map(element =>
    {
        if((element?.name === "companyName" ||
            element?.name === "commercialRegistrationNumber" ||
            element?.name === "contactMobileNumber" ||
            element?.name === "loanAmount" ||
            element?.name === "customerID" ||
            element?.name === "otherCompanyActivity"||
            element?.name === "annualSales"||
            element?.name === "nationalID"||
            element?.name === "suppliersList"||
            element?.name === "requestedLoanAmount"||
            element?.name === "requestTrackerNumber")
            && (element?.showWhen?.(values) !== false))
        {
            console.log(errors)
            
            return (
                <Grid item xs={12} md={6} key={element.name}>
                    <TextField
                        className={`${language === "ar" ? "custom-field" : ""}`}
                        fullWidth
                        name={element.name}
                        // validate={validateEmail}
                        type={element.type ? element.type : "text"}
                        label={t(element.label)}                        
                        sx={{height: "60px !important"}}
                        value={values && values[element.name]}
                        onChange={handleChange}
                        />
                        {errors[element.name] ? <div className='wizard__error'>{t(errors[element.name])}</div> : null}
                </Grid>    
            )
        }
        if((element?.name === "nearestBankBranch" ||
            element?.name === "annualSalesTurnover" ||
            element?.name === "capitalAmount" ||
            element?.name === "legalFormOfTheCompany" ||
            element?.name === "personAge" ||
            element?.name === "companyYearsInBusiness" ||
            element?.name === "companyResidence" ||
            element?.name === "companyActivity" ||
            element?.name === "personalBelongings"||
            element?.name === "StabilityCapitalAmount"||
            element?.name === "availabilityFinancialStatements"||
            element?.name === "CompanyIndustrialSector"||
            element?.name === "numberOfHeadcount"||
            element?.name === "companyLicense"||
            element?.name === "yearsOfExperience"||
            element?.name === "secondLevelOfManagement"||
            element?.name === "numberOfBanks"||
            element?.name === "numberYearsRelationWithOurBank" )
            && (element?.showWhen?.(values) !== false))
        {
            return(
                <Grid item xs={12} md={6} key={element.name} className={`${language === "ar" ? "custom-label-field" : ""}`}>
                    <FormControl fullWidth sx={element.sx ? element.sx : null}>
                        <InputLabel id={element.id}>{t(element.label)}</InputLabel>
                        <Select 
                            className={`${language === "ar" ? "custom-field" : ""}`}
                            labelId={element.id}
                            id={element.selectId}
                            sx={{height: "60px !important"}}
                            name={element.name}
                            label={t(element.label)}
                            value={values[element.name]}
                            onChange={handleChange}
                            >
                                {element.options.map(option =>
                                (
                                    <MenuItem dir={language === "ar" ? "rtl" :"ltr"} key={option.value} value={option.value} sx={{fontSize: "15px"}}>{t(option.title)}</MenuItem> 
                                ))}
                        </Select>
                        {errors[element.name] ? <div className='wizard__error'>{t(errors[element.name])}</div> : null}
                    </FormControl>
                </Grid>
            )
        }
        if(element?.name === "text__box")
        {
            return(
                <Box key={element.name} className="wizard__text--box">
                    <p style={{color: "#73716e"}}>{t(element.title)}</p>
                    <h3 className="wizard__text--box-bold" style={{fontSize: "16px"}}>{t(element.details[0])}</h3>
                    <h3 className="wizard__text--box-bold" style={{fontSize: "16px"}}>{t(element.details[1])}</h3>
                </Box>
            )
        }
        if(element.name === "uploadedFile")
        {
            return(
                <Grid item container xs={12} key={element.name} >
                    <Grid item xs={12} md={6}>
                        <Button sx={{marginTop: "20px", display: "block"}} variant="contained" component="label" color="primary">
                            {" "}
                            <input type="file" className='wizard__input--file'/> {t("Upload file")}
                        </Button>
                        {errors[element.name] ? <div className='wizard__error'>{t(errors[element.name])}</div> : null}
                    </Grid>
                </Grid>
            )
        }
        if(element.name === "conditions")
        {
            return(
                <FormGroup sx={element.sx} key={element.name} >
                    <FormControlLabel 
                        control={<Checkbox {...getFieldProps(element.name)} />} 
                        label={t(element.label)}
                        />
                        {errors[element.name] ? <div className='wizard__error'>{t(errors[element.name])}</div> : null}
                    </FormGroup>
            )
        }
        if(element.name === "buttonWide")
        {
            return(
                <Grid item xs={12} md={6} key={element.name}>
                    <Button 
                        key={element.name}
                        className="wizard__button--next"
                        type="submit" 
                        variant="contained" 
                        fullWidth
                        sx={element.sx}
                    >
                        {t(element.title)}
                    </Button>
                </Grid>
            )
        }
        return null;
    })

    return (
        <React.Fragment >
            {formContent}
        </React.Fragment>
    )
}

export default FormInputCreator