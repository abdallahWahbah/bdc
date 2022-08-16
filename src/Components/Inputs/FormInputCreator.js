import React from 'react'

import { FormControl, MenuItem, Select, InputLabel, TextField, Grid} from '@mui/material';

const FormInputCreator = ({jsonObject, values, handleChange, errors}) => 
{
    const formContent = jsonObject.map(element =>
    {
        if(element?.name === "companyName" ||
            element?.name === "commercialRegistrationNumber" ||
            element?.name === "contactMobileNumber" ||
            element?.name === "loanAmount" ||
            element?.name === "customerID" ||
            element?.name === "otherCompanyActivity"||
            element?.name === "annualSales"||
            element?.name === "nationalID"||
            element?.name === "suppliersList")
        {
            return (
                <Grid item xs={6}>
                    <TextField
                        // className='custom-field'
                        fullWidth
                        name={element.name}
                        type={element.type ? element.type : "text"}
                        label={element.label}                        
                        sx={element.sx ? element.sx : null}
                        value={values && values[element.name]}
                        onChange={handleChange}
                        />
                        {errors[element.name] ? <div className='wizard__error'>{errors[element.name]}</div> : null}
                </Grid>    
            )
        }
        if(element?.name === "nearestBankBranch" ||
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
        {
            return(
                <Grid item xs={6}>
                    <FormControl fullWidth sx={element.sx ? element.sx : null}>
                        <InputLabel id={element.id}>{element.label}</InputLabel>
                        <Select 
                            labelId={element.id}
                            id={element.selectId}
                            name={element.name}
                            label={element.label}
                            // sx={element.sx ? element.sx : null}
                            value={values[element.name]}
                            onChange={handleChange}
                            >
                                {element.options.map(option =>
                                (
                                    <MenuItem key={option.value} value={option.value} sx={{fontSize: "15px"}}>{option.title}</MenuItem> 
                                ))}
                        </Select>
                        {errors[element.name] ? <div className='wizard__error'>{errors[element.name]}</div> : null}
                    </FormControl>
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