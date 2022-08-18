import React from 'react'
import FormInputCreator from "../Inputs/FormInputCreator";
import { CustomerInformation, 
        FinancialEligibilityInformation, 
        Generaleligibilityinformation, 
        UpcomingStep1, 
        UpcomingStep2,
        viewEnjazJson } from './Schema';
import { useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";

export const CustomerInformationPage = ({errors, values, handleChange}) => {
    const language = useSelector(state => state.language.language);

    const formContent1 = <FormInputCreator 
                            jsonObject={CustomerInformation} 
                            errors={errors} 
                            values={values}
                            handleChange={handleChange}/>;

    return (
        <div>
            <Grid container spacing={3} dir={language === "ar" ? "rtl" : "ltr"}>
                {formContent1}
            </Grid>
        </div>
        )
}

export const FinancialEligibilityInformationPage = ({errors, values, handleChange}) => {
    const language = useSelector(state => state.language.language);

    const formContent2 = <FormInputCreator 
                            jsonObject={FinancialEligibilityInformation} 
                            errors={errors} 
                            values={values}
                            handleChange={handleChange}/>;

    return (
        <div>
            <Grid container spacing={3} dir={language === "ar" ? "rtl" : "ltr"}>
                {formContent2}
            </Grid>
        </div>
    )
}

export const GeneraleligibilityinformationPage = ({errors, values, handleChange}) => {
    const language = useSelector(state => state.language.language);

    const formContent3 = <FormInputCreator 
                            jsonObject={Generaleligibilityinformation} 
                            errors={errors} 
                            values={values}
                            handleChange={handleChange}/>;

    return (
        <div>
            <Grid container spacing={3} dir={language === "ar" ? "rtl" : "ltr"}>
                {formContent3}
            </Grid>
        </div>
    )
}

export const UpcomingStepPage1 = ({errors, values, handleChange}) => {
    const language = useSelector(state => state.language.language);

    const formContent4 = <FormInputCreator 
                            jsonObject={UpcomingStep1} 
                            errors={errors} 
                            values={values}
                            handleChange={handleChange}/>;

    return (
        <div>
            <Grid container spacing={3} dir={language === "ar" ? "rtl" : "ltr"}>
                {formContent4}
            </Grid>
        </div>
    )
}

export const UpcomingStepPage2 = ({errors, values, handleChange, getFieldProps}) => {
    const language = useSelector(state => state.language.language);

    const formContent5 = <FormInputCreator 
                            jsonObject={UpcomingStep2} 
                            errors={errors} 
                            values={values}
                            handleChange={handleChange}
                            getFieldProps={getFieldProps}/>;

    return (
        <div>
            <Grid container spacing={3} dir={language === "ar" ? "rtl" : "ltr"}>
                {formContent5}
            </Grid>
        </div>
    ) 
}