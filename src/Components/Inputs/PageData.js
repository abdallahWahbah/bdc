import React from 'react'
import FormInputCreator from "../Inputs/FormInputCreator";
import { CustomerInformation, FinancialEligibilityInformation, Generaleligibilityinformation, UpcomingStep } from './Schema';

import Grid from "@mui/material/Grid";

export const AdditionalFormInputCreator1 = ({errors, values, handleChange}) => {

    const formContent1 = <FormInputCreator 
                            jsonObject={CustomerInformation} 
                            errors={errors} 
                            values={values}
                            handleChange={handleChange}/>;

    return (
        <div>
            <Grid container spacing={4}>
                {formContent1}
            </Grid>
        </div>
        )
}

export const AdditionalFormInputCreator2 = ({errors, values, handleChange}) => {

    const formContent2 = <FormInputCreator 
                            jsonObject={FinancialEligibilityInformation} 
                            errors={errors} 
                            values={values}
                            handleChange={handleChange}/>;

    return (
        <div>
            <Grid container spacing={4}>
                {formContent2}
            </Grid>
        </div>
    )
}

export const AdditionalFormInputCreator3 = ({errors, values, handleChange}) => {

    const formContent3 = <FormInputCreator 
                            jsonObject={Generaleligibilityinformation} 
                            errors={errors} 
                            values={values}
                            handleChange={handleChange}/>;

    return (
        <div>
            <Grid container spacing={4}>
                {formContent3}
            </Grid>
        </div>
    )
}

export const AdditionalFormInputCreator4 = ({errors, values, handleChange}) => {

    const formContent4 = <FormInputCreator 
                            jsonObject={UpcomingStep} 
                            errors={errors} 
                            values={values}
                            handleChange={handleChange}/>;

    return (
        <div>
            <Grid container spacing={4}>
                {formContent4}
            </Grid>
        </div>
    )
}
