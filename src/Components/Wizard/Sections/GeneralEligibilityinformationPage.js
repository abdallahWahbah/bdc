import React from 'react'
import FormInputCreator from "../../Inputs/FormInputCreator";
import { GeneralEligibilityinformationSchema } from '../../Inputs/Schema';
import { useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";

const GeneralEligibilityinformationPage = ({ errors, values, handleChange }) => {
    const language = useSelector(state => state.language.language);

    const generaleligibilityinformationContent = <FormInputCreator
                                                    jsonObject={GeneralEligibilityinformationSchema}
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
                className={language === "ar" ? "remove__left--padding" : "remove__right--padding"}
            >
                {generaleligibilityinformationContent}
            </Grid>
        </div>
    )
}

export default GeneralEligibilityinformationPage;