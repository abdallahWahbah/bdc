import React from 'react'
import FormInputCreator from "../Inputs/FormInputCreator";
import { CustomerInformation, 
        FinancialEligibilityInformation, 
        Generaleligibilityinformation, 
        EvaluationEligibilityInformation, 
        UpcomingStep2, } from './Schema';
import { useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";

export const CustomerInformationPage = ({errors, values, handleChange}) => {
    const language = useSelector(state => state.language.language);

    const formContent1 = <FormInputCreator 
                            jsonObject={CustomerInformation} 
                            errors={errors} 
                            values={values}
                            handleChange={handleChange}
                            />;

    return (
        <div>
            <Grid 
                container 
                spacing={3} 
                dir={language === "ar" ? "rtl" : "ltr"}  
                className={language === "ar" ? "remove__left--padding":"remove__right--padding"}
            >
                {formContent1}
            </Grid>
        </div>
        )
}

export const FinancialEligibilityInformationPage = ({errors, values, handleChange, }) => {
    const language = useSelector(state => state.language.language);

    const formContent2 = <FormInputCreator 
                            jsonObject={FinancialEligibilityInformation} 
                            errors={errors} 
                            values={values}
                            handleChange={handleChange}/>;

    return (
        <div>
            <Grid 
                container 
                spacing={3} 
                dir={language === "ar" ? "rtl" : "ltr"}
                className={language === "ar" ? "remove__left--padding":"remove__right--padding"}
            >
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
            <Grid 
                container 
                spacing={3} 
                dir={language === "ar" ? "rtl" : "ltr"}
                className={language === "ar" ? "remove__left--padding":"remove__right--padding"}
            >
                {formContent3}
            </Grid>
        </div>
    )
}

export const EvaluationEligibilityInformationPage = ({errors, values, handleChange}) => {
    const language = useSelector(state => state.language.language);

    const formContent4 =
                        <FormInputCreator 
                            jsonObject={EvaluationEligibilityInformation} 
                            errors={errors} 
                            values={values}
                            handleChange={handleChange}/>;

    return (
        <div>
            <Grid 
                container 
                spacing={3} 
                dir={language === "ar" ? "rtl" : "ltr"}
                className={language === "ar" ? "remove__left--padding":"remove__right--padding"}
            >
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
            <Grid 
                container 
                spacing={3} 
                dir={language === "ar" ? "rtl" : "ltr"}
                className={language === "ar" ? "remove__left--padding":"remove__right--padding"}
            >
                {formContent5}
            </Grid>
        </div>
    ) 
}