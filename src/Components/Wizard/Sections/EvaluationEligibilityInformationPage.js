import React from 'react'
import FormInputCreator from "../../Inputs/FormInputCreator";
import { EvaluationEligibilityInformationSchema } from '../../Inputs/Schema';
import { useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";

const EvaluationEligibilityInformationPage = ({ errors, values, handleChange }) => {
    const language = useSelector(state => state.language.language);

    const evaluationEligibilityInformationContent = <FormInputCreator
                                                        jsonObject={EvaluationEligibilityInformationSchema}
                                                        errors={errors}
                                                        values={values}
                                                        handleChange={handleChange} 
                                                    />;

    return (
            <Grid
                container
                spacing={3}
                dir={language === "ar" ? "rtl" : "ltr"}
                className={language === "ar" ? "remove__left--padding" : "remove__right--padding"}
            >
                {evaluationEligibilityInformationContent}
            </Grid>
    )
}

export default EvaluationEligibilityInformationPage;